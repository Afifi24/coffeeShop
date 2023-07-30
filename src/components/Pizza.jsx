import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {motion} from 'framer-motion'

 const Pizza = () => {
  return (
    <div className='min-h-[100vh] croissantsbg '>
         <div className='w-[95%]  md:w-[90%] m-auto py-28 '>
            <h1 className='text-6xl font-Lumanosimo underline'>Pizzas</h1>
             <p className='mt-4 ml-24'>Homemade dough, fresh ingredients, <br /> and slices of perfection.</p>
            <div className='my-28'>
               <Swiper
                  spaceBetween={50}
                   grabCursor= {true}
                   scrollbar={{ draggable: true }}
                   resistance={false}
                   freeMode={true} 
                   freeModeMomentum={true} 
                   freeModeMomentumRatio={0.5}
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
                         <img src="https://lacremamalta.com/wp-content/uploads/2023/04/margherita_pizza-la_crema_malta_home-480x480.png.webp" alt="" />
                         </motion.div>
                         <p>Margherita Pizza</p>
                      </div>
                   </SwiperSlide>
                   <SwiperSlide>
                      <div className='flex gap-3 items-center justify-center flex-col'>
                        <motion.div className=' border2'>
                         <img src="https://lacremamalta.com/wp-content/uploads/2023/04/Napoli_Pizza-La_Crema__Malta_home-480x480.png.webp" alt="image" />
                         </motion.div>
                         <p>Napoli Pizza</p>
                      </div>
                   </SwiperSlide>
                   <SwiperSlide>
                      <div className='flex gap-3 items-center justify-center flex-col'>
                        <motion.div className=' border3'>
                         <img src="https://lacremamalta.com/wp-content/uploads/2023/04/Friarielli_e_salsiccia_pizza-La_Crema_Malta_home-480x480.png.webp" alt="image" />
                         </motion.div>
                         <p>Friarielli E Salsiccia</p>
                      </div>
                   </SwiperSlide>
                   <SwiperSlide>
                      <div className='flex gap-3 items-center justify-center flex-col'>
                        <motion.div className=' border4'>
                         <img src="https://lacremamalta.com/wp-content/uploads/2023/04/Pizza_Vegetariana-La_Crema_Malta_home-480x480.png.webp" alt="image" />
                         </motion.div>
                         <p>Vegeteriana Pizza</p>
                      </div>
                   </SwiperSlide>
                   <SwiperSlide>
                      <div className='flex gap-3 items-center justify-center flex-col'>
                         <motion.div className=' border5'>
                         <img src="https://lacremamalta.com/wp-content/uploads/2023/04/Calzone_Classico-La_Crema_Malta_home-480x480.png.webp" alt="image" />
                         </motion.div>
                         <p>Calzone Classico</p>
                      </div>
                   </SwiperSlide>
                   <SwiperSlide>
                      <div className='flex gap-3 items-center justify-center flex-col'>
                      <motion.div className=' border3'>
                         <img src="https://lacremamalta.com/wp-content/uploads/2023/04/Pizza_La_Crema-La_Crema_Malta_home-480x480.png.webp" alt="image" />
                         </motion.div>
                         <p>La Creme Pizza</p>
                      </div>
                   </SwiperSlide>
                   <SwiperSlide>
                      <div className='flex gap-3 items-center justify-center flex-col'>
                        <motion.div className=' border2'>
                         <img src="https://lacremamalta.com/wp-content/uploads/2023/04/Pizza_Balluta-La_Crema_Malta_home-480x480.png.webp" alt="image" />
                         </motion.div>
                         <p>Balluta Pizza</p>
                      </div>
                   </SwiperSlide>
                   
                   
      
               </Swiper>
            </div>
        </div>
    </div>
  )
}

export default Pizza