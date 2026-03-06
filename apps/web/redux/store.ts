import {configureStore} from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import currentChatMessagesReducer from './slices/CurrentChatMessages'
import ActiveChatUserReducer from './slices/ActiveChatUser'
import ActiveChatRoomReducer from './slices/ActiveChatRoom'
import ErrorMessageReducer from './slices/ErrorMessageSlice'
import NewMessageReducer from './slices/NewMessageChatRoom'
import PublicKeyReducer from './slices/publicKey'
import PrivateKeyReducer from './slices/PrivateKey'


export const store=configureStore({
    reducer:{
        user:userReducer,
        currentChatMessages:currentChatMessagesReducer,
        ActiveChatUser:ActiveChatUserReducer,
        ActiveChatRoom:ActiveChatRoomReducer,
        ErrorMessage:ErrorMessageReducer,
        NewMessage:NewMessageReducer,
        PublicKey:PublicKeyReducer,
        PrivateKey:PrivateKeyReducer
        
    }
})



export type RootState = ReturnType<typeof store.getState>