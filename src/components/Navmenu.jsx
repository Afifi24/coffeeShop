import React,{useContext} from 'react'
import { ContextAPI } from '../contextAPI/context'
import logo from '../assets/crema.jpeg'
import {AiFillCloseCircle} from 'react-icons/ai'
const Navmenu = () => {
  const {Ref,closeNavmenu,setIsopen} = useContext(ContextAPI)
  return (
    <div ref={Ref}onClick={closeNavmenu} className='bg-black bg-opacity-50 h-screen flex justify-center items-center w-full fixed left-0 top-0 z-10 '>
      <div className='w-[90%] flex items-start md:p-10 p-4 justify-between gap-3 h-[90%] rounded-md bg-[#efead5]'>
        <div>
          <img className='md:w-16 w-10 rounded-full' src={logo} alt="" />
        </div>
        <div className='text-xl sm:text-xl mt-36 md:mt-14 text-center md:text-2xl lg:text-3xl  col-span-1 flex text-[#498c93] font-Lumanosimo font-bold flex-col space-y-10'>
                <a className='hover:text-[#ffcb31]  duration-200' href="#">Home</a>
                <a className='hover:text-[#ffcb31]  duration-200' href="#">Our Story</a>
                <a className='hover:text-[#ffcb31]  duration-200' href="#">Menu</a>
                <a className='hover:text-[#ffcb31]  duration-200' href="#">Gallery</a>
                <a className='hover:text-[#ffcb31]  duration-200' href="#">Contact</a>
          </div>
          <div>
              <AiFillCloseCircle onClick={()=>setIsopen(false)} className='md:text-4xl text-[#56adb6] cursor-pointer text-3xl'/>
          </div>
          
      </div>


    </div>
  )
}

export default Navmenu