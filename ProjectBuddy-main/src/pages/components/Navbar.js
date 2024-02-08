import React from 'react'
import Switcher from './Switcher'
import { useState, useEffect } from 'react';
import useDarkSide from '@/hooks/useDarkSide';


export const Navbar = () => {

  useEffect(() => {
    if(!localStorage.getItem("theme"))
      localStorage.setItem("theme", "light");
  }, []);

  const isDarkMode = useDarkSide();
  return (
    <div className='bg-blue/80 h-fit w-full text-xl rounded-xl shadow-md dark:bg-otherWhite/20'>
        <ul className='flex justify-between px-10 py-5'>
            <div className='flex gap-10'>
            <img
            src={isDarkMode ? "LogoDark.svg" : "Logo.svg"} // Conditionally rendering the logo based on the mode
            alt={isDarkMode ? "logo_dark" : "logo"}
            className="h-12"
          />
              
            </div>
            <div className='flex gap-10 items-center dark:text-otherWhite'>
            <li className=''>About</li>
            <li className=''>Login</li>
            <li className=''>SignUp</li>
            {/* <li className=''>ModeButton</li> */}
            <li><Switcher/></li>
            </div>
        </ul>
    </div>
  )
}
