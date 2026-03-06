import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { decryptMessage } from "@repo/encryption/dist";
import { setErrorMessage } from "../../redux/slices/ErrorMessageSlice";

export type MessageBubbleType = {
  messageFromSender?: string;
  createdAt?: Date;
  id?: number;
  userId: number;
  message: string;
  privateKey: string;
};

const MessageBubble = (props: MessageBubbleType) => {
  const User = useSelector((state: RootState) => state.user);
  const { message, userId, privateKey, messageFromSender, createdAt } = props;

  const [decryptedMessage, setDecryptedMessage] = useState("...");

  const dispatch = useDispatch();

  useEffect(() => {
    const decrypt = async () => {
      try {
        let decryptedText;
        if (userId == Number(User.id)) {
          if (!messageFromSender) {
            dispatch(setErrorMessage("Decryption failed"));
            return;
          }
          decryptedText = await decryptMessage(messageFromSender, privateKey);
        } else {
          decryptedText = await decryptMessage(message, privateKey);
        }

        setDecryptedMessage(decryptedText);
      } catch (error) {
        console.error("Decryption failed:", error);
        setDecryptedMessage("[Decryption Failed]");
      }
    };

    decrypt();
  }, [message, privateKey, User.id, userId]); // Added User.id and userId to the dependency array

  const createdAtDate = createdAt ? new Date(createdAt) : null;


  return (
    <div
      className={`w-full flex  mx-auto ${Number(User.id) == userId ? " justify-end " : " justify-start "}" `}
    >
      <div
        className={`max-w-4/12  px-2 pt-1 min-w-15  ${Number(User.id) == userId ? " bg-[#2ab6aa] text-[#212121] " : " bg-[#cccccc] text-[#212121]"} p-1 overflow-scroll m-1 rounded-lg flex flex-col `}
      >
        <div className="w-full bg-red-10">
          {decryptedMessage}
        </div>

        <div className="flex mt-[2px] justify-end">
          <div className="text-[10px]">
            {createdAtDate?.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })}
          </div>
        </div>


      </div>
    </div>
  );
};

export default MessageBubble;
