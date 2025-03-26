import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <header className='flex'>
      <section className="bg-white nav w-[154px] relative h-full">
        <Navbar />
      </section>
      <section className="childrens flex flex-col w-full">
        <Outlet />
      </section>
      <section className='footer'>
        <Footer />
      </section>
    </header>
  )
}

export default Layout