import React from 'react'
import pic from './../assets/about.png'

const AboutUs = () => {
  return (
    <div className='flex items-center px-[80px] p-3 '>
        <div className="flex-1  ">
        <p className='font-bold text-[50px] pt-4'>About Us</p>
        <p className='max-w-[460px] py-4 text-[20px]'>It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or</p>
            <button className='bg-neutral-800 text-white px-10 py-2'>Read More</button>

        </div>

        <div className="flex-1">
            <img src={pic} alt="" />
        </div>
    </div>
  )
}

export default AboutUs