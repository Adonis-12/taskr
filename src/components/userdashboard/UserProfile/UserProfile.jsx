import React from 'react'
import { Input } from '../../ui/input'
import {Button} from '../../ui/button'
import {
   AlertDialog,
   AlertDialogAction,
   AlertDialogCancel,
   AlertDialogContent,
   AlertDialogDescription,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogTitle,
   AlertDialogTrigger,
 } from "../../ui/alert-dialog"
import { MdEdit } from "react-icons/md";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";





function UserProfile() {
   
  return (
    <div className='grid grid-cols-1 place-content-center justify-items-center h-full w-full text-gray-600 font-light '>
    <div className='w-full grid grid-cols-1 justify-items-start p-4 font-mont text-black '>
        <h1 className='text-5xl '>My profile</h1>
    </div>

    <div className='grid justify-items-center font-open_sans grid-cols-1 gap-6 mt-6 border p-10 rounded-md'>
    
       <div className='aspect-square max-w-1/3  rounded-full overflow-hidden border-2 border-gray-500'>
            <img src='https://images.unsplash.com/photo-1676477208892-3a59818985bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D ' className=' object-cover'></img>
            <MdEdit />
         </div>
   
    <div className='flex justify-center mt-5 gap-7'>
         <div>
            <label>First Name</label>
            <Input placeholder="First Name"  className="border border-gray-400 mt-2"/>
         </div>
         <div>
            <label>Last Name</label>
            <Input placeholder="Last Name"  className="border border-gray-400 mt-2"/>
         </div>
    </div>

    <div className='w-full mt-5'>
      <label>Email</label>
      <Input type='email' placeholder='Email' required className="border border-gray-400 mt-2"/>
    </div>

    <div className='w-full mt-5'>
      <label>Contact</label>
      <PhoneInput 
         defaultCountry='india'
      />
    </div>

    <div className='w-full mt-5'>
      <label>Address</label>
      <Input type='text' placeholder='Address'  required className="border border-gray-400 mt-2"/>
    </div>

    <div className='flex justify-center mt-5 gap-7'>
         <div>
            <label>City</label>
            <Input placeholder="City"  className="border border-gray-400 mt-2"/>
         </div>
         <div>
            <label>State</label>
            <Input placeholder="State"  className="border border-gray-400 mt-2"/>
         </div>
    </div>

    <div className='flex justify-center mt-5 gap-7'>
         <div>
            <label>Zip code</label>
            <Input placeholder="Zip code"  className="border border-gray-400 mt-2"/>
         </div>
         <div>
            <label>Country</label>
            <Input placeholder="Country"  className="border border-gray-400 mt-2"/>
         </div>
    </div>

    <div className='mt-5'>
    <AlertDialog>
  <AlertDialogTrigger><Button type='submit'>Submit</Button></AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
         Are you sure you want to save the changes?
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Save</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
         {/* <Button type='submit'> Submit</Button> */}
    </div>
        
    </div>

    </div>
  )
}

export default UserProfile
