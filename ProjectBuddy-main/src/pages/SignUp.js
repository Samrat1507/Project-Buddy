import React from 'react';
import { SignUp as ClerkSignUp } from '@clerk/clerk-react';
import { Navbar } from './components/Navbar';

const SignUp = () => {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-[#F5F7FA] to-[#C3CFE2] dark:bg-gradient-to-br dark:from-[#464647] dark:to-[#030913] px-5 py-5 gap-16 items-center">
      {/* <div> */}
      <Navbar />
      {/* </div> */}
      <div className="flex flex-col bg-otherBlue gap-5 items-center w-1/4 py-20 rounded-xl">
        <h1 className='text-6xl'>Sign Up</h1>
        <ClerkSignUp className="flex flex-col gap-5 items-center">
          <input
            className='bg-lightBlue placeholder-black/60 px-5 py-1 rounded-md'
            type="text"
            placeholder="Username"
          />
          <input
            className='bg-lightBlue placeholder-black/60 px-5 py-1 rounded-md'
            type="text"
            placeholder="Email"
          />
          <input
            className='bg-lightBlue placeholder-black/60 px-5 py-1 rounded-md'
            type="password"
            placeholder="Password"
          />
          <input
            className='bg-lightBlue placeholder-black/60 px-5 py-1 rounded-md'
            type="password"
            placeholder="Confirm Password"
          />
          <button className=" bg-blue/80 px-8 rounded-md shadow-md w-fit text-white shadow-gray-500">
            Submit
          </button>
        </ClerkSignUp>
        <span className='flex flex-row gap-1 text-xs text-'>
          <div className='text-black'>Already a user? </div>
          <div className='text-otherWhite'>Login</div>
        </span>
      </div>
    </div>
  )
}

export default SignUp;
