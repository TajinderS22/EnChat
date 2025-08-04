import React from 'react'

const LeftContainer = () => {
  return (
    <div className='w-[30%]  bg-slate-700 p-2'>
        <div className='flex  px-2'>
          <div className='flex-1'>
            {/* search bar */}  
            <input type="text" placeholder='Search contact' className='bg-purple-700/30  p-2 rounded-xl' /> 
          </div>
          <div>
            <button
            
            className='bg-purple-300 p-2 rounded-lg'    
            > new chat</button>
          </div>
        </div>
        <div>
          Chatnames here
        </div>
    </div>
  )
}

export default LeftContainer