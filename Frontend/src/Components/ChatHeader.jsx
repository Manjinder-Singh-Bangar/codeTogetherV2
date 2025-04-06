import React from 'react'
import { profilePlaceholder } from '../../public/Assets/Images/get-image'

const ChatHeader = ({user}) => {
  return (
    <div className='flex gap-3 p-5 border-b-2 w-full items-center text-white'>
        <img className='w-[40px] h-[40px]' src={user?.profilePicture || profilePlaceholder} alt="Profile Picture" />
        <p>{user?.fullName || "Full Name"}</p>
    </div>
  )
}

export default ChatHeader