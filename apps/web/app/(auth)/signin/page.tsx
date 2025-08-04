"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type Inputs = {
  username: string;
  password: string;
};

const Signin = () => {
  const router=useRouter()


    const { data: session, status } = useSession();
    useEffect(()=>{
      if(status=='authenticated'){
        router.push("/app/chat")
      }
    },[session,router,status])

  const [errorMessage, setErrorMessage] = useState(false);
  const [alert, setAlert] = useState("");

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const result = await signIn("credentials", {
      redirect: false,
      username: data.username,
      password: data.password,
    });
    console.log(result)
    if(result?.ok){
      router.push("/app/chat")
    }

    if (result?.error) {
      setErrorMessage(true);
      setAlert("Invalid username or password");
      setTimeout(() => {
        setErrorMessage(false);
        setAlert("");
      }, 3000);
    }
  };

  return (
    <div className="max-w-[1920px] mx-auto min-w-screen flex flex-col items-center">
      {errorMessage && (
        <div className="fixed top-5 bg-red-200 text-black px-4 py-2 
        rounded shadow-md z-50
        
        ">
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

export default Signin;
