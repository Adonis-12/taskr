import React,{useState} from 'react'
import Navigation from '../navigation/Navigation'
import { Mail,KeyRound } from 'lucide-react'
import { Input } from "../ui/input"
import { Button } from "../ui/button"



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
            <div className='flex justify-center items-center h-[60vh] font-light'>
                <div className=" text-black rounded-lg border-2 border-white/20 w-sm h-full grid grid-cols-1
                 place-content-center place-items-center h  shadow-md shadow-white/20">
                 <div className='m-5'>
                    <h1 className="text-3xl">SIGN IN</h1>
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
                </div>
            </div>
        </>
    )
}

export default Login