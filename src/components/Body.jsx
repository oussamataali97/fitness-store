import React from 'react'
import body from './../assets/body.png'
import border from './../assets/border.png'

const Body = () => {
  return (
    <div className='flex items-center px-[80px] py-24 '>


        <div className="flex-1 flex items-center">
            <img src={border} alt="" />
            <img src={body} alt="" />
        </div>
        <div className="flex-1  ">
        <p className='font-bold text-[70px] text-gray-800 pt-4'>Growyhing Your Body From Protien</p>

            <button className='bg-neutral-800 text-white px-10 py-2 mt-10'>Read More</button>

        </div>
    </div>
  )
}

export default Body