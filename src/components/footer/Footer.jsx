import React from 'react'
import logo from './logo.png'
import {ArrowUpRight} from 'lucide-react'
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";


function Footer({id}) {
  return (
    <div className='w-full sm:h-auto bg-black border grid  grid-cols-12 gap-4 text-white place-self-end bottom-0' id={id}>
    <div className='sm:col-span-4 col-span-12 flex justify-center items-center p-5'>
        <img src={logo} className=''></img>
        <p className='place-self-center font-bold text-2xl font-goth tracking-widest'>TASKR</p>
    </div>
    <div className='sm:col-span-4 col-span-12 place-content-center justify-self-center mt-5 p-5'>
    <p className='font-bold underline underline-offset-2'>Contact</p>
        <ul className='pt-5 '>
            <li className=' p2'>taskrhelp@gmail.com</li>
            <li className='p2 tracking-wide'>+91 878764868</li>
            <li className='p2'> Solan-Oachghat-Kumarhatti Highway, Himachal Pradesh 173229</li>
        </ul>
    </div>
    <div className='sm:col-span-4 col-span-12 place-content-center justify-self-center mt5 p-5'>
    <p className='underline underline-offset-2 font-bold'>Want to join us now?</p>
    <p className='flex items-center mt-2' >Sign Up   <ArrowUpRight size={20}/></p>
    <div className='grid grid-cols-12 mt-5'>
    <p className='col-span-12 mb-2'>Follow us:</p>
    <FaInstagram className='col-span-4 m3'/>
    <IoLogoGithub className='col-span-4 m3 '/>
    <CiFacebook className='col-span-4 m3'/>

    </div>


    </div>
    </div>
  )
}

export default Footer