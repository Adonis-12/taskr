import React, { useState } from 'react'
import { Mail,KeyRound , UserRound } from 'lucide-react'
import { Input } from "../ui/input"
import { Button } from "../ui/button"


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
            <div className='flex justify-center items-center h-[70vh] font-light'>
                <div className=" text-black rounded-lg border-2 border-white/20 w-sm h-full grid grid-cols-1
                 place-content-center place-items-center h  shadow-md shadow-white/20">
                 <div className='m-4'>
                    <h1 className="text-3xl">REGISTER</h1>
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
                </div>
            </div>
        </>
    )
}

export default SignUp;