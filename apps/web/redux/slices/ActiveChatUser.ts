import { createSlice } from "@reduxjs/toolkit";

const ActiveChatUser=createSlice({
    name:"ActiveChatUser",
    initialState:null,
    reducers:{
        setActiveChatUser:(state,action)=>action.payload,
        clearActiveChatUser:()=>null
    }
})

export const {setActiveChatUser,clearActiveChatUser}=ActiveChatUser.actions

export default ActiveChatUser.reducer