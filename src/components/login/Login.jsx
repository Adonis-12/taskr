import React from 'react'
import { useForm } from 'react-hook-form'
import { Mail, KeyRound } from 'lucide-react'
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Link, NavLink, useParams } from 'react-router-dom'
import LoginNav from '../loginnav/LoginNav'

const Login = () => {
    const { userType } = useParams()
    const header = userType === 'user' ? 'Login as user' : 'Login as helper'

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const onSubmit = (data) => {
        console.log(data)
        // Here you would typically make an API call to authenticate the user
    }

    return (
        <>
            <div>
                <Link to='/'><LoginNav /></Link>
            </div>
            <div className='flex justify-center items-center h-9/10 font-light m-5 font-robo flex-col'>
                <div className="text-black w-full h-full grid grid-cols-1 place-content-center place-items-center m-5">
                    <div className='m-5'>
                        <h1 className="text-3xl font-bold">{header}</h1>
                    </div>
                    <div className='flex gap-5'>
                        <NavLink
                            to='/login/user'
                            className={({ isActive }) => {
                                return isActive ? 'border-2 shadow-md shadow-gray hover:scale-102 hover:duration-100 rounded-full bg-black text-white flex items-center p-3 cursor-pointer'
                                    : 'border-2 rounded-full p-2 flex items-center cursor-pointer hover:scale-102 text-slate-600'
                            }}>
                            <button className='cursor-pointer'>Login as user</button>
                        </NavLink>

                        <NavLink
                            to='/login/helper'
                            className={(({ isActive }) => {
                                return isActive ? 'border-2 shadow-md shadow-gray hover:scale-102 hover:duration-300 rounded-full bg-black text-white flex items-center p-3 cursor-pointer'
                                    : 'border-2 rounded-full p-2 flex items-center cursor-pointer hover:scale-102 text-slate-600'
                            })}>
                            <button className='cursor-pointer'>Login as helper</button>
                        </NavLink>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
                        <div className="m-5 grid grid-cols-12 place-content-center place-items-center gap-2">
                            <label className='col-span-12 font-bold'>Email</label>
                            <Mail />
                            <Input
                                type="email"
                                placeholder="Email"
                                className="m-2 col-span-10"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address"
                                    }
                                })}
                            />
                            {errors.email && (
                                <p className="col-span-12 text-red-500 text-sm">{errors.email.message}</p>
                            )}
                        </div>

                        <div className="m-5 grid grid-cols-12 place-content-center place-items-center gap-2">
                            <label className='col-span-12 font-bold'>Password</label>
                            <KeyRound />
                            <Input
                                type="password"
                                id="password"
                                placeholder="Password"
                                className='m-2 col-span-10'
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters"
                                    }
                                })}
                            />
                            {errors.password && (
                                <p className="col-span-12 text-red-500 text-sm">{errors.password.message}</p>
                            )}
                        </div>
                            <div className='flex justify-center items-center'>
                                <Link to='/dashboard/profile'><Button type="submit" className="hover:cursor-pointer w-full">Submit</Button></Link>
                            </div>
                        
                    </form>

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