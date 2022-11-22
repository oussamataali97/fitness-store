import React from 'react'
import img1 from './../assets/pro1.png'
import img2 from './../assets/pro2.png'

import img3 from './../assets/pro3.png'

import img4 from './../assets/pro4.png'


const OurProtein = () => {
  return (
    <div className='px-[80px] py-10 bg-gray-100'>
            <h1 className='text-[40px] font-bold py-5 '>Our Protein</h1>

            <div className="grid grid-cols-4 justify-items-center items-center text-center font-bold  ">
                <div className="card ">
                    <img src={img1} alt="" />
                    <p  className='text-[25px] font-semibold' >400$</p>
                    <p className='text-[22px] font-semibold] text-gray-800'>Variations</p>
                    <button className='bg-neutral-800 text-white px-10 py-2'>Buy Now</button>
                </div>
                <div className="card">
                    <img src={img2} a alt="" />
                    <p className='text-[25px] font-semibold' >400$</p>
                    <p className='text-[22px] font-semibold] text-gray-800'>Variations</p>
                    <button className='bg-neutral-800 text-white px-10 py-2'>Buy Now</button>
                </div>
                <div className="card">
                    <img src={img3} a alt="" />
                    <p className='text-[25px] font-semibold' >400$</p>
                    <p className='text-[22px] font-semibold] text-gray-800'>Variations</p>
                    <button className='bg-neutral-800 text-white px-10 py-2'>Buy Now</button>
                </div>
                <div className="card">
                    <img src={img4} a alt="" />
                    <p className='text-[25px] font-semibold' >400$</p>
                    <p className='text-[22px] font-semibold] text-gray-800'>Variations</p>
                    <button className='bg-neutral-800 text-white px-10 py-2'>Buy Now</button>
                </div>
            </div>
    </div>
  )
}

export default OurProtein