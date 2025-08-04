'use client'
import { ReactNode } from "react"
import Session from "../../hook/Session"
import { Provider } from 'react-redux';
import { store } from "../../redux/store";
 
const applayout=({children}:{
    children:ReactNode
})=>{
    return (
        <div>
            <Session>
                <Provider store={store}>
                      {children}
                </Provider>
            </Session>
        </div>
    )
}
export default applayout    