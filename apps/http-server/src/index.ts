import express from 'express'
import * as z from 'zod'
import bcrypt from 'bcrypt'
import { prisma } from '@repo/db';
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config({ path: '../../.env' })



const app=express();
app.use(express.json())
const corsOptions = {
  origin: ["https://enchat.tajinder.in", "http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};
app.use(
  cors(corsOptions)
);

app.options("*", cors(corsOptions));


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
    publicKey: z.string()
})


const port = process.env.HTTP_SERVER_PORT || 3030

app.get('/test',(req,res)=>{
    res.send("Backend Now working fine")
})

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
                message:' user Registered successfully ',
                response
            })
        }


    }catch(e){
        console.error(e)
        res.status(500).json({
            message :"Internal server error. "
        })
    }




})


app.post("/user/find_user",async(req,res )=>{
    const {username}=req.body

   try {
    const user = await prisma.user.findMany({
      where: {
        username: {
          contains: username,
          mode: "insensitive",
        },
      },
      take: 10
    });
    
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
    console.error(error)
    res.status(500).json({
        message :"Internal Server Error"
    })
   }



})

app.post("/create/chatroom",async(req,res)=>{
    console.log(req.body)
    const {fromUserId,toUserId}= req.body
    const newChatRoom= await prisma.chatrooms.create({
        data:{
            users:{
                create:[
                    {userId:fromUserId},
                    {userId:toUserId}
                ]
            }
        }
    }) 
    const chatroomId=newChatRoom.id
    res.status(200).json({
        chatroomId
    })
})

app.post("/signin",async(req,res)=>{
    const {username,password}=req.body

    try {
        const existingUser= await prisma.user.findFirst({
            where:{
                username
            }
        })
        if(existingUser){
            const checkPassword:boolean=bcrypt.compareSync(password,existingUser?.password)
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
        console.error(error)
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
                        lastname:true,
                        email:true,
                        publicKey:true
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

app.post('/user/privateCredentials', async(req,res)=>{
    const data=req.body;
    const result= await  prisma.privateKey.create({data});

    res.status(200).json({
        message:`${result.userId} has registered Pk`
    })
    
})

app.get('/user/privateCredentials',async(req,res)=>{
    const id = req.query.id;


    const userId=Number(id);

    if(!userId){
        res.status(400).json({
            message:"no user Found"
        })
        return
    }


    try {
        if(userId){
            const result= await prisma.privateKey.findFirst({
            where:{
                userId,
            },
            include:{
                user:{select:{
                    password:true
                }}
            }
            
        })
            res.status(200).json({
                result
            })
        }
    } catch (error) {
        res.status(500).json({
            message:"Internal server Error"
        })
    }

    
})


app.listen(port,()=>{
    console.error(`http Server running on ${port} port.`)
})


console.log(process.env.HTTP_SERVER_PORT)

