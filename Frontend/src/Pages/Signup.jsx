import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from '../Utils/axios.js';
import {motion} from "framer-motion"
import { Loader } from 'lucide-react';

const Signup = () => {
  const [passwodHidden, setPasswordHidden] = useState(true)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    username:"",
    phoneNumber:""
  });

  const handleChange = (e) =>{
    const {value, name} = e.target;
    console.log(name, value)
    setFormData((prev) => ({
      ...prev,
      [name] : value
    }))
  }
  let loading = false
  const hidePassword = (e) =>{
    e.preventDefault()
    setPasswordHidden((prev)=> !prev);
  }
  
  const handleRegisterButton = async (e) => {
    e.preventDefault(); 
    loading = true
    try {
      const res = await axios.post("users/signup", formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true, 
      });
  
      console.log("Signup successful:", res.data); 
    } catch (err) {
      loading = true
      console.error("Signup failed:", err.response ? err.response.data : err.message);
    } finally{
      loading = false
    }
  };

  return (
    <section className='w-full text-white bg-[#0b1120] min-h-screen max-h-fit flex flex-col justify-center items-center'>
      <motion.div
        className='w-2/6'
        initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
      >
        <h1 className='font-bold text-2xl'>Sign Up</h1>
        <form action="" className='flex flex-col w-full gap-3 mt-5'>
          <div className='flex flex-col gap-1'>
            <label htmlFor="fullName">Full Name</label>
            <input id='fullName' name='fullName' onChange={handleChange} className='p-2 text-black rounded-lg outline-none' type="text" />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="username">Username</label>
            <input id='username' name='username' onChange={handleChange} className='p-2 text-black rounded-lg outline-none' type="text" />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="email">Email</label>
            <input id='email' name='email' onChange={handleChange} className='p-2 text-black rounded-lg outline-none' type="email" />
          </div>

          <div className='flex relative flex-col gap-1'>
            <label htmlFor="password">Password</label>
            <input id='password' onChange={handleChange} name='password' className='p-2 text-black rounded-lg outline-none' type={passwodHidden ? "text" : "password"} />
            <button className='absolute bottom-[7px] right-[10px]' onClick={hidePassword}><FontAwesomeIcon color='black' icon={passwodHidden ? faEyeSlash : faEye} /></button>
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input id='confirmPassword' name='confirmPassword' onChange={handleChange} className='p-2 text-black rounded-lg outline-none' type="password" />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input id='phoneNumber' name='phoneNumber' onChange={handleChange} className='p-2 text-black rounded-lg outline-none' type="text" />
          </div>

          <button disabled={loading} onClick={handleRegisterButton} type='submit' className='p-2 w-full text-center text-[#1976d2] border-[#1976d2] hover:bg-[#1976d2] hover:text-[#0b1120] transition-colors rounded-lg border-2 mt-3'>{loading ? <Loader className=' h-5 w-5 animate-spin mx-auto' aria-hidden='true' /> : "Login"}</button>
        </form>
      </motion.div>
    </section>
  )
}

export default Signup