import React from 'react'
import { useForm } from 'react-hook-form'
import { 
  Mail, KeyRound, UserRound, MapPinHouse, Building2, 
  Notebook, Tally4, Flag, Calendar, Clock, Briefcase 
} from 'lucide-react'
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Link, NavLink, useParams } from 'react-router-dom'
import LoginNav from '../loginnav/LoginNav'
import { PhoneInput } from "react-international-phone"
import "react-international-phone/style.css"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

const SignUp = () => {
    const { userType } = useParams()
    const isHelper = userType === 'helper'
    const header = isHelper ? 'Helper' : 'User'

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        watch
    } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            gender: '',
            address: '',
            city: '',
            state: '',
            zipCode: '',
            country: '',
            password: '',
            confirmPassword: '',
            // Helper-specific fields
            profession: '',
            experience: '',
            hourlyRate: '',
            availableDays: [],
            availableHours: ''
        }
    })

    const onSubmit = (data) => {
        console.log(data)
        // API call to register the user
    }

    const daysOfWeek = [
        'Monday', 'Tuesday', 'Wednesday', 
        'Thursday', 'Friday', 'Saturday', 'Sunday'
    ]

    return (
        <>
            <div>
                <Link to='/'><LoginNav /></Link>
            </div>
            <div className='flex justify-center items-center h-auto font-light m-5 font-robo'>
                <form onSubmit={handleSubmit(onSubmit)} className="text-black rounded-lg h-full grid grid-cols-1 place-content-center place-items-center w-full max-w-md">
                    <div className='m-4'>
                        <h1 className="text-3xl">Sign Up as {header}</h1>
                    </div>

                    <div className='flex gap-5 mb-6'>
                        <NavLink
                            to='/signup/user'
                            className={({ isActive }) => {
                                return isActive ? 'border-2 shadow-md shadow-gray hover:scale-102 hover:duration-100 rounded-full bg-black text-white flex items-center p-3 cursor-pointer'
                                    : 'border-2 rounded-full p-2 flex items-center cursor-pointer hover:scale-102 text-slate-600'
                            }}>
                            <button type="button" className='cursor-pointer'>Signup as user</button>
                        </NavLink>

                        <NavLink
                            to='/signup/helper'
                            className={(({ isActive }) => {
                                return isActive ? 'border-2 shadow-md shadow-gray hover:scale-102 hover:duration-300 rounded-full bg-black text-white flex items-center p-3 cursor-pointer'
                                    : 'border-2 rounded-full p-2 flex items-center cursor-pointer hover:scale-102 text-slate-600'
                            })}>
                            <button type="button" className='cursor-pointer'>Signup as helper</button>
                        </NavLink>
                    </div>

                    {/* Basic Information Section */}
                    <div className='w-full space-y-4'>
                        <h2 className="text-xl font-semibold border-b pb-2">Basic Information</h2>
                        
                        <div className='flex justify-center gap-7 w-full'>
                            <div className='flex flex-col items-center gap-3 w-full'>
                                <div className='flex items-center gap-3 w-full'>
                                    <UserRound />
                                    <Input
                                        placeholder="First Name"
                                        className="border border-gray-400 mt-2 w-full"
                                        {...register("firstName", {
                                            required: "First name is required",
                                            minLength: {
                                                value: 2,
                                                message: "First name must be at least 2 characters"
                                            }
                                        })}
                                    />
                                </div>
                                {errors.firstName && (
                                    <p className="text-red-500 text-sm w-full text-left pl-8">{errors.firstName.message}</p>
                                )}
                            </div>
                            <div className='flex flex-col items-center gap-3 w-full'>
                                <div className='flex items-center gap-3 w-full'>
                                    <UserRound />
                                    <Input
                                        placeholder="Last Name"
                                        className="border border-gray-400 mt-2 w-full"
                                        {...register("lastName", {
                                            required: "Last name is required",
                                            minLength: {
                                                value: 2,
                                                message: "Last name must be at least 2 characters"
                                            }
                                        })}
                                    />
                                </div>
                                {errors.lastName && (
                                    <p className="text-red-500 text-sm w-full text-left pl-8">{errors.lastName.message}</p>
                                )}
                            </div>
                        </div>

                        <div className='w-full'>
                            <div className='flex items-center gap-3'>
                                <Mail />
                                <Input
                                    type='email'
                                    placeholder='Email'
                                    className="border border-gray-400 mt-2 w-full"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address"
                                        }
                                    })}
                                />
                            </div>
                            {errors.email && (
                                <p className="text-red-500 text-sm w-full text-left pl-8">{errors.email.message}</p>
                            )}
                        </div>

                        <div className='w-full'>
                            <PhoneInput
                                defaultCountry='in'
                                {...register("phone", {
                                    required: "Phone number is required",
                                    validate: (value) => {
                                        const phoneNumber = value.replace(/\D/g, '')
                                        return phoneNumber.length >= 10 || "Phone number must be at least 10 digits"
                                    }
                                })}
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-sm w-full text-left">{errors.phone.message}</p>
                            )}
                        </div>

                        <div className='w-full'>
                            <div className='flex items-center gap-3'>
                                <UserRound />
                                <Select
                                    onValueChange={(value) => {}}
                                    {...register("gender", { required: "Gender is required" })}
                                >
                                    <SelectTrigger className="w-full border border-gray-400 mt-2">
                                        <SelectValue placeholder="Select Gender" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="male">Male</SelectItem>
                                        <SelectItem value="female">Female</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                        <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            {errors.gender && (
                                <p className="text-red-500 text-sm w-full text-left pl-8">{errors.gender.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Address Section */}
                    <div className='w-full mt-6 space-y-4'>
                        <h2 className="text-xl font-semibold border-b pb-2">Address Information</h2>
                        
                        <div className='w-full'>
                            <div className='flex items-center gap-3'>
                                <MapPinHouse />
                                <Input
                                    type='text'
                                    placeholder='Address'
                                    className="border border-gray-400 mt-2 w-full"
                                    {...register("address", {
                                        required: "Address is required",
                                        minLength: {
                                            value: 5,
                                            message: "Address must be at least 5 characters"
                                        }
                                    })}
                                />
                            </div>
                            {errors.address && (
                                <p className="text-red-500 text-sm w-full text-left pl-8">{errors.address.message}</p>
                            )}
                        </div>

                        <div className='flex justify-center gap-7 w-full'>
                            <div className='flex flex-col items-center gap-3 w-full'>
                                <div className='flex items-center gap-3 w-full'>
                                    <Building2 />
                                    <Input
                                        placeholder="City"
                                        className="border border-gray-400 mt-2 w-full"
                                        {...register("city", {
                                            required: "City is required"
                                        })}
                                    />
                                </div>
                                {errors.city && (
                                    <p className="text-red-500 text-sm w-full text-left pl-8">{errors.city.message}</p>
                                )}
                            </div>
                            <div className='flex flex-col items-center gap-3 w-full'>
                                <div className='flex items-center gap-3 w-full'>
                                    <Notebook />
                                    <Input
                                        placeholder="State"
                                        className="border border-gray-400 mt-2 w-full"
                                        {...register("state", {
                                            required: "State is required"
                                        })}
                                    />
                                </div>
                                {errors.state && (
                                    <p className="text-red-500 text-sm w-full text-left pl-8">{errors.state.message}</p>
                                )}
                            </div>
                        </div>

                        <div className='flex justify-center gap-7 w-full'>
                            <div className='flex flex-col items-center gap-3 w-full'>
                                <div className='flex items-center gap-3 w-full'>
                                    <Tally4 />
                                    <Input
                                        placeholder="Zip code"
                                        className="border border-gray-400 mt-2 w-full"
                                        {...register("zipCode", {
                                            required: "Zip code is required",
                                            pattern: {
                                                value: /^\d+$/,
                                                message: "Zip code must be numeric"
                                            }
                                        })}
                                    />
                                </div>
                                {errors.zipCode && (
                                    <p className="text-red-500 text-sm w-full text-left pl-8">{errors.zipCode.message}</p>
                                )}
                            </div>
                            <div className='flex flex-col items-center gap-3 w-full'>
                                <div className='flex items-center gap-3 w-full'>
                                    <Flag />
                                    <Input
                                        placeholder="Country"
                                        className="border border-gray-400 mt-2 w-full"
                                        {...register("country", {
                                            required: "Country is required"
                                        })}
                                    />
                                </div>
                                {errors.country && (
                                    <p className="text-red-500 text-sm w-full text-left pl-8">{errors.country.message}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Helper-Specific Fields */}
                    {isHelper && (
                        <div className='w-full mt-6 space-y-4'>
                            <h2 className="text-xl font-semibold border-b pb-2">Professional Information</h2>
                            
                            <div className='w-full'>
                                <div className='flex items-center gap-3'>
                                    <Briefcase />
                                    <Input
                                        placeholder="Profession (e.g., Plumber, Electrician)"
                                        className="border border-gray-400 mt-2 w-full"
                                        {...register("profession", {
                                            required: "Profession is required"
                                        })}
                                    />
                                </div>
                                {errors.profession && (
                                    <p className="text-red-500 text-sm w-full text-left pl-8">{errors.profession.message}</p>
                                )}
                            </div>

                            <div className='w-full'>
                                <div className='flex items-center gap-3'>
                                    <Briefcase />
                                    <Input
                                        type="number"
                                        placeholder="Years of Experience"
                                        className="border border-gray-400 mt-2 w-full"
                                        {...register("experience", {
                                            required: "Experience is required",
                                            min: {
                                                value: 0,
                                                message: "Experience cannot be negative"
                                            }
                                        })}
                                    />
                                </div>
                                {errors.experience && (
                                    <p className="text-red-500 text-sm w-full text-left pl-8">{errors.experience.message}</p>
                                )}
                            </div>

                            <div className='w-full'>
                                <div className='flex items-center gap-3'>
                                    <Briefcase />
                                    <Input
                                        type="number"
                                        placeholder="Hourly Rate (₹)"
                                        className="border border-gray-400 mt-2 w-full"
                                        {...register("hourlyRate", {
                                            required: "Hourly rate is required",
                                            min: {
                                                value: 0,
                                                message: "Rate cannot be negative"
                                            }
                                        })}
                                    />
                                </div>
                                {errors.hourlyRate && (
                                    <p className="text-red-500 text-sm w-full text-left pl-8">{errors.hourlyRate.message}</p>
                                )}
                            </div>

                            <div className='w-full'>
                                <div className='flex items-center gap-3'>
                                    <Calendar />
                                    <Select
                                        {...register("availableDays", {
                                            required: "Please select at least one available day"
                                        })}
                                        multiple
                                    >
                                        <SelectTrigger className="w-full border border-gray-400 mt-2">
                                            <SelectValue placeholder="Select Available Days" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {daysOfWeek.map(day => (
                                                <SelectItem key={day} value={day.toLowerCase()}>
                                                    {day}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                {errors.availableDays && (
                                    <p className="text-red-500 text-sm w-full text-left pl-8">{errors.availableDays.message}</p>
                                )}
                            </div>

                            <div className='w-full'>
                                <div className='flex items-center gap-3'>
                                    <Clock />
                                    <Input
                                        placeholder="Available Hours (e.g., 9AM-5PM)"
                                        className="border border-gray-400 mt-2 w-full"
                                        {...register("availableHours", {
                                            required: "Available hours are required"
                                        })}
                                    />
                                </div>
                                {errors.availableHours && (
                                    <p className="text-red-500 text-sm w-full text-left pl-8">{errors.availableHours.message}</p>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Account Security Section */}
                    <div className='w-full mt-6 space-y-4'>
                        <h2 className="text-xl font-semibold border-b pb-2">Account Security</h2>
                        
                        <div className='w-full'>
                            <div className='flex items-center gap-3'>
                                <KeyRound />
                                <Input
                                    type='password'
                                    placeholder='Password'
                                    className="border border-gray-400 mt-2 w-full"
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 8,
                                            message: "Password must be at least 8 characters"
                                        },
                                        pattern: {
                                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                            message: "Password must contain at least one uppercase, one lowercase, one number and one special character"
                                        }
                                    })}
                                />
                            </div>
                            {errors.password && (
                                <p className="text-red-500 text-sm w-full text-left pl-8">{errors.password.message}</p>
                            )}
                        </div>

                        <div className='w-full'>
                            <div className='flex items-center gap-3'>
                                <KeyRound />
                                <Input
                                    type='password'
                                    placeholder='Confirm Password'
                                    className="border border-gray-400 mt-2 w-full"
                                    {...register("confirmPassword", {
                                        required: "Please confirm your password",
                                        validate: (value) =>
                                            value === watch('password') || "Passwords do not match"
                                    })}
                                />
                            </div>
                            {errors.confirmPassword && (
                                <p className="text-red-500 text-sm w-full text-left pl-8">{errors.confirmPassword.message}</p>
                            )}
                        </div>
                    </div>

                    <Link to='/dashboard/profile'><Button type="submit" className="hover:cursor-pointer w-full mt-6">Submit</Button></Link>
                    
                    <div className='flex justify-center items-center gap-2 mt-5 text-sm text-slate-600'>
                        <p>Already have an account?</p>
                        <Link to='/login/user'>
                            <p className='text-blue-900 underline underline-offset-4'>Login</p>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignUp