import React from 'react'
import { profilePlaceholder } from '../../public/Assets/Images/get-image'

const ConnectionSuggestion = ({user}) => {
    console.log("user:- ", user)
    return (
        <div className="profile px-6 py-3 gap-6 flex justify-between items-center w-full ">
            <div className="right-side gap-2 flex items-center">
                <img className='rounded-full w-10 h-10' src={user.profilePicture || profilePlaceholder} alt="" />
                <div className="details">
                    <h3 className='font-semibold'>{user.fullName}</h3>
                    <p className='text-xs'>Occupation</p>
                </div>
            </div>
            <div className="right-side">
                <button className='border-gray-400 border-2 hover:bg-gray-200 transition-colors rounded-lg hover:text-[#0b1120] p-2'>Message</button>
            </div>
        </div>
    )
}

export default ConnectionSuggestion