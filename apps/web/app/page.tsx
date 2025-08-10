"use client";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { Button } from "@repo/ui/button";

export default function Home() {

  return (
    
   <div className="max-w-[1920px] min-h-[100svh] dark:bg-black bg-[#fafafa]  mx-auto">
    <div className="sticky top-0 w-full  backdrop-blur-2xl  z-10">
      <Navbar></Navbar>
    </div>
    <div className={" min-h-[600px] mx-auto w-[95%] min-w-[50svw] items-center flex  justify-center  "}>
      <div className=" w-11/12  mx-auto bg backdrop-blur-md  mt-24 rounded-lg ">
        <div className=" text-4xl m-2 p-2  mt-18 dark:text-teal-300  font-bold text-teal-700">
          Get free from all kind of tracking with EnChat
        </div>
        <p className=" text-2xl m-2 p-2  mt-6 dark:text-teal-400 font-semibold text-teal-600">
          Fully End 2 End Encrypted chat app
        </p>

        <div className="m-4 ml-14 mt-14">
           <div className=" flex">
            <Link className="mr-14 "  href={"/signup"}>
              <Button text=" Signup " buttonType={"primary"} buttonClick={()=>{
              
              }}></Button>
            </Link>
            <Link className="mr-14 "  href={'/signin'}>
              <Button text="Login" buttonType="secondary" ></Button>
            </Link>
          </div>
        </div>

      </div>

      
    </div>
   </div>
  );
}
