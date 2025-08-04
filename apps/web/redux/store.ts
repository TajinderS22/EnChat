import {configureStore} from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import currentChatMessagesReducer from './slices/CurrentChatMessages'
import ActiveChatUserReducer from './slices/ActiveChatUser'
import ActiveChatRoomReducer from './slices/ActiveChatRoom'

export const store=configureStore({
    reducer:{
        user:userReducer,
        currentChatMessages:currentChatMessagesReducer,
        ActiveChatUser:ActiveChatUserReducer,
        ActiveChatRoom:ActiveChatRoomReducer
        
    }
})



export type RootState = ReturnType<typeof store.getState>