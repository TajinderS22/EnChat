import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'



const MainChatContainer = () => {

    const wsRef=useRef<WebSocket|null>(null)
    const sendMessageRef=useRef<HTMLInputElement>(null)
    const [wsMessage,setWsMessage]=useState(null)

    const User=useSelector((state:RootState)=>state.user)

    const handleSendMessageClick=async()=>{
        const MessageData={
            type:'send_message',
            fromUserId:User.id,
            
        }
    }
    
    useEffect(()=>{
        wsRef.current=new WebSocket('ws://localhost:8080')

        wsRef.current.onopen=()=>{
            console.log("connected to Enchat Websocket Server")
            wsRef.current?.send(JSON.stringify({
                type:"register",
                userId:User.id
            }))
        }
    })

    const sendMessage=async()=>{
        if(wsRef.current && wsMessage &&wsRef.current.readyState === WebSocket.OPEN){
            wsRef.current.send(wsMessage)
        }
    }

  return (
    <div className='flex-1 flex flex-col p-4 h-full'>
        <div className='flex-1'>
          chat area
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