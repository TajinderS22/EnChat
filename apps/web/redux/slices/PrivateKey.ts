import { createSlice } from "@reduxjs/toolkit";

const privateKey=createSlice({
    name:"PrivateKey",
    initialState:null,
    reducers:{
        setPrivateKey:(stste,action)=>action.payload,
        clearPrivateKey:()=>null
    }
})

export const {setPrivateKey,clearPrivateKey}=privateKey.actions
export default privateKey.reducer