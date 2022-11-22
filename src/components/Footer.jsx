import React from 'react'
import {BsFacebook,BsTwitter,BsInstagram} from 'react-icons/bs'
import { AiTwotonePhone, AiTwotoneMail } from 'react-icons/ai'
import { MdLocationOn } from 'react-icons/md'
import logo from './../assets/logo2.png'
const Footer = () => {
    return (
        <div className='bg-black text-white'>
            <div className="top grid grid-cols-3 place-items-center py-4">
                <div className="item flex items-center self-start">
                    <AiTwotonePhone size={30} /> Call Now +01 123467890
                </div>
                <div className="item flex items-center">
                    <MdLocationOn size={30} /> Location
                </div>
                <div className="item flex items-center">
                    <AiTwotoneMail size={30} /> Mail@domain.com
                </div>
            </div>

            <div className="grid grid-cols-4 place-items-center py-8 px-6">
                <div className="item flex flex-col items-start self-start">
                    <img src={logo} alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum</p>
                </div>
                <div className="item flex flex-col items-start">
                    <p className='py-3 font-bold'>Information</p>
                    <p className='max-w-[150px]'>There are many
                        variations of pas
                        sages of Lorem
                        Ipsum available,
                        but the majority
                        have suffered</p>
                </div>
                <div className="item flex flex-col items-start">
                    <p className='py-3 font-bold'>Information</p>
                    <p className='max-w-[150px]'>There are many
                        variations of pas
                        sages of Lorem
                        Ipsum available,
                        but the majority
                        have suffered</p>
                </div>
                <div className="item flex flex-col items-start">
                    <p className='py-3 font-bold'>Information</p>
                    <p className='max-w-[150px]'>There are many
                        variations of pas
                        sages of Lorem
                        Ipsum available,
                        but the majority
                        have suffered</p>
                </div>



            </div>
            <div className="socials flex space-x-5 justify-center py-5">
            <a href="" className='hover:text-blue-500'><BsFacebook size={25}/></a>
            <a href="" className='hover:text-blue-500'><BsTwitter size={25}/></a>
            <a href="" className='hover:text-blue-500'> <BsInstagram size={25}/></a>
            </div>
        </div>
    )
}

export default Footer