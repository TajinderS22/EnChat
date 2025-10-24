/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useSession, } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import axios from 'axios';
import LeftContainer from '../../../../components/chat/LeftContainer';
import MainChatContainer from '../../../../components/chat/MainChatContainer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { setUser } from '../../../../redux/slices/userSlice';
import Alert from '../../../../components/Alert';
import Loading from '../../../../components/Loading';


const page = () => {
  const router=useRouter()
  const User=useSelector((state:RootState)=>state?.user)
  const dispatch=useDispatch()

  const ErrorMessage=useSelector((state:RootState)=>state.ErrorMessage)


  const { data: session, status } = useSession();

  

  useEffect(()=>{
    if(status=='unauthenticated'){
      router.push("/signin")
    }
    // @ts-ignore
    const user=session?.user?.user 
    dispatch(setUser(user))


  },[session,router,status,dispatch])

  if(status=="loading"){
    return(
      <div className='h-screen w-screen flex items-center justify-center'>
        <Loading/>
      </div>
    )
  }

  return (
    <div className='w-[98%] mx-auto flex max-w-[1536px] rounded-xl h-[98svh] my-4 bg-[#FAFAFA] dark:bg-[#0A0A0A] '>
      {ErrorMessage&&
      
      <div className=' fixed w-full px-16 flex justify-between'>
        <Alert message={ErrorMessage}/>
      </div>
      
      }
      <LeftContainer/>
      <MainChatContainer/>
    </div>
  )
}

export default page