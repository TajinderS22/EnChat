import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

export type MessageBubbleType={
    createdAt:Date,
    id?:number,
    userId:number,
    message:string
}


const MessageBubble = (props:MessageBubbleType) => {
    const User= useSelector((state:RootState)=>state.user)
    const {message,userId,}=props
  return (
    <div className={`w-full flex  mx-auto ${User.id==userId.toString()?" justify-end ":" justify-start "}" `}>
        <div className='max-w-4/12 w-fit px-4 pr-6 bg-yellow-200/30 p-2 m-2 rounded-lg'>
            {message}
        </div>
    </div>
  )
}

export default MessageBubble