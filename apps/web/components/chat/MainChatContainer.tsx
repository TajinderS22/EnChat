import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import axios from 'axios'
import MessageBubble, { MessageBubbleType } from './MessageBubble'



const MainChatContainer = () => {

    const wsRef=useRef<WebSocket|null>(null)
    const sendMessageRef=useRef<HTMLInputElement>(null)
    const [wsMessage,setWsMessage]=useState(null)

    const ActiveChatRoom=useSelector((state:RootState)=>state.ActiveChatRoom)

    const [displayMessages,setDisplayMessages]=useState<any>([])
    // console.log(ActiveChatRoom)

    const User=useSelector((state:RootState)=>state.user)

    const handleSendMessageClick=async()=>{
        const MessageData={
            type:'send_message',
            fromUserId:User.id,
            
            
        }
    }



    const getCurrentChatMessages=async()=>{
        const response= await axios.post("http://localhost:3030/user/chatroom/chats",{chatroomId:ActiveChatRoom})

        setDisplayMessages(response?.data?.messages)
        
    }
    


    useEffect(()=>{
        wsRef.current=new WebSocket('ws://localhost:8080')

        wsRef.current.onopen=()=>{
            if(wsRef.current && wsRef.current.readyState===WebSocket.OPEN){
                wsRef.current?.send(JSON.stringify({
                type:"register",
                userId:User.id
            }))
            }
        }
    },[])

    console.log('display messages :',displayMessages)

    useEffect(()=>{
        if(ActiveChatRoom){
            getCurrentChatMessages()
        }
    },[ActiveChatRoom])

    const sendMessage=async()=>{
        if(wsRef.current && wsMessage &&wsRef.current.readyState === WebSocket.OPEN){
            wsRef.current.send(wsMessage)
        }
    }

  return (
    <div className='flex-1 flex flex-col p-4 h-full'>
        <div className='flex-1'>
          {
            displayMessages.map((message:MessageBubbleType)=>(
               <div key={message.id} className='w-[95%] mx-auto '>
                 <MessageBubble createdAt={message.createdAt} id={message.id} userId={message.userId} message={message.message}/>
               </div>
            ))
          }
        </div>



        <div className=' w-full flex'>
         <input type="text" ref={sendMessageRef} className='bg-slate-300 p-2 p m-2 rounded-2xl flex-1' />
         <button className=' bg-green-400/40 p-2 px-4 m-2 rounded-xl'
         
         onClick={()=>{
            handleSendMessageClick()
         }}

         >
          Send
         </button>
      </div>
  </div>
  )
}

export default MainChatContainer