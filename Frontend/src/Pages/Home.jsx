import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaInstagram, FaYoutube   } from "react-icons/fa6";
import Posts from '../Components/Posts';
import Search from '../Components/Search';

const Home = () => {
  return (
    <section className='bg-[#0b1120] flex-col items-center justify-center flex w-full max-h-fit min-h-screen p-6'>
      <Search />
      <div className='flex flex-col mt-10 w-full items-center'>
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
      </div>
      
    </section>
  )
}

// Our executive network provides a trusted platform for senior professionals to collaborate, share insights, and build strategic partnerships that fuel growth and innovation.
// Join a global network of industry leaders to exchange ideas, access exclusive resources, and discover opportunities that accelerate personal and organizational success.
// Elevate your influence and impact by connecting with top executives in a dynamic environment designed for knowledge-sharing, mentorship, and business advancement.
export default Home