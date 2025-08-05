'use client'

import React, { useEffect, useState } from 'react'


import ChatroomBox from './ChatroomBox'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

const LeftContainer = () => {

  const User=useSelector((state:RootState)=>state.user)

  const [ChatRooms,setChatRooms]=useState<any>(null)

  const getAllChatRooms=async()=>{

  const chatRooms= await axios.post("http://localhost:3030/user/chatrooms",{userId:User.id})
    
    setChatRooms(chatRooms.data.chatRooms)
    

  }

  useEffect(()=>{
    if(User.id){
      getAllChatRooms()
    }
  },[User])


  return (
    <div className='w-[30%]  bg-slate-700 p-2'>
        <div className='flex  px-2'>
          <div className='flex-1'>
            {/* search bar */}  
            <input type="text" placeholder='Search contact' className='bg-purple-700/30  p-2 rounded-xl' /> 
          </div>
          <div>
            <button
            
            className='bg-purple-300 p-2 rounded-lg'    
            > new chat</button>
          </div>
        </div>
        <div>
          {
            ChatRooms?.map((chatroom:any)=>(
              <div key={chatroom?.id}>
                <ChatroomBox chatRoom={chatroom} />
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default LeftContainer