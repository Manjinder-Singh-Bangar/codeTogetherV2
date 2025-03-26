import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHouse , FaMagnifyingGlass, FaRightToBracket, FaUserPlus, FaPlus, FaRightFromBracket } from "react-icons/fa6";
import { useSelector } from 'react-redux';

const Navbar = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <nav className='h-screen fixed top-0 border-r-[1px] border-gray-600 text-white bg-[#0b1120] p-6 flex items-center'>
        <ul className="flex flex-col gap-6">
            <NavLink className={({ isActive }) => (isActive ? "font-medium flex text-xl items-center gap-3 text-gray-500" : "font-medium flex text-xl items-center gap-3 text-white")} title='Home' to="/"><FaHouse /> Home</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "font-medium flex text-xl items-center gap-3 text-gray-500" : "font-medium flex text-xl items-center gap-3 text-white")} title='Search' to="/search"><FaMagnifyingGlass /> Search</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "font-medium flex text-xl items-center gap-3 text-gray-500" : "font-medium flex text-xl items-center gap-3 text-white")} title='New Post' to="/new-post"><FaPlus /> New Post</NavLink>
            {
              auth.accessToken ? 
              <NavLink className={({ isActive }) => (isActive ? "font-medium flex text-xl items-center gap-3 text-gray-500" : "font-medium flex text-xl items-center gap-3 text-white")} title='Sign Up' to="/logout"><FaRightFromBracket /> Log out</NavLink>
              :
              <>
                <NavLink className={({ isActive }) => (isActive ? "font-medium flex text-xl items-center gap-3 text-gray-500" : "font-medium flex text-xl items-center gap-3 text-white")} title='Login' to="/login"><FaRightToBracket /> Login</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "font-medium flex text-xl items-center gap-3 text-gray-500" : "font-medium flex text-xl items-center gap-3 text-white")} title='Sign Up' to="/signup"><FaUserPlus /> Sign Up</NavLink>
              </>
          
            }
        </ul>
    </nav>
  )
}

export default Navbar