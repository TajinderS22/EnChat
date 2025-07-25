import express from 'express'
import dotenv from 'dotenv'
import * as z from 'zod'
import bcrypt from 'bcrypt'
import { prisma } from '@repo/db';

dotenv.config()

const app=express();
app.use(express.json())



const saltRounds=15;


type UserType={
    firstname:string,
    lastname:string,
    username:string,
    email:string,
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


        const data=zodUserSchema.parse(userInput)

        const response = await prisma.user.create({
            data
        })
        if(response){
            res.status(200).json({
                message:' user Registered success '
            })
        }


    }catch(e){
        console.log(e)
        res.status(500).json({
            message :"Internal server error. "
        })
    }




})



app.post('/chat',async(req,res)=>{
    
})




app.listen(port,()=>{
    console.log(`http Server running on ${port} port.`)
})


console.log(process.env.HTTP_SERVER_PORT)

