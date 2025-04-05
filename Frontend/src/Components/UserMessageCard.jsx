import React from 'react'
import { profilePlaceholder } from '../../public/Assets/Images/get-image'

const UserMessageCard = ({user}) => {
  return (
    <div className='text-white px-6 w-[327.2px] p-2 gap-2 flex items-end'>
      <div className='flex gap-4 items-end'>
        <img className='w-[40px] self-center h-[40px]' src={user?.profilePicture || profilePlaceholder} alt="" />
        <div className=''>
          <h3>{user?.fullName || "Full Name"}</h3>
          <p className='text-gray-500'>{user?.message || "Hello"}</p>
        </div>
      </div>
      <div className='self-end'>
        <p className='text-gray-500'>~{user?.createdAt || "2m"}</p>
      </div>
    </div>
  )
}

export default UserMessageCard