import React from 'react'
import { profilePlaceholder } from '../../public/Assets/Images/get-image'
import { getRecieverUser, getSelectedUserId, fetchReceiverUser  } from '../features/chat/chatSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'

const ChatHeader = () => {
  const dispatch = useDispatch()
  const user = useSelector(getRecieverUser)
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedUserId = searchParams.get("user")

  useEffect(() => {
    dispatch(fetchReceiverUser(selectedUserId))
  },[selectedUserId])
  return (
    <div className='flex gap-3 p-5 border-b-2 w-full items-center text-white'>
        <img className='w-[40px] rounded-full h-[40px]' src={user?.profilePicture || profilePlaceholder} alt="Profile Picture" />
        <div>
          <p>{user?.fullName || "Full Name"}</p>
          <p>status</p>
        </div>
    </div>
  )
}

export default ChatHeader