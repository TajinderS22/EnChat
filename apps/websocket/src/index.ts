import WebSocket, { WebSocketServer } from "ws";
import dotenv from "dotenv";
import { prisma } from "@repo/db";

dotenv.config({ path: "../../../.env" });

interface extendedWebSocket extends WebSocket {
  userId?: string;
}

const wss = new WebSocketServer({
  port: process.env.WS_PORT ? parseInt(process.env.WS_PORT, 10) : 8080,
});

const onlineUsers = new Map();
const messagesToBeSaved: any = [];

const sendMessagesImmediate = async () => {
  await prisma.messages.createMany({
    data: messagesToBeSaved,
  });
  messagesToBeSaved.length = 0;
};

if (messagesToBeSaved.length > 10) {
  sendMessagesImmediate();
} else {
  setInterval(async () => {
    if (messagesToBeSaved.length > 0) {
      await prisma.messages.createMany({
        data: messagesToBeSaved,
      });
      messagesToBeSaved.length = 0;
    }
  }, 5000);
}

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
          const existingChatRoom = await prisma.chatroomUsers.findFirst({
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
              userId: fromUserId,
              chatroomId,
              message,
              messageFromSender,
            });
          } else {
            const newChatRoom = await prisma.chatrooms.create({
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
                    `User ${userId} is not online or WebSocket is not open.`
                  );
                }
              });
            };

            sendMessageToUsers([fromUserId, toUserId], messageChatId);

            messagesToBeSaved.push({
              userId: fromUserId,
              chatroomId,
              message,
              messageFromSender,
            });
            sendMessagesImmediate();
          }
        }

        messagesToBeSaved.push({
          userId: fromUserId,
          chatroomId,
          message,
          messageFromSender,
        });

        const recipientSocket = onlineUsers.get(toUserId);

        ws.send(
          JSON.stringify({
            type: "receive_message",
            userId: fromUserId,
            chatroomId,
            message,
            messageFromSender,
          })
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
            })
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
