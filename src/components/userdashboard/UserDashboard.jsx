import React from 'react'
import UserProfile from './UserProfile/UserProfile'
import { NavLink } from 'react-router-dom'
import { ScrollArea } from '../ui/scroll-area'


function UserDashboard() {
  return (
    <div className='w-screen h-screen bg-black flex font-mont'>
    {/* sidebar */}
    <div className='h-full w-1/6 grid  gap-2 text-gray-500 bg-inherit justify-items-center '>
    <div className='place-self-center justify-self-center row-span-5 '>
      <div className=' aspect-square w-3/4   rounded-full  overflow-hidden justify-items-center place-self-center shadow-md ring-2 ring-offset-white '>
            <img alt='profile' className='w-full h-auto ' 
            src='https://images.unsplash.com/photo-1676477208892-3a59818985bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D'></img>
        </div>
        <div className='justify-self-center mt-2 '>
          <h1 className='text-2xl text-white font-bold'>Samantha</h1>
          <h2 className='text-md '>samantha@gmail.com</h2>
        </div>
    </div>
        
        <div className='row-span-6'>
          <ul className='grid grid-rows-1 gap-3   font-bold tracking-wider'>
            <NavLink to='/dashboard/profile' className={({isActive}) => {
              return isActive? 'text-white bg-white/20 rounded-full p-3 w-full':'  w-full  p-3 hover:bg-white/20  hover:text-white  hover:rounded-full hover:duration-200 hover:animate-in '
            }}><li>Profile</li></NavLink>
            <NavLink to='/dashboard/bookings' className={({isActive}) => {
              return isActive? 'text-white bg-white/20 rounded-full p-3 w-full':'  w-full  p-3 hover:bg-white/20  hover:text-white  hover:rounded-full hover:duration-200 hover:animate-in '
            }}><li>Bookings</li></NavLink>
            <NavLink to='/dashboard/history' className={({isActive}) => {
              return isActive? 'text-white bg-white/20 rounded-full p-3 w-full':'  w-full  p-3 hover:bg-white/20  hover:text-white  hover:rounded-full hover:duration-200 hover:animate-in '
            }}><li> History</li></NavLink>
            <NavLink to='/dashboard/payments' className={({isActive}) => {
              return isActive? 'text-white bg-white/20 rounded-full p-3 w-full':'  w-full  p-3 hover:bg-white/20  hover:text-white  hover:rounded-full hover:duration-200 hover:animate-in '
            }}><li>Payments</li></NavLink>
            <NavLink to='/dashboard/others' className={({isActive}) => {
              return isActive? 'text-white bg-white/20 rounded-full p-3 w-full':'  w-full  p-3 hover:bg-white/20  hover:text-white  hover:rounded-full hover:duration-200 hover:animate-in '
            }}><li>Other</li></NavLink>
          </ul> 
        </div>
    </div>
    {/*sidebar*/}

    {/* dashboard panel */}
    <div className=' w-full h-screen flex place-items-center'>
    <ScrollArea className='h-9/10 w-full rounded-lg m-8  bg-white/90'>
          <UserProfile />
    </ScrollArea>
    </div>
    {/* dashboard panel */}
    </div>
  )
}

export default UserDashboard