import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
const Header = () => {
  return (
    <div className='min-h-[100vh] mt-[6rem] flex items-start pt-4 headerbg'>
      <div className=' w-[95%]  md:w-[88%] m-auto flex lg:flex-row flex-col  items-center    '>
          <div className='text-white flex-1 -mt-20 lg:-mt-0  order-2 lg:order-1 flex  justify-start  flex-col'>
            <h1 className=' text-3xl xs:text-4xl sm:text-5xl text-center lg:text-left lg:text-8xl  '>Follow <br/> Your taste</h1>
            <p className='m-4 text-[#2A5054] text-center lg:text-left font-semibold'>Activate your afternoon with something delicious</p>
            <div className='flex flex-col lg:flex-row lg:mt-20 items-center gap-10'>
                <button className='bg-[#ffcb31] font-semibold px-5 py-2 text-[#2A5054] rounded-full duration-200 hover:bg-[#2A5054] hover:text-[#ffcb31] shaddow hover:translate-x-2 hover:translate-y-2'>Order on Wolt</button>
                <button className='hover:text-yellow-400 flex items-center justify-center duration-200 text-md tracking-[3px]'>Locations  <MdOutlineKeyboardArrowRight className='text-3xl font-bold mt-1' /></button>
            </div>
          </div>
          <div className='   flex-1  order-1 lg:order-2 '>
            <img className=' h-1/2 w-full' src="https://lacremamalta.com/wp-content/uploads/2023/03/Break.png" alt="" />
          </div>
      </div>
    </div>
  )
}

export default Header