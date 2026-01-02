"use client";

import React, { useEffect, useRef, useState } from "react";

import toast, { Toaster } from "react-hot-toast";

import ChatroomBox from "./ChatroomBox";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setActiveChatUser } from "../../redux/slices/ActiveChatUser";
import { setActiveChatRoom } from "../../redux/slices/ActiveChatRoom";
import Loading from "../Loading";
import SearchIcon from "../icons/Search";
import {
  clearErrorMessage,
  setErrorMessage,
} from "../../redux/slices/ErrorMessageSlice";
import { signOut } from "next-auth/react";
import { HttpServerAddress } from "../../utils/secrets";

const LeftContainer = () => {
  const dispatch = useDispatch();

  const User = useSelector((state: RootState) => state.user);

  const [newChatUsers, setNewChatUsers] = useState<any[] | null>(null);

  const [ChatRooms, setChatRooms] = useState<any>(null);

  const NewChatRef = useRef<HTMLInputElement>(null);

  const [refresh, setRefresh] = useState(false);

  const ActiveChatUser = useSelector(
    (state: RootState) => state.ActiveChatUser
  );
  const ActiveChatRoom = useSelector(
    (state: RootState) => state.ActiveChatRoom
  );
  const NewMessage = useSelector((state: RootState) => state.NewMessage);
  const getAllChatRooms = async () => {
    if (!User.id) return null;
    const chatRooms = await axios.post(HttpServerAddress + "/user/chatrooms", {
      userId: User.id,
    });

    setChatRooms(chatRooms.data.chatRooms);
  };
  useEffect(() => {
    setInterval(() => {
      getAllChatRooms();
    }, 5000);
  }, [User, ActiveChatUser, ActiveChatRoom, refresh]);

  const getNewChatUsers = async () => {
    const user = await axios.post(HttpServerAddress + "/user/find_user", {
      username: NewChatRef?.current?.value,
    });
    if (user.data.user.length == 0) {
      setNewChatUsers(null);
      return;
    }
    setNewChatUsers(user.data.user);
  };

  const handleNewChatClick = async (user: any) => {
    // create chatroom here
    const TempUser = user;

    const toUserId = TempUser.id;
    const fromUserId = User.id;
    const data = {
      toUserId,
      fromUserId,
    };

    const response = await axios.post(
      HttpServerAddress + "/create/chatroom",
      data
    );
    dispatch(setActiveChatRoom(response.data.chatroomId));
    dispatch(setActiveChatUser(user));
    setNewChatUsers(null);
    if (NewChatRef.current) {
      NewChatRef.current.value = "";
    }

    setRefresh(!refresh);
  };

  if (!HttpServerAddress) {
    return <div>SomeDev Borke the app</div>;
  }

  return (
    <div
      className="w-[30%]
      bg-[#cccccc] dark:bg-[#151515]
      flex flex-col
      p-2"
    >
      <Toaster />
      <div className=" justify-between  p-3 rounded-lg  px-2">
        <div className="flex flex-col w-full">
          <div className="w-11/12 mx-auto ">
            {/* search bar */}
            <div className="flex gap-2">
              <input
                type="text"
                ref={NewChatRef}
                placeholder="New Chat"
                className="px-4 p-2 rounded-xl w-full
             bg-[#141414] dark:bg-[#cccccc] text-[#fafafa] dark:text-[#141414]
"
                onChange={() => {
                  console.log(NewChatRef?.current?.value !== "");
                  if (NewChatRef?.current?.value !== "") {
                    getNewChatUsers();
                  } else {
                    setNewChatUsers(null);
                  }
                  return setNewChatUsers(null);
                }}
              />

              <div
                className=" p-2 w-10 rounded-lg dark:bg-[#cccccc] "
                onClick={() => {
                  if (!newChatUsers) {
                    toast.error("No user found", {
                      duration: 2000,
                      position: "top-left",
                      style: {
                        border: "1px solid #713200",
                        padding: "6px",
                        color: "#ffffff",
                        background: "#151515",
                      },
                    });
                  }
                }}
              >
                <SearchIcon />
              </div>
            </div>

            {newChatUsers && (
              <div className=" absolute mx-auto  min-w-85 bg-stone-800 rounded mt-2 p-2 ">
                {newChatUsers.map((user: any) => {
                  return (
                    <div
                      className="m-1 p-2 hover:bg-stone-900 text-white text-lg  rounded-lg"
                      key={user.id}
                      onClick={() => {
                        handleNewChatClick(user);
                      }}
                    >
                      {user.username}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex-1">
        {ChatRooms ? (
          ChatRooms?.map((chatroom: any) => {
            //@ts-ignore
            const hasNewMessage = NewMessage.includes(chatroom?.id);
            return (
              <div key={chatroom?.id}>
                <ChatroomBox
                  chatRoom={chatroom}
                  newMessageChatId={hasNewMessage ? chatroom?.id : null}
                />
              </div>
            );
          })
        ) : (
          <div className="h-screen w-full flex items-center justify-center">
            <Loading />
          </div>
        )}
      </div>

      <div className="w-full border p-2 rounded-md flex justify-center border-slate-800  ">
        <button
          className="bg-stone-800 text-xl p-2 w-60  rounded-2xl"
          onClick={() => {
            signOut();
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default LeftContainer;
