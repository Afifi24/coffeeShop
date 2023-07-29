import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


 const Croissants = () => {
  return (
    <div className='min-h-[100vh] croissantsbg '>
         <div className='w-[95%]  md:w-[90%] m-auto py-10 '>
            <h1 className='text-6xl font-Lumanosimo underline'>Croissants</h1>
             <p className='mt-4 ml-24'>The buttery king of the continental breakfast. <br />Find your favourite variety.</p>
            <div className='mt-6'>
               <Swiper
                  spaceBetween={50}
                  slidesPerView={3}
                   grabCursor= {true}
                  >
                   <SwiperSlide>
                      <div className='flex items-center justify-center flex-col'>
                         <img src="https://lacremamalta.com/wp-content/uploads/2023/04/Chocolate_Croissant-La_Crema_Malta_home-480x480.png.webp" alt="" />
                         <p>Chocolate Croissants</p>
                      </div>
                   </SwiperSlide>
                   <SwiperSlide>
                      <div className='flex items-center justify-center flex-col'>
                      <img src="https://lacremamalta.com/wp-content/uploads/2023/04/Croissant_Custard-La_Crema_Malta_home-480x480.png.webp" alt="" />
                         <p>Custard Croissants</p>
                      </div>
                   </SwiperSlide>
                   <SwiperSlide>
                      <div className='flex items-center justify-center flex-col'>
                      <img src="https://lacremamalta.com/wp-content/uploads/2023/04/Pistachio_Croissant-La_Crema_Malta_home-1-480x480.png.webp" alt="" />
                         <p>Pistacchio Croissants</p>
                      </div>
                   </SwiperSlide>
                   <SwiperSlide>
                      <div className='flex items-center justify-center flex-col'>
                      <img src="https://lacremamalta.com/wp-content/uploads/2023/04/Croissant_Integrale-La_Crema_Malta_home-480x480.png.webp" alt="" />
                         <p>Integrale Al Miele</p>
                      </div>
                   </SwiperSlide>
                   <SwiperSlide>
                      <div className='flex items-center justify-center flex-col'>
                      <img src="https://lacremamalta.com/wp-content/uploads/2023/04/Croissant_Ricotta-La_Crema_Malta_home-480x480.png.webp" alt="" />
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