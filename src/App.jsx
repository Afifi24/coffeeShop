import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import  Croissants  from './components/Croissants'
import Pizza from './components/Pizza'
import Pasta from './components/Pasta'
import Hero from './components/Hero'
import Feeders from './components/Feeders'
import Visite from './components/Visite'
const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <Header/>
      <Croissants/>
      <Pizza/>
      <Pasta/>
      <Hero/>
      <Feeders/>
      <Visite/>
    </div>
  )
}

export default App