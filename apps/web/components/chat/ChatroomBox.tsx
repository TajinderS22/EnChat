
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveChatRoom } from '../../redux/slices/ActiveChatRoom'
import { setActiveChatUser } from '../../redux/slices/ActiveChatUser'
import { clearNewMessage } from '../../redux/slices/NewMessageChatRoom'
import { RootState } from '../../redux/store'

export type user={
    id:number,
    username:string,
    firstname:string,
    lastname:string,
    publicKey:string
    
}

type ChatRoom={
    id?:number,
    users: {
    user: user
  }[]
}

type ChatRoomBoxType={
    chatRoom:ChatRoom,
    newMessageChatId:number
}


const ChatroomBox = ({chatRoom,newMessageChatId}:ChatRoomBoxType) => {
    const {id,users}=chatRoom

    const dispatch=useDispatch()




    // const ActiveChatUser=useSelector((state:RootState)=>state.ActiveChatUser)
    const ActiveChatRoom=useSelector((state:RootState)=>state.ActiveChatRoom)

    
    const user=users[0]?.user

  return (
    <div className={`flex border-b bg-teal-200/20 ${id==ActiveChatRoom&& ' bg-teal-400/60 '} rounded-lg 
     m-2 p-2 h-18
    hover:shadow-md hover:-translate-y-0.5 shadow-teal-200
    transform duration
    items-center
    
    `}
    onClick={()=>{
        if(id){
            dispatch(setActiveChatRoom(id))
            dispatch(setActiveChatUser(user))
        }else{
            dispatch(setActiveChatUser(user))
        }

        dispatch(clearNewMessage())

    }}
    >
        <div className='flex-1'>
            <div className='text-xl font-semibold' >
            {user?.firstname+" "+user?.lastname}
            </div>

            <div className='text-sm' >
                {user?.username}
            </div>
        </div>

        {
            newMessageChatId==id&&
            <div className='w-3 bg-green-400 animate-ping rounded-full'>
            </div>
        }

    </div>
  )
}

export default ChatroomBox