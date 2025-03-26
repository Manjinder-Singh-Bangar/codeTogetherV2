import React from 'react'
import ConnectionSuggestion from './ConnectionSuggestion'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='w-[300px] relative'>
      <div className='justify-center items-center w-[300px] border-l-[1px] fixed top-0 flex flex-col text-white border-gray-600 h-screen bg-[#0b1120]'>
        
        <div className="suggestingContection">
          <h1 className='ml-6 font-bold text-2xl mb-6'>Make Friends</h1>
          <ConnectionSuggestion />
          <ConnectionSuggestion />
          <ConnectionSuggestion />
          <ConnectionSuggestion />
        </div>


        <div className='socialmedia-links mt-4 gap-3 flex'>
          <Link className='text-3xl'><FaFacebook /></Link>
          <Link className='text-3xl'><FaInstagram /></Link>
          <Link className='text-3xl'><FaLinkedin /></Link>
        </div>

        <p className='ml-6 mt-6 text-xs'>© 2025 CodeTogether</p>
      </div>
    </div>
  )
}

export default Footer