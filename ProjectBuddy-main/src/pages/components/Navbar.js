import React, { useEffect } from 'react';
import Switcher from './Switcher';
import useDarkSide from '@/hooks/useDarkSide';
import Link from 'next/link';

export const Navbar = () => {
  useEffect(() => {
    if (!localStorage.getItem('theme')) localStorage.setItem('theme', 'light');
  }, []);

  const isDarkMode = useDarkSide();
  console.log(isDarkMode);

  return (
    <div className="bg-blue/80 h-fit w-full text-xl rounded-xl shadow-md dark:bg-otherWhite/20">
      <ul className="flex justify-between px-10 py-5">
        <div className="flex gap-10">
          <Link href="/">
            <img
              src={isDarkMode ? '/LogoDark.svg' : '/Logo.svg'}
              alt={isDarkMode ? 'logo_dark' : 'logo'}
              className="h-12"
            />
          </Link>
        </div>
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
      </ul>
    </div>
  );
};
