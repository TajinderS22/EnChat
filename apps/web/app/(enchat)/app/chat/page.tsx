"use client";
import { useSession,signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import {prisma} from '@repo/db'
import axios from 'axios';
import LeftContainer from '../../../../components/chat/LeftContainer';
import MainChatContainer from '../../../../components/chat/MainChatContainer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { setUser } from '../../../../redux/slices/userSlice';


const page = () => {
  const router=useRouter()
  const User=useSelector((state:RootState)=>state?.user)
  const dispatch=useDispatch()


  const { data: session, status } = useSession();
  useEffect(()=>{
    if(status=='unauthenticated'){
      router.push("/signin")
    }
    // @ts-ignore
    const user=session?.user?.user 
    dispatch(setUser(user))


  },[session,router,status])

  if(status=="loading"){
    return(
      <div>
        loading.....
      </div>
    )
  }
  console.log(User)
  const getAllChatRooms=async()=>{

    const chatRooms= await axios.post("http://localhost:3030/user/chats",{userId:User.id})
    
    console.log(chatRooms)

  }
  // getAllChatRooms()
  return (
    <div className='w-[98%] mx-auto flex max-w-[1536px]  h-[98svh] my-4 bg-gray-600 '>
      <LeftContainer/>
      <MainChatContainer/>
    </div>
  )
}

export default page