import React, { useEffect } from 'react'
import { fetchUserDetails, getUser } from '../features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getError, getStatus } from '../features/user/userSlice';
import { FaPenToSquare } from "react-icons/fa6";


const UserProfile = () => {
    const userId = useSelector((state) => state.auth.userId);
    console.log(userId)
    const user = useSelector(getUser);
    const error = useSelector(getError);
    const status = useSelector(getStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        if(userId){
            dispatch(fetchUserDetails(userId))
        }
    },[ dispatch, userId])

    if(error) return <p>{error}</p>
    if(status == "pending") return <p>Loading</p>
    if (!user) return <p>No user data available.</p>;

    return (
        <div className='flex flex-col gap-5 text-gray-300 w-5/6 h-5/6 mx-auto p-10'>
            <div className='flex gap-3 justify-between items-center'>
                <div className='flex gap-3 text-2xl'>
                    <img className='w-[40px] rounded-full' src={user.profilePicture || ""} alt="" />
                    <p className='bg-transparent border-none outline-none' >@{user.username}</p>
                </div>
                <FaPenToSquare />
            </div>
            <div>
                <h1 className='text-2xl'>{user.fullName}</h1>
                <p className='text-2xl'>{user.email}</p>
                <p className='text-2xl'>{user.phoneNumber}</p>
            </div>
        </div>
    );
};

export default UserProfile