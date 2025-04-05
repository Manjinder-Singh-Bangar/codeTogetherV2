import React from 'react';
import { clearAuth } from '../features/auth/authSlice'
import { useDispatch } from 'react-redux';
import { axiosPrivate } from '../Utils/axios';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () =>{
        await axiosPrivate.post("users/logout").then((res) =>{
            dispatch(clearAuth())
            navigate("/login")
        }).catch((err) => {
            console.log("Error from logout", err.message || err)
        })
    }
    
    
  return (
    <section className='bg-[#0b1120] flex-col items-center justify-center flex w-full max-h-fit min-h-screen p-6'>
        <div className='w-4/12 popup p-9 flex flex-col gap-6 border-white border-2 text-white rounded-md'>
            <h1>Do you want to logout from the application ?</h1>
            <div className='flex justify-between'>
                <button onClick={handleLogout} className='bg-[#0b1120] hover:bg-white hover:text-[#0b1120] border-white border-2 text-white px-3 rounded-md py-1'>Yes</button>
                <Link to={"/"} className='bg-[#0b1120] hover:bg-white hover:text-[#0b1120] border-white border-2 text-white px-3 rounded-md py-1'>No</Link>
            </div>
        </div>
    </section>
  )
}

export default Logout