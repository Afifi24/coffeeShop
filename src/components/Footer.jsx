import React from 'react'
import logo from '../assets/crema.jpeg'
import {BsFacebook} from 'react-icons/bs'
import {PiInstagramLogoFill} from 'react-icons/pi'
import {BsDiscord} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
const Footer = () => {
  return (
    <div className='min-h-[70vh] pt-16 pb-3 croissantsbg'>
        <div className='w-[95%] md:w-[90%] m-auto '>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  '>
             <div className=' flex items-center col-span-1 '>
                <img className='w-16 rounded-full' src={logo} alt="" />
             </div>
             <div className='text-sm mt-8 md:mt-0 md:text-md lg:text-lg col-span-1 flex text-[#efead5] font-Comfortaa font-bold flex-col space-y-4'>
                <a className='hover:text-[#ffcb31] duration-200' href="">Our Story</a>
                <a className='hover:text-[#ffcb31] duration-200' href="">Menu</a>
                <a className='hover:text-[#ffcb31] duration-200' href="">Gallery</a>
                <a className='hover:text-[#ffcb31] duration-200' href="">Order on Wolt</a>
                <a className='hover:text-[#ffcb31] duration-200' href="">Privacy Policy</a>
             </div>
             <div className='flex mt-8 md:mt-0 col-span-1 flex-col items-start gap-6 justify-end '>
                <h2 className='text-[#efead5] font-Comfortaa'>join our community</h2>
                <div className='flex items-center gap-4'>
                  <BsFacebook className='md:text-2xl text-xl cursor-pointer hover:text-[#ffcb31] duration-200 text-[#efead5]' />
                  <PiInstagramLogoFill className='md:text-2xl text-xl hover:text-[#ffcb31] duration-200 cursor-pointer text-[#efead5]' />
                  <BsDiscord className='md:text-2xl text-xl cursor-pointer hover:text-[#ffcb31] duration-200 text-[#efead5]' />
                </div>
                <div className='h-[1px] bg-[#efead5] w-full'/>
                <div className='flex gap-3 group cursor-pointer  duration-300 items-center'>
                  <IoLogoWhatsapp className='md:text-4xl text-2xl group-hover:text-[#ffcb31] text-[#efead5]'/>
                  <p className=' font-Lumanosimo group-hover:text-[#ffcb31] md:text-2xl text-xl text-[#efead5] '>+212614350974</p>
                </div>
             </div>
          </div>
           <div className='flex mt-10 md:mt-32 flex-col md:flex-row gap-2 items-start justify-between text-[#efead5]  font-Comfortaa md:items-center '>
                <p className='text-sm md:text-md  text-[#efead5]'>&copy; 2023, La crema. All the rights reserved.</p>
                <p className='text-sm md:text-md  text-[#efead5]'>Created and developed by <span className='text-[#ffcb31] font-bold'>Afifi</span></p>
           </div>
        </div>
    </div>
  )
}

export default Footer