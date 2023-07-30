import React from 'react'
import franc from '../assets/franc.png'
import map from '../assets/map.png'
const Visite = () => {
  return (
    <div className='min-h-[100vh] herobg py-20'>
        <div className=' w-[90%] m-auto md:w-[95%]'>
             <h2 className='text-center text-5xl md:text-7xl font-Comfortaa'>Why don't you <br /> come over?</h2>
            <div className='flex items-center justify-center'>
            <div className='mt-32 max-w-3xl flex items-center flex-col md:flex-row gap-4 md:gap-10'>
                  <div className='flex-1'>
                    <img className='w-full rounded-md' src={map} alt="" />
                 </div>
                 <div className='flex-1 flex flex-col items-start gap-10'>
                   <p className='max-w-md text-[#498c93]'>Visit us at one of our locations for a snack today and we promise you will leave satisfied(and full).</p>
                   <button className='bg-[#ffcb31] font-semibold px-5 py-2 text-[#2A5054] rounded-full duration-200 hover:bg-[#2A5054] hover:text-[#ffcb31] shaddow hover:translate-x-2 hover:translate-y-2'>Locations</button>
                 </div>
             </div>
            </div>
          
        </div>
    </div>
  )
}

export default Visite