'use client'

import React, { useEffect, useRef, useState } from 'react'


import ChatroomBox from './ChatroomBox'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { setActiveChatUser } from '../../redux/slices/ActiveChatUser'
import { setActiveChatRoom } from '../../redux/slices/ActiveChatRoom'
import Loading from '../Loading'
import SearchIcon from '../icons/Search'
import { clearErrorMessage, setErrorMessage } from '../../redux/slices/ErrorMessageSlice'
import { signOut } from 'next-auth/react'
import { HttpServerAddress } from '../../utils/secrets'



const LeftContainer = () => {



  const dispatch=useDispatch()

  const User=useSelector((state:RootState)=>state.user)

  const [ChatRooms,setChatRooms]=useState<any>(null)

  const NewChatRef=useRef<HTMLInputElement>(null)

  const [refresh,setRefresh]=useState(false)

  const ActiveChatUser=useSelector((state:RootState)=>state.ActiveChatUser)
  const ActiveChatRoom=useSelector((state:RootState)=>state.ActiveChatRoom)
    const NewMessage=useSelector((state:RootState)=>state.NewMessage)


  const getAllChatRooms=async()=>{
  
  if(!User.id) return null
  const chatRooms= await axios.post(HttpServerAddress+"/user/chatrooms",{userId:User.id})

    setChatRooms(chatRooms.data.chatRooms)
    
  }
  useEffect(()=>{
    
    setInterval(()=>{
      getAllChatRooms()
    },5000)
    
  },[User,ActiveChatUser,ActiveChatRoom,refresh])

  const handleNewChatClick=async()=>{
    const user= await axios.post(HttpServerAddress+"/user/find_user",{username:NewChatRef?.current?.value})
    if(!user.data.user){
      dispatch(setErrorMessage(user.data.message))
      setTimeout(()=>{
        dispatch(clearErrorMessage())
      },3000)
    }

    // create chatroom here 
    const TempUser=user.data.user;
    console.log(TempUser) 

    const toUserId=TempUser.id;
    const fromUserId=User.id;
    const data={
      toUserId,
      fromUserId
    }

    const response=await axios.post(HttpServerAddress+"/create/chatroom",data)
    dispatch(setActiveChatRoom(response.data.chatroomId))
    dispatch(setActiveChatUser(user.data.user))
    
    setRefresh(!refresh)
  }

  if(!HttpServerAddress){
    return(
      <div>
        SomeDev Borke the app  
      </div>
      )
    }

  
  return (
    <div className='w-[30%]
      bg-[#cccccc] dark:bg-[#151515]
      flex flex-col
      p-2'>
        <div className='flex w-full justify-between  p-3 rounded-lg  px-2'>
          <div className='w-9/12 '>
            {/* search bar */}  
            <input type="text" ref={NewChatRef}  placeholder='New Chat' className='px-4 p-2 rounded-xl
            w-full
             bg-[#141414] dark:bg-[#cccccc] text-[#fafafa] dark:text-[#141414]
            ' 
            /> 
          </div>
          <div className=''>

            <div
            className=' p-2 w-10 rounded-lg dark:bg-[#cccccc] '    

            onClick={()=>{
              handleNewChatClick()
            }}
            >
              <SearchIcon/>
            </div>
          </div>
        </div>
        <div className='flex-1'>
          {
            ChatRooms?
            ChatRooms?.map((chatroom:any)=>{
              //@ts-ignore
              const hasNewMessage=NewMessage.includes(chatroom?.id)
              return(
                <div key={chatroom?.id}>
                  <ChatroomBox chatRoom={chatroom} newMessageChatId={hasNewMessage?chatroom?.id:null} />
                </div>
              )
            })
            :
            <div className='h-screen w-full flex items-center justify-center'>
              <Loading/>
            </div>
          }
        </div>

        <div className='w-full border p-2 rounded-md flex justify-center border-slate-800  '>
          <button className='bg-slate-700 text-xl p-2 w-60  rounded-2xl' 
            onClick={()=>{
              signOut()
            }}
          >Logout</button>
        </div>
    </div>
  )
}

export default LeftContainer