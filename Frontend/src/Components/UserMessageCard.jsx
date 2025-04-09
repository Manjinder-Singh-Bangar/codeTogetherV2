import React from 'react'
import { profilePlaceholder } from '../../public/Assets/Images/get-image'
import { getError, getUser } from '../features/user/userSlice'
import { fetchUserDetails } from '../features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { setSelectedUserId } from '../features/chat/chatSlice'
import { getChat } from '../features/chat/chatSlice'
import { useEffect } from 'react'

const UserMessageCard = ({user, customClass}) => {
  const dispatch = useDispatch()
  const userDetail = useSelector(getUser)
  const chat = useSelector(getChat)
  const [searchParams, setSearchParams] = useSearchParams()
  const error = useSelector(getError)

  const userFromUrl = searchParams.get('user')

  useEffect(() => {
    dispatch(setSelectedUserId(userFromUrl))
  }, [userFromUrl])
  
  if(!userDetail){
    dispatch(fetchUserDetails)
  }


  
  const handleSelectUser = () => {
    setSearchParams({user: `${user._id}`})
  }

  
  const isSelected = searchParams.get("user") === user._id
  

  if(error) return <p>{error}</p>

  return (
    <div onClick={handleSelectUser} className={`text-white gap-3 transition-colors duration-300 px-6 w-[327.2px] p-2 gap-2 flex items-end ${isSelected ? "bg-gray-800" : "bg-transparent"}`}>
      <div className='flex gap-4 items-center'>
        <img className='w-[40px] rounded-full self-center h-[40px]' src={user?.profilePicture || profilePlaceholder} alt="" />
        <div className='flex '>
          <h3>{user?.fullName || "Full Name"}</h3>
        </div>
      </div>
      
    </div>
  )
}

export default UserMessageCard