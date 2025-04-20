import React from 'react'
import help from './help.png'
import { Button } from '../ui/button'
import {ArrowUpRight} from 'lucide-react'

function LandingPage() {
  return (
    <div className='flex gap-4 font-roboto h-screen'>
        <div className='w-1/2  grid place-content-center gap-10 h-80vh 
        motion-rotate-in-loop motion-opacity-in-0 motion-translate-y-in-50 motion-blur-in-md motion-duration-[2s] motion-delay-200
         '>
        <p className='ml-10 font-goth'>
            <span className='text-slate-800 text-7xl '>Helping you </span><br></br>
            <br></br>
            <br></br>
            <span className='text-slate-700 text-6xl '>while you help them</span>
        </p>
        <p className='ml-10 text-gray-500 '>
        Taskr connects you with trusted,
         background-checked helpers for cleaning, cooking, childcare, laundry, and more. Whether you need
          a one-time deep clean or regular help, we make it effortless.
        </p>
        <div className='flex justify-center items-center '>
          <Button className='sm:p-5 rounded-full w-1/4 h-full sm:text-xl bg-slate-800 hover:bg-slate-600'>
          Get Started
          <ArrowUpRight></ArrowUpRight>
          </Button>
        </div>
        
        </div>
        <div className='w-1/2 h-full flex justify-center items-center '>
            <img src={help} className='bg-color-inherit opacity-90  motion-opacity-in-0 motion-translate-y-in-50 motion-blur-in-md motion-duration-[2s] motion-delay-500'></img>
        </div>
    </div>
  )
}

export default LandingPage