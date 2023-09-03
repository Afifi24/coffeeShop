import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import  Croissants  from './components/Croissants'
import Pizza from './components/Pizza'
import Pasta from './components/Pasta'
import Hero from './components/Hero'
import Feeders from './components/Feeders'
import Visite from './components/Visite'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import {Pageanim} from './components/Animation'
import {motion} from 'framer-motion'
const App = () => {
  return (
    <motion.div variants={Pageanim} initial='hidden' animate='show'>
      <Cursor/>
      <Navbar/>
      <Header/>
      <Croissants/>
      <Pizza/>
      <Pasta/>
      <Hero/>
      <Feeders/>
      <Visite/>
      <Footer/>
    </motion.div>
  )
}

export default App