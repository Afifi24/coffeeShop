import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


 const Pizza = () => {
  return (
    <div className='min-h-[100vh] croissantsbg '>
         <div className='w-[95%]  md:w-[90%] m-auto py-10 '>
            <h1 className='text-6xl font-Lumanosimo underline'>Pizzas</h1>
             <p className='mt-4 ml-24'>Homemade dough, fresh ingredients, <br /> and slices of perfection.</p>
            <div className='mt-6'>
               <Swiper
                  spaceBetween={50}
                  slidesPerView={3}
                   grabCursor= {true}
                  >
                   <SwiperSlide>
                      <div className='flex items-center justify-center flex-col'>
                         <img src="https://lacremamalta.com/wp-content/uploads/2023/04/margherita_pizza-la_crema_malta_home-480x480.png.webp" alt="" />
                         <p>Margherita Pizza</p>
                      </div>
                   </SwiperSlide>
                   <SwiperSlide>
                      <div className='flex items-center justify-center flex-col'>
                      <img src="https://lacremamalta.com/wp-content/uploads/2023/04/Napoli_Pizza-La_Crema__Malta_home-480x480.png.webp" alt="" />
                         <p>Napoli Pizza</p>
                      </div>
                   </SwiperSlide>
                   <SwiperSlide>
                      <div className='flex items-center justify-center flex-col'>
                      <img src="https://lacremamalta.com/wp-content/uploads/2023/04/Friarielli_e_salsiccia_pizza-La_Crema_Malta_home-480x480.png.webp" alt="" />
                         <p>Friarielli E Salsiccia</p>
                      </div>
                   </SwiperSlide>
                   <SwiperSlide>
                      <div className='flex items-center justify-center flex-col'>
                      <img src="https://lacremamalta.com/wp-content/uploads/2023/04/Pizza_Vegetariana-La_Crema_Malta_home-480x480.png.webp" alt="" />
                         <p>Vegeteriana Pizza</p>
                      </div>
                   </SwiperSlide>
                   <SwiperSlide>
                      <div className='flex items-center justify-center flex-col'>
                      <img src="https://lacremamalta.com/wp-content/uploads/2023/04/Calzone_Classico-La_Crema_Malta_home-480x480.png.webp" alt="" />
                         <p>Calzone Classico</p>
                      </div>
                   </SwiperSlide>
                   <SwiperSlide>
                      <div className='flex items-center justify-center flex-col'>
                      <img src="https://lacremamalta.com/wp-content/uploads/2023/04/Pizza_La_Crema-La_Crema_Malta_home-480x480.png.webp" alt="" />
                         <p>La Creme Pizza</p>
                      </div>
                   </SwiperSlide>
                   <SwiperSlide>
                      <div className='flex items-center justify-center flex-col'>
                      <img src="https://lacremamalta.com/wp-content/uploads/2023/04/Pizza_Balluta-La_Crema_Malta_home-480x480.png.webp" alt="" />
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