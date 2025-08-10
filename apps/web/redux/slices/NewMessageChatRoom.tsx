import { createSlice } from "@reduxjs/toolkit";

const NewMessageChatRoom=createSlice({
    name:"NewMessage",
    initialState:[],
    reducers:{
        setNewMessage:(state,action)=>action.payload,
        clearNewMessage:()=>[],
        removeNewMessage: (state, action) => {
          return state.filter(x=> x !== action.payload);
        },
    }
})

export const {setNewMessage,clearNewMessage,removeNewMessage}=NewMessageChatRoom.actions

export default NewMessageChatRoom.reducer