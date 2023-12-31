import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {motion} from 'framer-motion'
import { ContextAPI } from '../contextAPI/context';
 const Croissants = () => {

   const {textEnter,textLeave,slideHove} = useContext(ContextAPI)
  return (
    <div className='min-h-[100vh] croissantsbg '>
         <div className='w-[95%]  md:w-[90%] m-auto pt-10 '>
            <h1 className='md:text-6xl text-5xl font-Lumanosimo underline'><span onMouseLeave={textLeave} onMouseEnter={textEnter}>Croissants</span></h1>
             <p className='mt-4 md:ml-24 text-center md:text-left'>The buttery king of the continental breakfast. <br className='hidden md:flex' />Find your favourite variety.</p>
            <div onMouseEnter={slideHove} onMouseLeave={textLeave}  className='mt-28'>
               <Swiper
                  spaceBetween={50}
                   grabCursor= {true}
                   breakpoints={{
                     640: {
                       slidesPerView: 2,
                     },
                     768: {
                       slidesPerView: 2,
                     },
                     1024: {
                       slidesPerView: 3,
                     },
                   }}
                  >
                   <SwiperSlide>
                      <div className='flex   gap-3 items-center justify-center flex-col'>
                         <motion.div className=' border1'>
                         <img src="https://lacremamalta.com/wp-content/uploads/2023/04/Chocolate_Croissant-La_Crema_Malta_home-480x480.png.webp" alt="" />
                         </motion.div>
                         <p>Chocolate Croissants</p>
                      </div>
                   </SwiperSlide>
                   <SwiperSlide>
                      <div className='flex gap-3 items-center justify-center flex-col'>
                      <motion.div  className=' border2'>
                         <img src="https://lacremamalta.com/wp-content/uploads/2023/04/Croissant_Custard-La_Crema_Malta_home-480x480.png.webp" alt="" />
                         </motion.div>
                         <p>Custard Croissants</p>
                      </div>
                   </SwiperSlide>
                   <SwiperSlide>
                      <div className='flex gap-3 items-center justify-center flex-col'>
                      <motion.div  className=' border3'>
                         <img src="https://lacremamalta.com/wp-content/uploads/2023/04/Pistachio_Croissant-La_Crema_Malta_home-1-480x480.png.webp" alt="" />
                         </motion.div>
                         <p>Pistacchio Croissants</p>
                      </div>
                   </SwiperSlide>
                   <SwiperSlide>
                      <div className='flex gap-3 items-center justify-center flex-col'>
                      <motion.div  className=' border4'>
                         <img src="https://lacremamalta.com/wp-content/uploads/2023/04/Croissant_Integrale-La_Crema_Malta_home-480x480.png.webp" alt="" />
                         </motion.div>
                         <p>Integrale Al Miele</p>
                      </div>
                   </SwiperSlide>
                   <SwiperSlide>
                      <div className='flex gap-3 items-center justify-center flex-col'>
                      <motion.div  className=' border5'>
                         <img src="https://lacremamalta.com/wp-content/uploads/2023/04/Croissant_Ricotta-La_Crema_Malta_home-480x480.png.webp" alt="" />
                         </motion.div>
                         <p>Ricota Croissants</p>
                      </div>
                   </SwiperSlide>
                   
                   
      
               </Swiper>
            </div>
        </div>
    </div>
  )
}

export default Croissants