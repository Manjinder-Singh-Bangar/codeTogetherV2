import React from 'react';
import { clearAuth } from '../features/auth/authSlice'
import { useDispatch } from 'react-redux';
import { axiosPrivate } from '../Utils/axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(() => {
        const handleLogout = async () =>{
            await axiosPrivate.post("users/logout").then((res) =>{
                dispatch(clearAuth())
                navigate("/login")
            }).catch((err) => {
                console.log("Error from logout", err.message || err)
            })
        }

        return () =>  handleLogout();
    }, [])
  return (
    <section className='bg-[#0b1120] flex-col items-center justify-center flex w-full max-h-fit min-h-screen p-6'>
        <h1>You have been </h1>
    </section>
  )
}

export default Logout