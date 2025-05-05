import React from 'react'
import {axiosPrivate} from '../Utils/axios'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { setAuth } from '../features/auth/authSlice'
import { useDispatch } from 'react-redux'
import { motion } from "framer-motion"
import { Loader } from 'lucide-react';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let loading = false;

  const submitHandler = async (e) =>{
    loading = true;
    
    e.preventDefault();

    if(!email && !password){
      toast.error("credentials are required")
      return;
    }

    const data = {
      email,
      password
    }
    axiosPrivate.post("users/login", data)
    .then((res) =>{
      const {accessToken, refreshToken, userId} = res.data.data
      dispatch(setAuth({accessToken, refreshToken, userId}))
      toast.success("Login successful!");
      loading = false
      navigate(location.state?.from || "/")
    }).catch((err) =>{
      loading = false
      toast.error("Login failed, try again with different credentials!");
    })

    
  }

  return (
    <section className='w-full text-white bg-[#0b1120] min-h-screen max-h-fit flex flex-col justify-center items-center'>
      <motion.div
        className='w-2/6'
        initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
      >
       
          <h1 className='font-bold text-2xl'>Sign In</h1>
          <form action="" className='flex flex-col w-full gap-3 mt-5'>
            <div className='flex flex-col gap-1'>
              <label htmlFor="email">Email</label>
              <input 
              id='email'
              onChange={(e) =>{
                setEmail(e.target.value)
              }} 
              className='p-2 text-black rounded-lg outline-none' type="email" />
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor="password">Password</label>
              <input id='password'
              onChange={(e) =>{
                setPassword(e.target.value)
              }} 
              className='p-2 text-black rounded-lg outline-none' type="password" />
              <span></span>
            </div>

            <button disabled={loading} onClick={submitHandler} type='submit' className='p-2 w-full text-center text-[#1976d2] border-[#1976d2] hover:bg-[#1976d2] hover:text-[#0b1120] transition-colors rounded-lg border-2 mt-3'>{loading ? <Loader className=' h-5 w-5 animate-spin mx-auto' aria-hidden='true' /> : "Login"}</button>

          </form>
      </motion.div>
    </section>
  )
}

export default Login