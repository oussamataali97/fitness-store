import React from 'react'
import image from './../assets/tesr.png'
import person from './../assets/costu.png'

const Testimonial = () => {
  return (
    <>
    <h1 className='text-center font-bold text-4xl text-gray-800'>Testimonial</h1>
    <div className='px-[80px] flex justify-center items-center text-white py-6 '>

        <div className="flex-1">
            <img src={image} alt="" />
        </div>
        <div className="flex-1 bg-blue-400 px-8 py-16">
            <div className="info flex items-center">

            <img src={person} alt="" />
            <p className='text-[30px] font-semibold ml-5  '>Consectetur</p>
            </div>

            <p className='py-5 font-semibold text-[20px]  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                 eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis</p>
        </div>
    </div>
    </>
  )
}

export default Testimonial