import {createSlice} from '@reduxjs/toolkit'


export interface UserState {
  id: string | null;
  name: string | null;
  publicKey:string|null;
}

const initialState: UserState = {
  id: null,
  name: null,
  publicKey:null
};

const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser:(state,action)=>action.payload
    }
})

export const {setUser}=userSlice.actions

export default userSlice.reducer