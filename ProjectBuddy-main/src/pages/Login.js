import React from 'react'
import { Navbar } from './components/Navbar'

const Login = () => {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-[#F5F7FA] to-[#C3CFE2] dark:bg-gradient-to-br dark:from-[#464647] dark:to-[#030913] px-5 py-5 gap-16 items-center">
        {/* <div> */}
            <Navbar />
        {/* </div> */}
        <div className="flex flex-col bg-otherBlue gap-10 items-center w-1/4 py-20 rounded-xl dark:bg-otherWhite/20">
            <h1 className='text-6xl dark:text-otherWhite'>Login</h1>
            <input className='bg-lightBlue shadow-md shadow-gray-500 dark:shadow-black/80 placeholder-black/60 px-5 py-1 rounded-md dark:bg-black/40 dark:placeholder-otherWhite/60'
                type="text"
                placeholder="Username"
            />
            <div className='flex flex-col gap-1'>
                <input className='bg-lightBlue shadow-md shadow-gray-500 dark:shadow-black/80 placeholder-black/60 px-5 py-1 rounded-md dark:bg-black/40 dark:placeholder-otherWhite/60'
                    type="text"
                    placeholder="Password"
                />  
                <span className='text-otherWhite text-xs dark:text-black/80 text-'>Forgot Password?</span>
            </div>                
            <button className=" bg-blue/80 px-8 rounded-md shadow-md w-fit text-white shadow-gray-500 dark:bg-black/60 dark:shadow-black/80">
                Submit
            </button>            
        </div>
    </div>
  )
}

export default Login