import React from 'react'
import { Navbar } from './components/Navbar'

const About = () => {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-[#F5F7FA] to-[#C3CFE2] dark:bg-gradient-to-br dark:from-[#464647] dark:to-[#030913] px-5 py-5 gap-16 items-center">
        <Navbar />
        <div className="flex flex-col gap-10 items-center w-1/2 py-20">
            <h1 className='text-6xl dark:text-otherWhite'>About Us</h1>
            <p className='text-lg dark:text-otherWhite/80'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur mauris sit amet metus tristique, nec cursus nulla semper. Donec viverra, justo at eleifend scelerisque, tortor arcu lacinia odio, vel aliquet felis dui at risus. Sed et dui lectus. Donec non orci eget velit semper faucibus. Phasellus sodales dictum nibh, ac placerat nunc consectetur ut. 
            </p>
            <p className='text-lg dark:text-otherWhite/80'>
                Proin a mauris eu mi ultricies iaculis. Integer sit amet ultricies enim. Proin id dolor ut arcu posuere scelerisque. Suspendisse potenti. Fusce sed justo id urna consectetur vestibulum. Morbi convallis sodales vestibulum. In hac habitasse platea dictumst. Cras commodo lectus at eros eleifend faucibus. 
            </p>
        </div>
    </div>
  )
}

export default About
