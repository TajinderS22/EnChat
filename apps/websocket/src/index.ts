import {WebSocketServer} from 'ws'
import dotenv from 'dotenv'

dotenv.config()

const wss = new WebSocketServer({
    port: process.env.WS_PORT ? parseInt(process.env.WS_PORT, 10) : 8080
})

wss.on("connection",async ()=>{
    console.log("new Connection")
})

console.log(`WebSocket server running on port ${process.env.WS_PORT || 8080}`)