import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaMessage, FaHouse , FaMagnifyingGlass, FaRightToBracket, FaUserPlus, FaPlus, FaRightFromBracket, FaUser } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';



const Navbar = () => {
  const auth = useSelector((state) => state.auth);
  const location = useLocation()
  return (
    <nav className='h-screen fixed z-[101] top-0 border-r-[1px] border-gray-600 text-white bg-[#0b1120] p-6 flex items-center'>
        <ul className="flex flex-col gap-6">
            <NavLink className={({ isActive }) => (isActive ? "font-medium flex text-xl items-center gap-3 text-gray-500" : "font-medium flex text-xl items-center gap-3 text-white")} title='Home' to="/"><FaHouse /> {location.pathname !== "/chat" ? "Home" : ""}</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "font-medium flex text-xl items-center gap-3 text-gray-500" : "font-medium flex text-xl items-center gap-3 text-white")} title='Search' to="/search"><FaMagnifyingGlass />{ location.pathname !=="/chat" ? "Search" : ""}</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "font-medium flex text-xl items-center gap-3 text-gray-500" : "font-medium flex text-xl items-center gap-3 text-white")} title='New Post' to="/new-post"><FaPlus /> {location.pathname !== "/chat" ? "New Post" : ""}</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "font-medium flex text-xl items-center gap-3 text-gray-500" : "font-medium flex text-xl items-center gap-3 text-white")} title='New Post' to="/chat"><FaMessage /> {location.pathname !== "/chat" ? "Messages" : ""}</NavLink>
            {
              auth.accessToken ? 
              <>
                <NavLink className={({ isActive }) => (isActive ? "font-medium flex text-xl items-center gap-3 text-gray-500" : "font-medium flex text-xl items-center gap-3 text-white")} title='Sign Up' to="/logout"><FaRightFromBracket />{location.pathname !== "/chat" ? "Log out" : ""}</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "font-medium flex text-xl items-center gap-3 text-gray-500" : "font-medium flex text-xl items-center gap-3 text-white")} title='Sign Up' to="/profile"><FaUser /> {location.pathname !== "/chat" ? "Profile" : ""}</NavLink>
                
              </>

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