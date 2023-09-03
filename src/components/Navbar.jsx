import React,{useState,useContext} from 'react'
import crema from '../assets/crema.jpeg'
import {IoLogoWhatsapp} from 'react-icons/io'
import {BiMenuAltRight} from 'react-icons/bi'
import Navmenu from './Navmenu'
import {ContextAPI} from '../contextAPI/context'
const Navbar = () => {
  const {isopen,setIsopen,navbar} = useContext(ContextAPI)

  return (
    <div>
      <div className={`min-h-[17vh] flex items-center z-[10] fixed top-0 w-full  navbar ${navbar ? 'active':'' } `}>
      <div className='w-[95%] md:w-[90%] m-auto flex items-center justify-between '>
          <div><img className='md:w-16 w-16 rounded-full' src={crema} alt="logo" /></div>
             <div className='flex items-center gap-4 md:gap-10 '>
                 <IoLogoWhatsapp className='md:text-3xl text-3xl text-[#ffcb31] cursor-pointer'/>
                 <BiMenuAltRight onClick={()=>setIsopen(true)} className='md:text-4xl text-3xl  hover:text-[#ffcb31] text-[#efead5] cursor-pointer'/>
            </div>
      </div>
      

    </div>
    { isopen &&
       <Navmenu/> 
    }
    </div>
  )
}

export default Navbar