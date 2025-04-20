import React from 'react'
import { ScrollArea } from '../ui/scroll-area'
import HelperProfile from '../helperProfile/HelperProfile'
import Profile from '../profile/Profile'


function FindHelper({users}) {
  console.log(users,"1")
  return (
    <div className='h-screen  motion-opacity-in-0 motion-translate-x-in-10 motion-blur-in-md motion-duration-[2s]'>
        <div className='flex justify-center mt-10'>
            <h1 className='text-5xl font-goth text-slate-800'>Find a helper</h1>
        </div>
        <div className='ml-10 mt-10 text-xl text-slate-800'>
            <p>You can choose a helper from here</p>
        </div>
        <ScrollArea className="h-3/4 w-9/10 rounded-md border  p-4 ml-10 mt-10 ">
        <div className='w-full'>
        {users.map((user) => {
          return (
             <div className='flex mt-10 gap-5 p-5 border m-5'> 
             <div className='w-50 h-50 '>
                <Profile name={user.id}/>
             </div>
             <div className='flex items-center '>
             <HelperProfile name={user.name}  className='justify-center'/>
             </div>
              
             </div>
            
          )
        })}
          
        </div>
        
        </ScrollArea>
    </div>
  )
}

export default FindHelper