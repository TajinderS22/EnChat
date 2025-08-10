import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import axios from 'axios'
import MessageBubble, { MessageBubbleType } from './MessageBubble'
import type { user } from './ChatroomBox'
import { setActiveChatRoom } from '../../redux/slices/ActiveChatRoom'
import Loading from '../Loading'
import { clearErrorMessage, setErrorMessage } from '../../redux/slices/ErrorMessageSlice'
import { removeNewMessage, setNewMessage } from '../../redux/slices/NewMessageChatRoom'
import BG from '../icons/BG'
import { HttpServerAddress } from '../../utils/secrets'


interface RootStateL {

  ActiveChatUser: user | null;

}

const MainChatContainer = () => {

    const wsRef=useRef<WebSocket|null>(null)
    const sendMessageRef=useRef<HTMLInputElement>(null)
    const [wsMessage,setWsMessage]=useState<any>(null)
    const [currentChatMessagesLoading,setCurrentChatMessagesLoading]=useState(true)

    const NewMessage=useSelector((state:RootState)=>state.NewMessage)

    const dispatch=useDispatch()

    const ActiveChatRoom=useSelector((state:RootState)=>state.ActiveChatRoom)

    const [AllMessages,setAllMessages]=useState<any[]>([])
    //@ts-ignore
    const ActiveChatUser=useSelector<RootStateL,user>((state:RootState)=> state.ActiveChatUser)
    const [displayMessages,setDisplayMessages]=useState<any[]>([])
    // console.log(ActiveChatRoom)

    const User=useSelector((state:RootState)=>state.user)

    const handleSendMessageClick=async()=>{
        const MessageData={
            type:'send_message',
            fromUserId:User.id,
            toUserId:ActiveChatUser.id,
            message:sendMessageRef?.current?.value,
            chatroomIdFe:ActiveChatRoom    
        }
        if(MessageData.message==' '||''){
            dispatch(setErrorMessage("Please enter some message"))
            setTimeout(()=>{
                dispatch(clearErrorMessage())
            },3000)
        }
        sendMessage(JSON.stringify(MessageData))
        if (sendMessageRef?.current) {
          sendMessageRef.current.value = '';
        }

    }



    const getCurrentChatMessages=async()=>{
        const response= await axios.post(HttpServerAddress+"/user/chatroom/chats",{chatroomId:ActiveChatRoom})
        // console.log(ActiveChatRoom)
        if(response.status==200){
            setCurrentChatMessagesLoading(false)
        }
        setDisplayMessages(response?.data?.messages)
        
    }
    
    useEffect(()=>{
      setAllMessages((prev) =>
      prev.filter(
        (msg) =>
          !displayMessages.some(
            (dmsg) => dmsg.chatroomId === msg.chatroomId && dmsg.message === msg.message
          )
      )
      );
    },[displayMessages])




    useEffect(()=>{

        if(!User.id) return;

        wsRef.current=new WebSocket('ws://localhost:8080')

        wsRef.current.onopen=()=>{
            if(wsRef.current && User.id && wsRef.current?.readyState === WebSocket.OPEN ){
                wsRef.current?.send(JSON.stringify({
                type:"register",
                userId:User.id
            }))
            }
        }
        
        wsRef.current.onmessage=async (event)=>{
            const newMessage = JSON.parse(event.data);
            console.log(newMessage.chatroomId)
            setAllMessages((prev)=>[...prev,newMessage])
            dispatch(setNewMessage([newMessage.chatroomId]))  
            
            
        }


    },[User,ActiveChatRoom])

    console.log("All Messages ",AllMessages)
    useEffect(()=>{
        if(ActiveChatRoom){
            setCurrentChatMessagesLoading(true)
            setDisplayMessages([])
            
            getCurrentChatMessages()
        }else(
            setDisplayMessages([])
        )
    },[ActiveChatRoom,ActiveChatUser])

    useEffect(() => {
      if (ActiveChatRoom && NewMessage?.includes(ActiveChatRoom)) {
        dispatch(removeNewMessage(ActiveChatRoom));
      }
    }, [ActiveChatRoom, NewMessage, dispatch]);

    const sendMessage=async(message:any)=>{
        if(wsRef.current && message &&wsRef.current.readyState === WebSocket.OPEN){
            wsRef.current.send(message)
        }
    }
    let tempMessageId=0;

     const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [displayMessages,AllMessages]); 

  return (
  <div className="w-full dark:bg-[url('/wavey-fingerprint.svg')] bg-no-repeat bg-cover">      
        {ActiveChatRoom ?
        < div className='flex-1 flex flex-col pt-4 h-full'>

        <div className='bg-[#5ecfc6] dark:bg-teal-400/80 flex w-[95%] p-4 mx-auto rounded-md' >
            <div className='font-bold text-xl'>
                { ActiveChatUser?.firstname + " " +  ActiveChatUser?.lastname}
            </div>
        </div>

        {
            currentChatMessagesLoading?
            <Loading/>
            :
            <div className='flex-1 overflow-y-scroll px-4  '>

              {
                displayMessages?.filter(x=>x.chatroomId==ActiveChatRoom).map((message:MessageBubbleType)=>(
                   <div key={message.id||++tempMessageId+"_tempId"} className='w-[95%] mx-auto '>
                     <MessageBubble createdAt={message.createdAt} id={message.id} userId={message.userId} message={message.message}/>
                   </div>
                ))
              }
  
              {
                
                AllMessages?.filter(x=>x.chatroomId==ActiveChatRoom).map((message:MessageBubbleType)=>(
                   <div key={message.id||++tempMessageId+"_tempId"} className='w-[95%] mx-auto '>
                     <MessageBubble createdAt={message.createdAt} id={message.id} userId={message.userId} message={message.message}/>
                   </div>
                ))
              }

               <div ref={bottomRef} />
            </div>
        }



        <div className=' w-full bg-[#cccccc] dark:bg-[#141414]  flex'>
         <input type="text" ref={sendMessageRef} className='bg-[#141414] text-[#cccccc] dark:text-[#141414]  dark:bg-[#cccccc] p-2 p m-2 rounded-2xl flex-1'
         onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            handleSendMessageClick();
          }
        }}
         />
         <button className=' bg-[#10B981] p-2 px-4 m-2 rounded-xl'
         
         onClick={()=>{
            handleSendMessageClick()
         }}

         >
          Send
         </button>
      </div>
  </div>
  :
         null

}
    </div>
  )
}

export default MainChatContainer