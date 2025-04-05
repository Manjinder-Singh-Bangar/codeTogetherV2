import React from 'react'
import UserProfile from '../Components/UserProfile'

const Profile = () => {
    
  return (
    <div 
      className=' bg-[#0b1120] relative left-[65px] flex justify-center  items-center max-h-fit min-h-screen'
      style={{ width: "calc(100% - 65px)" }}
    >
      <UserProfile />
    </div>
  )
}

export default Profile