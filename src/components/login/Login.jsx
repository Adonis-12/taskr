import React,{useState} from 'react'
import Navigation from '../navigation/Navigation'
import { Mail,KeyRound } from 'lucide-react'
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import {Link , NavLink ,useParams } from 'react-router-dom'
import NotFound from '../notfound/NotFound'
import LoginNav from '../loginnav/LoginNav'



const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const onSignInEmail = (e) => {
        setEmail(e.target.value);
    }

    const onSignInPassword = (e) => {
        setPassword(e.target.value);
    } 
 

    const {userType} = useParams()
    
        const header = userType==='user'?'Login as user':'Login as helper'

    return(
        <>
                <div>
                    <Link to='/'><LoginNav /></Link>
                </div>
`               <div className='flex justify-center items-center  h-9/10  font-light m-5 font-robo flex-col'>
                <div className=" text-black  w-full h-full grid grid-cols-1
                 place-content-center place-items-center h   m-5">
                 <div className='m-5'>
                    <h1 className="text-3xl font-bold">{header}</h1>
                 </div>
                 <div className='flex gap-5 '>

                    <NavLink to='/login/user'
                    className={({isActive}) => {
                       return  isActive?'border-2 shadow-md shadow-gray hover:scale-102 hover:duration-100 rounded-full bg-black text-white flex items-center p-3 cursor-pointer' 
                       : 'border-2 rounded-full p-2 flex items-center cursor-pointer hover:scale-102 text-slate-600'
                    }}>
                    <button className='cursor-pointer'>Login as user</button>
                    </NavLink>

                    <NavLink 
                    to='/login/helper' 
                    className={(({isActive}) => {
                        return isActive?'border-2 shadow-md shadow-gray hover:scale-102 hover:duration-300 rounded-full bg-black text-white flex items-center p-3 cursor-pointer' 
                       : 'border-2 rounded-full p-2 flex items-center cursor-pointer hover:scale-102 text-slate-600'
                    })}>
                   <button className='cursor-pointer'>Login as helper</button>
                    </NavLink>
                 </div>
                <div className="m-5 grid grid-cols-12 place-content-center place-items-center gap-2">
                    <label className=' col-span-12 font-bold'>Email</label>
                    <Mail />
                    <Input 
                    type="email" 
                    placeholder="Email" 
                    onChange={onSignInEmail} 
                    className="m-2 col-span-10" />

                </div>
                <div className="m-5 grid grid-cols-12 place-content-center place-items-center gap-2">
                    <label className=' col-span-12 font-bold'>Password</label>
                    <KeyRound />
                    <Input type="password" id="password" placeholder="Password" onChange={onSignInPassword}  className='m-2 col-span-10'/>
                </div>    
                <Button className=" hover:cursor-pointer " >Submit</Button>

                <div className='flex justify-center items-center gap-2 mt-5 text-sm text-slate-600'>
                    <p>Don't have an account?</p>
                        <Link to='/signup/user'><p className='text-blue-900 underline underline-offset-4'>Sign Up</p></Link>
                </div>
                </div>
            
        </div>
    
            
        </>
    )
}

    
   
export default Login