import React, { useState } from 'react'

import { Mail,KeyRound , UserRound, MapPinHouse,Building2, Notebook,Tally4,Flag  } from 'lucide-react'
import { FaRegAddressCard } from "react-icons/fa";
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import {Link ,NavLink ,useParams} from 'react-router-dom'
import LoginNav from '../loginnav/LoginNav'
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";



const SignUp = () => {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const {userType} = useParams()
    
    const header = userType==='user'?'user':'helper'

       

    return(
        <>
        <form>
         <div>
                <Link to='/'><LoginNav /></Link>
            </div>
            <div className='flex justify-center items-center h-auto font-light m-5 font-robo'>
                <div className=" text-black rounded-lg  h-full grid grid-cols-1
                 place-content-center place-items-center h  ">
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

               <div className='flex justify-center mt-5 gap-7'>
                        <div className='flex items-center gap-3'>
                           <UserRound /><Input placeholder="First Name"  className="border border-gray-400 mt-2"/>
                        </div>
                        <div className='flex items-center gap-3'>
                        <UserRound /><Input placeholder="Last Name"  className="border border-gray-400 mt-2"/>
                        </div>
                   </div>
               
                   <div className='w-full mt-5 flex items-center gap-3'>
                     <Mail /><Input type='email' placeholder='Email' required className="border border-gray-400 mt-2"/>
                   </div>
               
                   <div className='w-full mt-5'>
                     
                     <PhoneInput 
                        defaultCountry='india'
                     />
                   </div>
               
                   <div className='w-full mt-5 flex items-center gap-3'>
                     
                   <MapPinHouse /><Input type='text' placeholder='Address'  required className="border border-gray-400 mt-2"/>
                   </div>
               
                   <div className='flex justify-center mt-5 gap-7'>
                        <div className='flex items-center gap-3'>
                
                           <Building2 /><Input placeholder="City"  className="border border-gray-400 mt-2"/>
                        </div>
                        <div className='flex items-center gap-3'>
                    
                           <Notebook /><Input placeholder="State"  className="border border-gray-400 mt-2"/>
                        </div>
                   </div>
               
                   <div className='flex justify-center mt-5 gap-7'>
                        <div className='flex items-center gap-3'>
                           
                           <Tally4></Tally4><Input placeholder="Zip code"  className="border border-gray-400 mt-2"/>
                        </div>
                        <div className='flex items-center gap-3'>
                           
                           <Flag /><Input placeholder="Country"  className="border border-gray-400 mt-2"/>
                        </div>
                   </div>
                    
                    <Button className=" hover:cursor-pointer mt-5" >Submit</Button>
                    <div className='flex justify-center items-center gap-2 mt-5 text-sm text-slate-600 '>
                    <p>Already have an account?</p>
                        <Link to='/login/user'><p className='text-blue-900 underline underline-offset-4'>Login</p></Link>
                </div>
                </div>
            </div>
        </form>
            
        </>
    )
}

export default SignUp;