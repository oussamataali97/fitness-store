import React from 'react'

const Contact = () => {
  return (
    <div className=' m-auto max-w-xl py-16'>
        <h1 className=' text-[40px] font-bold text-center '>Request a call back</h1>
        <form action="" className='flex flex-col text-[20px]  '>
            <input type="text" className='border-b-[1px] py-2 focus:outline-none my-2 placeholder:text-black border-black' placeholder='Full Name..' />
            <input type="text" className='border-b-[1px] py-2 focus:outline-none my-2 placeholder:text-black border-black' placeholder='Email..' />
            <input type="text" placeholder='Phone Number..' className='border-b-[1px] placeholder:text-black py-2 focus:outline-none my-2  border-black' />
            <textarea name="" className='placeholder:text-black border-b-[1px] focus:outline-none my-2 border-black h-32' id="" placeholder='Message'></textarea>
            <a href=""  className='bg-neutral-800 text-white px-10 py-5 mt-10 text-center w-[190px] mx-auto '>Send</a>
        </form>
    </div>
  )
}

export default Contact