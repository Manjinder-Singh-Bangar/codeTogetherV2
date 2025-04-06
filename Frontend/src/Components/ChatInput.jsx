import React from 'react'
import { FaPaperPlane } from 'react-icons/fa6'

const ChatInput = () => {
  return (
    <div className='flex p-5 absolute w-full bg-[#0b1120] bottom-0 text-white'>
        <input className='p-2 flex-[1.8] outline-none text-black rounded-md ' type="text" placeholder='Enter your message'/>
        <button className='flex-[0.2] flex justify-center items-center'>{<FaPaperPlane fontSize={"25px"} />}</button>
    </div>
  )
}

export default ChatInput