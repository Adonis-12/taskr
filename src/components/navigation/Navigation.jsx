import React from 'react'
import logo from './logo.png'
import { Button } from "@/components/ui/button"
import { NavLink} from 'react-router-dom'
import  {Link } from 'react-scroll'


function Navigation({componentIds}) {
  return (
   <>
    <div className='font-roboto border-2 border-blue-100/50 m-5  rounded-lg shadow-lg grid text-gray-800 grid-cols-12 content-center place-content-center 
    motion-opacity-in-0 motion-translate-x-in-10 motion-blur-in-md motion-duration-[2s] 
    intersect:motion-preset-fade-delay-200'>
    <div className=' col-span-4 gap-1 flex  items-center '>
       <img src={logo} className='w-10 h-10'></img>
       <p className=' text-xl text-slate-800 font-goth'>Taskr</p>
    </div>
    <div className='col-span-4 flex  items-center justify-center'>
      <ul className='flex gap-4 justify-start items-center '>
                <Link
                to={componentIds.landing} 
                smooth={true}
                horizontal={true} 
                duration={500}
                ><li className=' hover:text-slate-500 hover:underline hover:underline-offset-2 cursor-pointer'>Home</li></Link>
                <Link
                to={componentIds.find} 
                smooth={true}
                duration={500}
                ><li className=' hover:text-slate-500 hover:underline hover:underline-offset-2 cursor-pointer'>Services</li></Link>
                <Link
                to={componentIds.footer} 
                smooth={true}
                duration={1000}
                ><li className=' hover:text-slate-500 hover:underline hover:underline-offset-2 cursor-pointer'>Contact</li></Link>
            </ul>
    </div>
    <div className='col-span-4 flex  items-center justify-end m-2 gap-4'>
        <NavLink to='/login/user'><Button variant="outline">Login</Button></NavLink>
        <NavLink to='/signup/user' ><Button variant="outline" className='bg-slate-800 text-white hover:bg-slate-600 hover:text-white'>Signup</Button></NavLink>
    </div>
    </div>
   </>
  )
}

export default Navigation