import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

export type MessageBubbleType={
    createdAt?:Date,
    id?:number,
    userId:number,
    message:string
}


const MessageBubble = (props:MessageBubbleType) => {
    const User= useSelector((state:RootState)=>state.user)
    const {message,userId,}=props
    // console.log(userId,typeof(userId))
  return (
    <div className={`w-full flex  mx-auto ${User.id==userId.toString()?" justify-end ":" justify-start "}" `}>
        <div className={`max-w-4/12 w-fit px-4 pr-6 ${User.id==userId.toString()? " bg-[#2ab6aa] text-[#212121] ":" bg-[#cccccc] text-[#212121]"} p-2 overflow-scroll m-2 rounded-lg`}>
            {message}
        </div>
    </div>
  )
}

export default MessageBubble