import React,{useContext} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {motion} from 'framer-motion'
import { ContextAPI } from '../contextAPI/context';

 const Pasta = () => {
   const {textEnter,textLeave,slideHove} = useContext(ContextAPI)

  return (
    <div className='min-h-[100vh] croissantsbg '>
         <div className='w-[95%]  md:w-[90%] m-auto pb-10 '>
            <h1 className='text-6xl font-Lumanosimo underline'><span onMouseEnter={textEnter} onMouseLeave={textLeave}>Pasta</span></h1>
             <p className='mt-4 md:ml-24 text-center md:text-left'>Delicious pasta deshes made with fresh, <br className='hidden md:flex' /> authentic ingredients.</p>
            <div onMouseEnter={slideHove} onMouseLeave={textLeave}  className='my-28'>
               <Swiper
                  spaceBetween={50}
                   grabCursor= {true}
                   scrollbar={{ draggable: true }}
                   resistance={false}
                   freeMode={true} 
                   loop={true}
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
                      <div className='flex gap-3 items-center justify-center flex-col'>
                         <motion.div className=' border1'>
                         <img src="https://lacremamalta.com/wp-content/uploads/2023/04/Pasta_Amatriciana-La_Crema_Malta_home-480x480.png.webp" alt="" />
                         </motion.div>
                         <p>Amatriciana</p>
                      </div>
                   </SwiperSlide>
                   <SwiperSlide>
                      <div className='flex gap-3 items-center justify-center flex-col'>
                        <motion.div className=' border2'>
                         <img src="https://lacremamalta.com/wp-content/uploads/2023/04/Parmigiana-La_Crema_Malta_home-480x480.png.webp" alt="image" />
                         </motion.div>
                         <p>Parmagiana</p>
                      </div>
                   </SwiperSlide>
                   <SwiperSlide>
                      <div className='flex gap-3 items-center justify-center flex-col'>
                        <motion.div className=' border3'>
                         <img src="https://lacremamalta.com/wp-content/uploads/2023/04/Pasta_Pistachiosa-La_Crema_Malta_home-480x480.png.webp" alt="image" />
                         </motion.div>
                         <p>Pistacchiosa</p>
                      </div>
                   </SwiperSlide>
                   <SwiperSlide>
                      <div className='flex gap-3 items-center justify-center flex-col'>
                        <motion.div className=' border4'>
                         <img src="https://lacremamalta.com/wp-content/uploads/2023/04/Pasta_Carbonara-La_Crema_Malta_home-480x480.png.webp" alt="image" />
                         </motion.div>
                         <p> Carbonara</p>
                      </div>
                   </SwiperSlide>
                   <SwiperSlide>
                      <div className='flex gap-3 items-center justify-center flex-col'>
                         <motion.div className=' border5'>
                         <img src="https://lacremamalta.com/wp-content/uploads/2023/04/Pasta_Pesto-La_Crema_Malta_home-480x480.png.webp" alt="image" />
                         </motion.div>
                         <p>Pesto</p>
                      </div>
                   </SwiperSlide>
               </Swiper>
            </div>
        </div>
    </div>
  )
}

export default Pasta