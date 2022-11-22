import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'

const NavHero = () => {
  return (
    <div className='grid grid-cols-[80px,1fr] h-screen overflow-hidden'>
        <Navbar/>
        <Hero/>
    </div>
  )
}

export default NavHero