import { createSlice } from "@reduxjs/toolkit";

const publicKey=createSlice({
    name:"PublicKey",
    initialState:null,
    reducers:{
        setPublicKey:(stste,action)=>action.payload,
        clearPublicKey:()=>null
    }
})

export const {setPublicKey,clearPublicKey}=publicKey.actions
export default publicKey.reducer