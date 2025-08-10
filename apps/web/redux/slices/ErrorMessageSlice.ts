import { createSlice } from "@reduxjs/toolkit";

const ErrorMessage=createSlice({
    name:"ErrorMessage",
    initialState:null,
    reducers:{
        setErrorMessage:(state,action)=>action.payload,
        clearErrorMessage:()=>null

    }
})

export const {setErrorMessage,clearErrorMessage}=ErrorMessage.actions

export default ErrorMessage.reducer