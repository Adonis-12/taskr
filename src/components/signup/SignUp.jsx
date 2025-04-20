import React, { useState } from 'react'
import { Mail,KeyRound , UserRound } from 'lucide-react'
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import {Link} from 'react-router-dom'


const SignUp = ({onRouteChange,onloadUser}) => {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

        // const [error,seterror] = useState('');
    
        // const onRegisterName = (e) => {
        //     setName(e.target.value);
        // }
    
        // const onRegisterEmail = (e) => {
        //     setEmail(e.target.value);
        // }
    
        // const onRegisterPassword = (e) => {
        //     setPassword(e.target.value);
        // } 

       

    return(
        <>
            <div className='flex justify-center items-center h-[70vh] font-light m-5'>
                <div className=" text-black rounded-lg border w-sm h-full grid grid-cols-1
                 place-content-center place-items-center h  shadow-md shadow-gray ">
                 <div className='m-4'>
                    <h1 className="text-3xl ">Sign Up</h1>
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
                    <div className='flex justify-center items-center gap-2 mt-5 text-sm text-slate-600'>
                    <p>Already have an account?</p>
                        <Link to='/login'><p className='text-blue-900 underline underline-offset-4'>Login</p></Link>
                </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;