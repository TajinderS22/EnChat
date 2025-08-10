import WebSocket, {WebSocketServer} from 'ws'
import dotenv from 'dotenv'
import {prisma} from "@repo/db"

dotenv.config()

interface extendedWebSocket extends WebSocket{
    userId?:string
}

const wss = new WebSocketServer({
    port: process.env.WS_PORT ? parseInt(process.env.WS_PORT, 10) : 8080
})


const onlineUsers=new Map()
const messagesToBeSaved:any=[]

const sendMessagesImmediate=async()=>{
     await prisma.messages.createMany({
            data:messagesToBeSaved
        })
    messagesToBeSaved.length=0
}

if(messagesToBeSaved.length>10){
   sendMessagesImmediate()
}else{
setInterval(async ()=>{
    if(messagesToBeSaved.length>0){
        await prisma.messages.createMany({
            data:messagesToBeSaved
        })
        messagesToBeSaved.length=0
    }
},5000)
}

wss.on("connection",async (ws:extendedWebSocket)=>{
    console.log("new client connection")

    ws.on('message',async(data)=>{
        try {
            const parsed=JSON.parse(data.toString())

            if (parsed.type==='register'){
                const userId=parsed.userId
                onlineUsers.set(userId,ws)
                ws.userId=userId
                console.log('user '+ userId +" Registered")
                return
            }

            if(parsed.type==='send_message'){
                const {fromUserId,toUserId,message,message_type,chatroomIdFe}=parsed
                console.log(parsed)
                
                let chatroomId=chatroomIdFe

                if(!chatroomId){
                    const existingChatRoom=await prisma.chatroomUsers.findFirst({
                    where:{
                        userId:fromUserId,
                        chatroom:{
                            users:{
                                some:{
                                    userId:toUserId
                                }
                            }
                        }
                    },
                    select:{
                        chatroomId:true
                    }
                })
                let chatroomId
                if(existingChatRoom){
                    chatroomId=existingChatRoom.chatroomId
                }else{
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
                    chatroomId=newChatRoom.id

                    console.log(chatroomId)
                }
                }
                
                messagesToBeSaved.push({
                    userId:fromUserId,
                    chatroomId,
                    message

                })
                

               
                const recipientSocket=onlineUsers.get(toUserId)

                ws.send(JSON.stringify({
                    type:'receive_message',
                    userId:fromUserId,
                    chatroomId,
                    message,
                }))

                //  checking if reciver is online on socket 
                if(recipientSocket&& recipientSocket.readyState==WebSocket.OPEN){
                    recipientSocket.send(JSON.stringify({
                        type:'receive_message',
                        userId:fromUserId,
                        chatroomId,
                        message,

                    }))
                }


            }

            



        } catch (error) {
            console.log(error)
        }
    })

    ws.on("close",async()=>{
        if(ws.userId){
            onlineUsers.delete(ws.userId)
        }
        console.log('client '+ ws.userId +" disconnected.")
    })
    
})

console.log(`WebSocket server running on port ${process.env.WS_PORT || 8080}`)