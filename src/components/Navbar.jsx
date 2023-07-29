import React from 'react'
import logo from '../assets/logo.jpeg'
import crema from '../assets/crema.jpeg'
import {FaBars} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
const Navbar = () => {
  return (
    <div className='min-h-[17vh] flex items-center fixed top-0 w-full  bg-[#4D9199]'>
      <div className='w-[95%] md:w-[90%] m-auto flex items-center justify-between '>
          <div><img className='md:w-16 w-16 rounded-full' src={crema} alt="logo" /></div>
             <div className='flex items-center gap-10 '>
                 <BsWhatsapp className='md:text-3xl text-2xl text-white cursor-pointer'/>
                 <FaBars className='md:text-3xl text-2xl text-white cursor-pointer'/>
            </div>
      </div>
    </div>
  )
}

export default Navbar