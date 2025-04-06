import React from 'react'
import { profilePlaceholder } from '../../public/Assets/Images/get-image'
import { getError, getUser } from '../features/user/userSlice'
import { fetchUserDetails } from '../features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'

const UserMessageCard = ({user, customClass}) => {
  const dispatch = useDispatch()
  const userDetail = useSelector(getUser)
  const error = useSelector(getError)
  
  if(!userDetail){
    dispatch(fetchUserDetails)
  }
  
  if(error) return <p>{error}</p>

  return (
    <div className={`text-white px-6 w-[327.2px] p-2 gap-2 flex items-end ${customClass}`}>
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