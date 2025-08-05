
import React from 'react'
import { useDispatch } from 'react-redux'
import { setActiveChatRoom } from '../../redux/slices/ActiveChatRoom'
import { setActiveChatUser } from '../../redux/slices/ActiveChatUser'

type user={
    id:number,
    username:string
    
}

type ChatRoom={
    id?:number,
    users: {
    user: user
  }[]
}

type ChatRoomBoxType={
    chatRoom:ChatRoom
}


const ChatroomBox = ({chatRoom}:ChatRoomBoxType) => {
    const {id,users}=chatRoom

    const dispatch=useDispatch()


    // const ActiveChatUser=useSelector((state:RootState)=>state.ActiveChatUser)
    // const ActiveChatRoom=useSelector((state:RootState)=>state.ActiveChatRoom)

    
    const user=users[0]?.user
    console.log(user)

  return (
    <div className='flex border-b bg-gray-200/20 rounded-lg flex-col m-2 p-2 h-18'
    onClick={()=>{
        if(id){
            dispatch(setActiveChatRoom(id))
        }else{
            dispatch(setActiveChatUser(user?.id))
        }
    }}
    >
        <div>
            {user?.username}
        </div>

        <div>
            Status will be added here 
        </div>

    </div>
  )
}

export default ChatroomBox