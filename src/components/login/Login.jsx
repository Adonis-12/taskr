import React,{useState} from 'react'
import Navigation from '../navigation/Navigation'
import { Mail,KeyRound } from 'lucide-react'
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import {Link } from 'react-router-dom'



const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const onSignInEmail = (e) => {
        setEmail(e.target.value);
    }

    const onSignInPassword = (e) => {
        setPassword(e.target.value);
    } 
    

    return(
        <>
            <div className='flex justify-center items-center h-[60vh] font-light m-5 '>
                <div className=" text-black rounded-lg border w-sm h-full grid grid-cols-1
                 place-content-center place-items-center h  shadow-md shadow-gray ">
                 <div className='m-5'>
                    <h1 className="text-3xl">LOGIN</h1>
                 </div>
                <div className="m-5 grid grid-cols-12 place-content-center place-items-center gap-2">
                    <label className=' col-span-12 '>Email</label>
                    <Mail />
                    <Input 
                    type="email" 
                    placeholder="Email" 
                    onChange={onSignInEmail} 
                    className="m-2 col-span-10" />

                </div>
                <div className="m-5 grid grid-cols-12 place-content-center place-items-center gap-2">
                    <label className=' col-span-12 '>Password</label>
                    <KeyRound />
                    <Input type="password" id="password" placeholder="Password" onChange={onSignInPassword}  className='m-2 col-span-10'/>
                </div>    
                    <Button className=" hover:cursor-pointer" >Submit</Button>

                <div className='flex justify-center items-center gap-2 mt-5 text-sm text-slate-600'>
                    <p>Don't have an account?</p>
                        <Link to='/signup'><p className='text-blue-900 underline underline-offset-4'>Sign Up</p></Link>
                </div>
                </div>
                
            </div>
        </>
    )
}

export default Login