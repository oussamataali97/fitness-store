import React from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import {BsFacebook,BsTwitter,BsInstagram} from 'react-icons/bs'
import {useState} from 'react'

const Navbar = () => {
    const [toggle,setToggle]=useState(false)
    const handletoggle = ()=>{
        setToggle(!toggle)
    }
  return (
    <>
    <div className=' flex flex-col justify-between items-center py-3'>
        <div className="menu cursor-pointer">
           {toggle ? <AiOutlineClose size={30} onClick={handletoggle}/> : <AiOutlineMenu size={30} onClick={handletoggle}/>}
        </div>

        <div className="socials space-y-3">
            <BsFacebook size={25}/>
            <BsTwitter size={25}/>
            <BsInstagram size={25}/>
        </div>

    </div>
    {toggle && <div className="h-screen w-screen bg-neutral-100 flex items-center justify-center ease-in duration-1000">
                <ul className='text-[30px]  '>
                   { ['Our Protein','Our Menu','Testimonial','Contact Us'].map((ele,index)=>(
                    <a href="" key={index}><li className='border-b-2 border-blue-300 hover:text-blue-500'>{ele} </li></a>
                   )) }

                </ul>
        </div>  }
    </>
  )

}

export default Navbar