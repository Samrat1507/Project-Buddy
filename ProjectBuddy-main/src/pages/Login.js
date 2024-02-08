import React from 'react'
import { Navbar } from './components/Navbar'

const Login = () => {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-[#F5F7FA] to-[#C3CFE2] dark:bg-gradient-to-br dark:from-[#464647] dark:to-[#030913] px-5 py-5 gap-16 items-center">
        {/* <div> */}
            <Navbar />
        {/* </div> */}
        <div className="flex flex-col bg-otherBlue gap-10 items-center w-1/4 py-20 rounded-xl">
            <h1 className='text-6xl'>Login</h1>
            <input className='bg-lightBlue placeholder-black/60 px-5 py-1 rounded-md'
                type="text"
                placeholder="Username"
            />
            <div className='flex flex-col'>
                <input className='bg-lightBlue placeholder-black/60 px-5 py-1 rounded-md'
                    type="text"
                    placeholder="Password"
                />  
                <span className='text-otherWhite text-xs text-'>Forgot Password?</span>
            </div>                
            <button className=" bg-blue/80 px-8 rounded-md shadow-md w-fit text-white shadow-gray-500">
                Submit
            </button>            
        </div>
    </div>
  )
}

export default Login