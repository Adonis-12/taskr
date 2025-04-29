import React from 'react'
import {Button} from '../../ui/button'
import {Input} from '../../ui/input'
import { CiSearch } from "react-icons/ci";

function Bookings() {
  return (
    <div className='grid grid-cols-1 place-content-center justify-items-center h-full w-full text-gray-600 font-light font-open_sans'>
        <div className='w-full grid grid-cols-2 justify-items-start font-mont text-black p-5 ' >
            <h1 className='text-5xl '>Bookings</h1>
            <Button className='place-self-end p-5 bg-blue-500 hover:bg-sky-600 cursor-pointer'>New Booking</Button>
        </div>

        <div className='mt-5 w-1/2 '>
            <Input className='border-2' placeholder='Search'/>
        </div>

        <div className='max-w-9/10 border-2 mt-5 rounded-xl'>

            <div className='  p-5 grid grid-cols-3 place-content-center gap-10'>
            <div className='w-full flex gap-4'>
                    <div className='aspect-square max-w-1/3 rounded-full overflow-hidden '>
                    <img src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D'></img>
                </div>

                <div className='grid grid-rows-3 gap-2 place-self-center'>
                    <p className='font-bold text-black'>#12298y</p>
                    <p className='font-bold text-black'>Mayank banga</p>
                    <p>October 20, 2024</p>
                </div>
            </div>

            <div className='flex justify-center items-center '>
                <p className='w-1/6 p-1  rounded-4xl  flex justify-center bg-green-400/30  font-extralight text-green-900'>Paid</p>
            </div>
            
            <div className=' w-full flex justify-center items-center flex-col gap-3'>
                <p className='w-1/4 p-1  rounded-4xl  flex justify-center bg-green-400/30  font-extralight text-green-900'>Confirmed</p>
                <p className='text-xl'>$235.50</p>
            </div>

            </div>
        </div>
    </div>
  )
}

export default Bookings