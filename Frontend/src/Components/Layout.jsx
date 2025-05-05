import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation()
  
  return (
    <section className='flex'>
      <section className="bg-white nav min-w-[154px] relative h-full">
        <Navbar />
      </section>
      <section className={`childrens flex flex-col w-full ${location.pathname !== "/chat" ? "" : "w-[calc(100% - 68px)]"}`}>
        <Outlet />
      </section>
      <section className='footer'>
        {location.pathname !== "/chat" ? <Footer /> : ""}
      </section>
    </section>
  )
}

export default Layout