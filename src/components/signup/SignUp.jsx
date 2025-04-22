import React, { useState } from 'react'
import { Mail,KeyRound , UserRound } from 'lucide-react'
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import {Link ,NavLink ,useParams} from 'react-router-dom'


const SignUp = ({onRouteChange,onloadUser}) => {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const {userType} = useParams()
    
    const header = userType==='user'?'user':'helper'

       

    return(
        <>
            <div className='flex justify-center items-center h-auto font-light m-5 font-robo
            bg-gradient-to-r from-[#E5FCFF] via-[#E5FCFF] to-[#FDFFFC] via-[19%] to-[75%]'>
                <div className=" text-black rounded-lg border w-sm h-full grid grid-cols-1
                 place-content-center place-items-center h  shadow-md shadow-gray m-5">
                 <div className='m-4'>
                    <h1 className="text-3xl ">Sign Up as {userType}</h1>
                 </div>

                 <div className='flex gap-5 '>

                    <NavLink to='/signup/user'
                    className={({isActive}) => {
                       return  isActive?'border-2 shadow-md shadow-gray hover:scale-102 hover:duration-100 rounded-full bg-black text-white flex items-center p-3 cursor-pointer' 
                       : 'border-2 rounded-full p-2 flex items-center cursor-pointer hover:scale-102 text-slate-600'
                    }}>
                    <button className='cursor-pointer'>Signup as user</button>
                    </NavLink>

                    <NavLink 
                    to='/signup/helper' 
                    className={(({isActive}) => {
                        return isActive?'border-2 shadow-md shadow-gray hover:scale-102 hover:duration-300 rounded-full bg-black text-white flex items-center p-3 cursor-pointer' 
                       : 'border-2 rounded-full p-2 flex items-center cursor-pointer hover:scale-102 text-slate-600'
                    })}>
                   <button className='cursor-pointer'>Signup as helper</button>
                    </NavLink>
                 </div>

                <div className="m-4 grid grid-cols-12 place-content-center place-items-center gap-2">
                    <label className=' col-span-12 '>Name</label>
                        <UserRound />
                    <Input type="text" id="name" placeholder="Email" className="m-2 col-span-10" />
                </div>
                <div className="m-4 grid grid-cols-12 place-content-center place-items-center gap-2">
                    <label className=' col-span-12 '>Email</label>
                        <Mail />
                    <Input type="email" id="email" placeholder="Email" className="m-2 col-span-10"  />
                </div>
                
                <div className="m-4 grid grid-cols-12 place-content-center place-items-center gap-2">
                    <label className=' col-span-12 '>Password</label>
                        <KeyRound />
                    <Input type="password" id="password" placeholder="Password"  className='m-2 col-span-10'  />
                </div>    
                    
                    <Button className=" hover:cursor-pointer"  >Submit</Button>
                    <div className='flex justify-center items-center gap-2 mt-5 text-sm text-slate-600 '>
                    <p>Already have an account?</p>
                        <Link to='/login/user'><p className='text-blue-900 underline underline-offset-4'>Login</p></Link>
                </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;