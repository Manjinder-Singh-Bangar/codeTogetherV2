import React from 'react'

const MessageRecieve = ({message, time}) => {
  return (
    <div className='w-full'>
        <p className='bg-gray-500 rounded-b-md rounded-tr-md w-fit py-1 px-3'>{message} <span className='text-[10px]'>{time}</span></p>
    </div>
  )
}

export default MessageRecieve