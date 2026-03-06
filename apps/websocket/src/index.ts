import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });

import WebSocket, { WebSocketServer } from "ws";
import { getPrisma } from "@repo/db";

// getPrisma() is called here — AFTER dotenv.config() above has run,
// so DATABASE_URL is guaranteed to be set
const db = await getPrisma();

interface extendedWebSocket extends WebSocket {
  userId?: string;
}

const wss = new WebSocketServer({
  port: process.env.WS_PORT ? parseInt(process.env.WS_PORT, 10) : 8080,
});

const onlineUsers = new Map();
const messagesToBeSaved: any = [];

const sendMessagesImmediate = async () => {
  if (messagesToBeSaved.length === 0) return;

  // Copy and clear the queue immediately to avoid race conditions
  const messagesToProcess = [...messagesToBeSaved];
  messagesToBeSaved.length = 0;

  try {
    const messages = messagesToProcess.map((x: any) => x.messageData);
    await db.messages.createMany({
      data: messages,
    });

    const allChatroomId = messagesToProcess.map((x: any) => ({
      chatroomId: x.messageData.chatroomId,
      time: new Date(x.time).getTime(), // Ensure time is a number for Map comparison
    }));

    console.log(`Saved ${messagesToProcess.length} messages.`, allChatroomId);

    const chatroomUpdates = new Map<number, number>();
    allChatroomId.forEach(({ chatroomId, time }: { chatroomId: number, time: number }) => {
      if (
        !chatroomUpdates.has(chatroomId) ||
        chatroomUpdates.get(chatroomId)! < time
      ) {
        chatroomUpdates.set(chatroomId, time);
      }
    });

    for (const [chatroomId, time] of chatroomUpdates) {
      await db.chatrooms.update({
        where: { id: chatroomId },
        data: { lastMessageAt: new Date(time) },
      });
    }
  } catch (error) {
    console.error("Failed to save messages:", error);

  }
};

setInterval(sendMessagesImmediate, 5000);

wss.on("connection", async (ws: extendedWebSocket) => {
  ws.on("message", async (data) => {
    try {
      const parsed = JSON.parse(data.toString());

      if (parsed.type === "register") {
        const userId = parsed.userId;
        onlineUsers.set(userId, ws);
        ws.userId = userId;
        return;
      }

      if (parsed.type === "EncryptedAES") {
        const recipient = onlineUsers.get(parsed.to);

        // only forward if recipient exists AND is not the sender
        if (recipient && parsed.to !== parsed.from) {
          recipient.send(JSON.stringify(parsed));
        }
      }

      if (parsed.type === "send_message") {
        const {
          fromUserId,
          toUserId,
          message,
          message_type,
          messageFromSender,
          chatroomIdFe,
          iv,
          tag,
        } = parsed;

        let chatroomId = chatroomIdFe;

        if (!chatroomId) {
          const existingChatRoom = await db.chatroomUsers.findFirst({
            where: {
              userId: fromUserId,
              chatroom: {
                users: {
                  some: {
                    userId: toUserId,
                  },
                },
              },
            },
            select: {
              chatroomId: true,
            },
          });
          if (existingChatRoom) {
            chatroomId = existingChatRoom.chatroomId;
            messagesToBeSaved.push({
              messageData: {
                userId: fromUserId,
                chatroomId,
                message,
                messageFromSender,
              },
              time: Date.now(),
            });
          } else {
            const newChatRoom = await db.chatrooms.create({
              data: {
                users: {
                  create: [{ userId: fromUserId }, { userId: toUserId }],
                },
              },
            });
            chatroomId = newChatRoom.id;

            const messageChatId = JSON.stringify({
              type: "ChatroomId",
              chatroomId,
            });

            const sendMessageToUsers = (userIds: string[], message: string) => {
              userIds.forEach((userId) => {
                const ws = onlineUsers.get(userId);
                if (ws && ws.readyState === WebSocket.OPEN) {
                  ws.send(message);
                  console.log(`Message sent to user ${userId}`);
                } else {
                  console.log(
                    `User ${userId} is not online or WebSocket is not open.`,
                  );
                }
              });
            };

            sendMessageToUsers([fromUserId, toUserId], messageChatId);

            messagesToBeSaved.push({
              messageData: {
                userId: fromUserId,
                chatroomId,
                message,
                messageFromSender,
              },
              time: Date.now(),
            });
            sendMessagesImmediate();
          }
        }

        messagesToBeSaved.push({
          messageData: {
            userId: fromUserId,
            chatroomId,
            message,
            messageFromSender,
          },
          time: Date.now(),
        });

        const recipientSocket = onlineUsers.get(toUserId);

        ws.send(
          JSON.stringify({
            type: "receive_message",
            userId: fromUserId,
            chatroomId,
            message,
            messageFromSender,
          }),
        );

        //  checking if reciver is online on socket
        if (recipientSocket && recipientSocket.readyState == WebSocket.OPEN) {
          recipientSocket.send(
            JSON.stringify({
              type: "receive_message",
              userId: fromUserId,
              chatroomId,
              message,
              messageFromSender,
            }),
          );
        }
      }
    } catch (error) {
      console.log(error);
    }
  });

  ws.on("close", async () => {
    if (ws.userId) {
      onlineUsers.delete(ws.userId);
    }
    console.log("client " + ws.userId + " disconnected.");
  });
});

console.log(`WebSocket server running on port ${process.env.WS_PORT || 8080}`);
