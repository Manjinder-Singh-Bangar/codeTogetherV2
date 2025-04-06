import React from 'react'

const MessageSent = ({message, time}) => {
  return (
    <div className='w-full flex justify-end'>
        <p className='bg-gray-300 text-black rounded-b-md rounded-tl-md w-fit py-1 px-3'>{message} <span className='text-[10px]'>{time}</span></p>
    </div>
  )
}

export default MessageSent