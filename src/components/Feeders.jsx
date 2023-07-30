import React from 'react'

const Feeders = () => {
  return (
    <div className='min-h-[100vh] croissantsbg py-6 '>
        <div className='flex md:w-[90%] m-auto w-[95%] py-10 flex-col items-center'>
           <h3 className='text-7xl text-center md:leading-[70px] font-bold font-Comfortaa text-white '>We're feeders <br /> and pleasers</h3>
           <div className='flex pt-20 flex-col md:flex-row gap-8  items-start md:gap-20'>
            <div className='flex gap-4 items-center flex-col '>
               <img className='w-[200px]' src="https://lacremamalta.com/wp-content/uploads/2023/03/Client-4-720x1080.png.webp" alt="" />
                <p className='max-w-sm text-center text-[#efead5]'>La crema has become like a seconde home to me. Franc, together with his friendly team have made feel welcome from day one</p>
                <h1 className='font-Lumanosimo font-bold text-[#ffcb31] '>Steve Abela</h1>

            </div>
            <div className='flex  gap-4 items-center flex-col '>
                <img className='w-[200px]' src="https://lacremamalta.com/wp-content/uploads/2023/03/Client-3-720x1080.png.webp" alt="" />
                <p className=' text-[#efead5] max-w-sm text-center'>Special mention goes to Monica,Ludovica;Elica,Kamila,and the rest of the young energetic and dedecated team. La crema is definetly my favourite place to be.</p>
                <h1 className='font-Lumanosimo text-[#ffcb31]  font-bold'>Katia Abela</h1>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Feeders