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
import { HttpServerAddress } from '../../utils/secrets'



const LeftContainer = () => {

  if(!HttpServerAddress){
    return(
      <div>
        SomeDev Borke the app  
      </div>
      )
    }

  const dispatch=useDispatch()

  const User=useSelector((state:RootState)=>state.user)

  const [ChatRooms,setChatRooms]=useState<any>(null)

  const NewChatRef=useRef<HTMLInputElement>(null)

  const [refresh,setRefresh]=useState(false)

  const ActiveChatUser=useSelector((state:RootState)=>state.ActiveChatUser)
  const ActiveChatRoom=useSelector((state:RootState)=>state.ActiveChatRoom)
    const NewMessage=useSelector((state:RootState)=>state.NewMessage)


  const getAllChatRooms=async()=>{

  const chatRooms= await axios.post(HttpServerAddress+"/user/chatrooms",{userId:User.id})
    setChatRooms(chatRooms.data.chatRooms)
    
  }
  useEffect(()=>{
    if(User.id){
      getAllChatRooms()
    }
  },[User,ActiveChatUser,ActiveChatRoom,refresh])

  const handleNewChatClick=async()=>{
    const user= await axios.post(HttpServerAddress+"/user/find_user",{username:NewChatRef?.current?.value})
    if(!user.data.user){
      dispatch(setErrorMessage(user.data.message))
      setTimeout(()=>{
        dispatch(clearErrorMessage())
      },3000)
    }
    dispatch(setActiveChatUser(user.data))
    setRefresh(!refresh)

    dispatch(setActiveChatRoom(null))

  }


  return (
    <div className='w-[30%]
      bg-[#cccccc] dark:bg-[#151515]
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
        <div>
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
    </div>
  )
}

export default LeftContainer