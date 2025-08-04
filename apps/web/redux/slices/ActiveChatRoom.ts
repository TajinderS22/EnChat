import { createSlice } from "@reduxjs/toolkit";

const ActiveChatRoom=createSlice({
    name:"ActiveChatRoom",
    initialState:null,
    reducers:{
        setActiveChatRoom:(state,action)=>action.payload,
        clearActiveChatRoom:()=>null
    }
})

export const {setActiveChatRoom,clearActiveChatRoom}=ActiveChatRoom.actions

export default ActiveChatRoom.reducer