import React from 'react'

const Alert = ({message}:{message:string}) => {
  return (
    <div className='bg-red-100 rounded-lg mx-auto text-black p-2 m-2 '>
        {message}
    </div>
  )
}

export default Alert