"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { generateRSAKeys , encryptPrivateKeyWithPassword, generateSaltBase64} from "@repo/encryption/dist/e2ee.js";
import { HttpServerAddress } from "../../../utils/secrets";




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
    try{
      const {publicKey,privateKey}=await generateRSAKeys()
      console.log(privateKey)
      const pk={
        publicKey: publicKey
      }
      const mergedData = Object.assign({}, data, pk);

      const response=await axios.post(HttpServerAddress+"/signup",mergedData)

      


      if(response.status===200){


        
        const salt=generateSaltBase64()
        const password=response.data.response.password;
        const userId=response.data.response.id;
        const {encryptedPrivateKeyBase64,ivString}= await encryptPrivateKeyWithPassword(privateKey,password,salt)
        

        const data={
          encrypted_key:encryptedPrivateKeyBase64,
          iv:ivString,
          salt,
          userId
        }

        const result= await axios.post(HttpServerAddress+"/user/privateCredentials",data)

        if(result.status==200){
          setAlert("Signup successful, please signin.");
          setErrorMessage(true);
          window.setTimeout(()=>{
            setAlert('')
            setErrorMessage(false)
          },3000)
          router.push('/signin')
        }
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
    <div className="max-w-[1920px] mx-auto  flex flex-col items-center">
      {errorMessage && (
        <div className="fixed top-5 bg-gray-300 text-black px-4 py-2 rounded shadow-md z-50">
          {alert}
        </div>
      )}

      <div className="flex  max-w-[1920px] mx-auto items-center justify-center min-h-screen">
        <div className="bg-teal-300/10 border dark:border-teal-100/40 w-[330px] h-fit p-4 pt-0 rounded-lg">
          <div className="text-2xl dark:text-teal-300 text-teal-600 font-bold my-4">
            Sign Up to Privacy
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
                className="bg-teal-700 text-white p-2 rounded-lg"
                type="submit"
                value="Sign up"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const inputboxClass =
  "p-2 m-2 my-4 dark:bg-gray-700 shadow-sm border-2 dark:border-teal-100 dark:shadow-teal-300 rounded-lg";

export default Signup;
