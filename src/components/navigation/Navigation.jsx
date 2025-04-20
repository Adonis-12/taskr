import React from 'react'
import logo from './logo.png'
import { Button } from "@/components/ui/button"


function Navigation() {
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
                <li className=' hover:text-slate-500 hover:underline hover:underline-offset-2 cursor-pointer'>Home</li>
                <li className=' hover:text-slate-500 hover:underline hover:underline-offset-2 cursor-pointer'>Services</li>
                 <li className=' hover:text-slate-500 hover:underline hover:underline-offset-2 cursor-pointer'>Contact</li>
            </ul>
    </div>
    <div className='col-span-4 flex  items-center justify-end m-2 gap-4'>
        <a href='../login'><Button variant="outline">Login</Button></a>
        <a><Button variant="outline" className='bg-slate-800 text-white hover:bg-slate-600 hover:text-ehite'>Signup</Button></a>
    </div>
    </div>
   </>
  )
}

export default Navigation