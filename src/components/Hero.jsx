import React from 'react'
import banner from './../assets/banner_ing.png'
import logo from './../assets/logo.png'
const Hero = () => {
  return (
    <div className='bg-[#007bff] flex justify-between px-2  '>
        <div className="flex-1 self-center flex flex-col space-y-[50px]   ">
            <img src={logo} alt="" className='w-[200px] ' />
            <p className='text-[65px] font-bold '>Pro<br/>Body Builder Protien</p>
            <div className="ml-4 leading-0">
                <button className='bg-black px-10 py-2 text-white mr-5'>About Protein</button>
                <button className='bg-black px-10 py-2 text-white'>Contact Us</button>
            </div>
        </div>
        <div className="flex-1">
            <img src={banner} alt="" className='h-screen  object-fill'  />
        </div>
    </div>
  )
}

export default Hero