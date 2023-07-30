import React from 'react'
import franc from '../assets/franc.png'
const Hero = () => {
  return (
    <div className='min-h-[100vh] herobg py-20'>
        <div>
            <div id='hero' className='flex items-center flex-col justify-center'>
                <div className='flex items-end justify-end'>
                <img  src={franc} alt="" />
                </div>
                <h2 className=' text-5xl my-3 sm:text-5xl md:text-6xl font-Lumanosimo md:text-left text-center'>Hello, i'm John</h2>
                <p className='text-center md:text-left'>"I want to create a memorable moments for my clients and friends"</p>
                <button className='bg-[#ffcb31]  font-Comfortaa mt-4 font-semibold px-7 py-3 text-[#2A5054] rounded-full duration-200 hover:bg-[#2A5054] hover:text-[#ffcb31] shaddow hover:translate-x-2 hover:translate-y-2'>Discover our story</button>
            </div>
            <div>
                
            </div>
        </div>
    </div>
  )
}

export default Hero