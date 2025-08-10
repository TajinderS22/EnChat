import express from 'express'
import dotenv from 'dotenv'
import * as z from 'zod'
import bcrypt from 'bcrypt'
import { prisma } from '@repo/db';
import cors from 'cors'

dotenv.config()



const app=express();
app.use(express.json())
app.use(cors())



const saltRounds=15;


export type UserType={
    firstname:string,
    lastname:string,
    username:string,
    email:string,
    id?:number,
}

interface UserTypeBackend extends UserType{
    password:string
}

const zodUserSchema=z.object({
    firstname:z.string(),
    lastname:z.string(),
    username:z.string(),
    email:z.string(),
    password: z.string(),
})


const port = process.env.HTTP_SERVER_PORT || 3030

app.post('/signup',async(req,res)=>{
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    const userInput:UserTypeBackend=req.body
    const password=userInput.password
    const email=userInput.email
    const username=userInput.username

    try{
        if(!emailRegex.test(email)){
            res.status(400).json({
                message:"Please enter a valid E-mail"
            })
            return
        }
        if(!passwordRegex.test(password)){
            res.status(400).json({
                message:"Password too weak "
            })
            return
        }

        const hashedPassword=await bcrypt.hashSync(password,saltRounds)

        userInput.password= hashedPassword

        const existingUser=await prisma.user.findFirst({
            where:{
                OR:[{
                    email:email
                },{username:username}]
            }
        })
        if(existingUser){
            res.status(400).json({
                message:"User already registered please Sign-in"
            })
        }
 


        const data=zodUserSchema.parse(userInput)

        const response = await prisma.user.create({
            data
        })
        if(response){
            res.status(200).json({
                message:' user Registered successfully '
            })
        }


    }catch(e){
        console.log(e)
        res.status(500).json({
            message :"Internal server error. "
        })
    }




})


app.post("/user/find_user",async(req,res )=>{
    const {username}=req.body

   try {
    const user = await prisma.user.findFirst({
        where:{
            username:username
        }
    })
    
    if(!user){
        res.status(200).json({
            message:"User not found"
        })
        return
    }

    res.status(200).json({
        user:user
    })

   } catch (error) {
    console.log(error)
    res.status(500).json({
        message :"Internal Server Error"
    })
   }



})

app.post("/signin",async(req,res)=>{
    const {username,password}=req.body

    try {
        const existingUser= await prisma.user.findFirst({
            where:{
                username
            }
        })
        console.log(existingUser)
        console.log(existingUser)
        if(existingUser){
            const checkPassword:boolean=bcrypt.compareSync(password,existingUser?.password)
            console.log(checkPassword)
            if(checkPassword){
                res.status(200).json({
                    user:existingUser
                })
                return
            }
        }

        res.status(404).json({
            message:"User not found"
        })

    
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"Internal Server Error"
        })
    }


})


app.post('/user/chatroom/chats',async(req ,res)=>{
    const {chatroomId}=req.body;

    const messages= await prisma.messages.findMany({
        where:{
            chatroom:{
                id:chatroomId
            }
        },
        take:100
    });

    res.status(200).json({
        messages:messages
    })
})


app.post('/user/chatrooms',async(req,res)=>{
    const {userId}=req.body
    const chatRooms= await prisma.chatrooms.findMany({
      where:{
        users:{
            some:{
                userId:userId
            }
        }
      },
      select:{
        id:true,
        users:{
            where:{
                NOT:{
                    userId:userId
                }
            },
            select:{
                user:{
                    select:{
                        id:true,
                        username:true,
                        firstname:true,
                        lastname:true
                    }
                }
            }
        }
      }
    })
    res.status(200).json({
        chatRooms
    })
    
})




app.listen(port,()=>{
    console.log(`http Server running on ${port} port.`)
})


console.log(process.env.HTTP_SERVER_PORT)

