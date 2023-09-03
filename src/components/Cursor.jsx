import React, { useEffect, useState,useContext } from 'react'
import {motion} from 'framer-motion'
import {ContextAPI} from '../contextAPI/context'
const Cursor = () => {
    const {changeanim,animation}= useContext(ContextAPI)
   
  return (
        <motion.div variants={animation} animate={changeanim} className='h-6 w-6 rounded-full bg-black fixed  pointer-events-none z-40'/>
    
  )
}

export default Cursor