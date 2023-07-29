import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import  Croissants  from './components/Croissants'
import Pizza from './components/Pizza'
const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <Header/>
      <Croissants/>
      <Pizza/>
    </div>
  )
}

export default App