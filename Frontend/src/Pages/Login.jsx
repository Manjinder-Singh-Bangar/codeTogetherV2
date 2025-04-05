import React from 'react'
import {axiosPrivate} from '../Utils/axios'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { setAuth } from '../features/auth/authSlice'
import { useDispatch } from 'react-redux'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async (e) =>{
    e.preventDefault();

    if(!email && !password){
      console.log("credentials are required")
      return;
    }

    const data = {
      email,
      password
    }
    axiosPrivate.post("users/login",  
    data
  ).then((res) =>{

      const {accessToken, refreshToken, userId} = res.data.data
      dispatch(setAuth({accessToken, refreshToken, userId}))
      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
      navigate(location.state?.from || "/")
    }).catch((err) =>{
      toast.error("Login failed, try again with different credentials!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    })

    
  }

  return (
    <section className='w-full text-white bg-[#0b1120] min-h-screen max-h-fit flex flex-col justify-center items-center'>
      <ToastContainer />
      <div className="w-2/6">
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

          <button onClick={submitHandler} type='submit' className='p-2 w-fit hover:bg-gray-200 hover:text-[#0b1120] transition-colors border-gray-300 border-2 mt-3'>Login</button>

        </form>
      </div>
    </section>
  )
}

export default Login