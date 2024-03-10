import React, { useEffect, useState } from 'react';
import Switcher from './Switcher';
import useDarkSide from '@/hooks/useDarkSide';
import Link from 'next/link';
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

export const Navbar = () => {
  useEffect(() => {
    if (!localStorage.getItem('theme')) localStorage.setItem('theme', 'light');
  }, []);

  const isDarkMode = useDarkSide();


  return (
    <div className="bg-blue/80 h-fit w-full text-xl rounded-xl shadow-md dark:bg-otherWhite/20 align-middle">
      <ul className="flex justify-between px-10 py-2">
        <div className="flex gap-10">
          <Link href="/">
            <img
              src={isDarkMode ? '/LogoDark.svg' : '/Logo.svg'}
              alt={isDarkMode ? 'logo_dark' : 'logo'}
              className="h-14" 
            />
          </Link>
        </div>
        <SignedOut>
        <div className="flex gap-10 items-center dark:text-otherWhite">
          
          <li>
            <Link href="/About">About</Link>
          </li>
          
          <li>
            <Link href="/Login">Login</Link>
          </li>
          <li>
            <Link href="/SignUp">SignUp</Link>
          </li>
          
          <li>
            <Switcher />
          </li>
          
        </div>
        </SignedOut>
        
        <SignedIn>
          <ul className="flex justify-between px-10 py-5">
          <div className="flex gap-10">
          <li>
            <Link href="/protected/dashboard">Dashboard</Link>
          </li>
          <li>
          <UserButton afterSignOutUrl="/" />
          </li>
          <li>
          <Switcher />
          </li>
          </div>
          </ul>
        </SignedIn>
        
        
      </ul>
    </div>
  );
};
