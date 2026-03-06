import { createSlice } from "@reduxjs/toolkit";

const CurrentChatMessagesSlice=createSlice({
    name:"currentChatMessages",
    initialState:[],
    reducers:{
        setCurrentChatMassages:(state,action)=>action.payload
    }
})

export const {setCurrentChatMassages}=CurrentChatMessagesSlice.actions

export default CurrentChatMessagesSlice.reducer