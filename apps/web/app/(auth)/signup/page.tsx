"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { HttpServerAddress } from "../../../utils/secrets";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";



type Inputs = {
  username: string;
  password: string;
  firstname:string;
  lastname: string;
  email:string,
  id?:number,
};

const Signup = () => {
  const router=useRouter()

  const {data:session}=useSession()

  useEffect(()=>{
    if(session!=null){
      router.push('/app/chat')
    }

  },[session,router])

  const [errorMessage, setErrorMessage] = useState(false);
  const [alert, setAlert] = useState("");


  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data)
    try{

      const response=await axios.post(HttpServerAddress+"/signup",data)
      console.log(response)
      if(response.status===200){
        setAlert("Signup successful, please signin.");
        setErrorMessage(true);
        window.setTimeout(()=>{
          setAlert('')
          setErrorMessage(false)
        },3000)
        router.push('/signin')
      }

    }catch(err){
      console.log(err)
      if(axios.isAxiosError(err)){
        setAlert(err?.response?.data.message)
        setErrorMessage(true)
        window.setTimeout(()=>{
          setErrorMessage(false)
          setAlert("")
        },3000)
      }
    }
  };

  return (
    <div className="max-w-[1920px] mx-auto min-w-screen flex flex-col items-center">
      {errorMessage && (
        <div className="fixed top-5 bg-red-200 text-black px-4 py-2 rounded shadow-md z-50">
          {alert}
        </div>
      )}

      <div className="flex max-w-[1920px] mx-auto items-center justify-center min-h-screen">
        <div className="bg-purple-300/10 w-[330px] h-fit p-4 pt-0 rounded-lg">
          <div className="text-2xl text-purple-300 my-4">
            Sign in to your chats
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <input 
              className={inputboxClass}
              type="text" 
              placeholder="Firstname"
              {...register('firstname')}
            />
            <input 
              className={inputboxClass}
              type="text" 
              placeholder="Lastname"
              {...register('lastname')}
            />
            <input 
              className={inputboxClass}
              type="text" 
              placeholder="E-mail"
              {...register('email')}
            />
            <input
              className={inputboxClass}
              type="text"
              placeholder="Username"
              {...register("username")}
            />
            <input
              className={inputboxClass}
              type="password"
              placeholder="*********"
              {...register("password")}
            />
            <div className="w-11/12 m-2 flex justify-end">
              <input
                className="bg-gray-700 p-2 rounded-lg"
                type="submit"
                value="Sign In"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const inputboxClass =
  "p-2 m-2 my-4 bg-gray-700 shadow-sm border-2 border-purple-100 shadow-purple-300 rounded-lg";

export default Signup;
