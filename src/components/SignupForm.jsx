import React from 'react'
import { useState } from 'react';
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignupForm = ({setIsLoggedIn}) => {

    const navigate=useNavigate();

    const[showPassword,setShowPassword]=useState(false);
     const[showConfirmPassword,setShowConfirmPassword]=useState(false);

    const[formData,setFormData]=useState({firstName:"",lastName:"",email:"",password:"",confirmPassword:""});

       function changeHandler(event){
        setFormData(prevFormData =>{
        return{
            ...prevFormData,
            [event.target.name]:event.target.value
        }
    })
   }

   function submitHandler(event){
          event.preventDefault();
         if(formData.password !== formData.confirmPassword){
            toast.error("Password not matched")
            navigate('/signup')
         }
         else{
            setIsLoggedIn(true);
          toast.success("Logged In")
          navigate("/dashboard")
         }
          
      }
   

  return (
    <div  className='flex flex-col w-[450px] gap-y-4 mt-2  justify-evenly' >

         <form onSubmit={submitHandler}>
              {/* First And Last Name */}
            <div className='flex  justify-between'>
                <label >
                <p className='text-[0.875rem] text-black mb-1 leading-[1.375rem]'>
                    First Name<sup className='text-pink-500'>*</sup>
                    </p>
                <input 
                   required
                   type="text"
                   value={formData.firstName}
                   placeholder='Enter First Name'
                   onChange={changeHandler}
                   name='firstName'
                   className='bg-gray-400 rounded-[0.5rem] text-gray-950 w-full p-[10px]'
            />
            </label>


            <label >
                <p className='text-[0.875rem] text-black mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-500'>*</sup></p>
                <input 
                   required
                   type="text"
                   value={formData.lastName}
                   placeholder='Enter Last Name'
                   onChange={changeHandler}
                   name='lastName'
                   className='bg-gray-400 rounded-[0.5rem] text-gray-950 w-full p-[10px]'
            />
            </label>
            </div>

            <div className='mt-2'>
                <label>
            <p className='text-[0.875rem] text-black mb-1 leading-[1.375rem]'>Email Addresss<sup className='text-pink-500'>*</sup></p>
            <input 
            required
            type="text"
            value={formData.email}
            placeholder='Enter Email Id'
            onChange={changeHandler}
            name='email'
            className='bg-gray-400 rounded-[0.5rem] text-gray-950 w-full p-[10px]'
            />
                </label>
            </div>
            

            {/* create and Confirm Password */}
                
         <div className='flex justify-between mt-2'>
        <label className='relative'>
            <p className='text-[0.875rem] text-black mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-500'>*</sup></p>
            <input 
            required
            type={showPassword?("text"):("password")}
            value={formData.password}
            placeholder='Enter Password'
            onChange={changeHandler}
            name='password'
            className='bg-gray-400 rounded-[0.5rem] text-gray-950 w-full p-[10px]'
            />

            <span 
              className='absolute right-3 top-[38px] cursor-pointer'
            onClick={() => setShowPassword((prev) =>!prev)}>
                {showPassword? (<AiOutlineEyeInvisible fontSize={24}/>):(<AiOutlineEye fontSize={24}/>)}
            </span>
        </label>

        <label className='relative'>
            <p className='text-[0.875rem] text-black mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-500'>*</sup></p>
            <input 
            required
            type={showConfirmPassword?("text"):("password")}
            value={formData.confirmPassword}
            placeholder='Confirm Password'
            onChange={changeHandler}
            name='confirmPassword'
            className='bg-gray-400 rounded-[0.5rem] text-gray-950 w-full p-[10px]'
            />

            <span 
             className='absolute right-3 top-[38px] cursor-pointer'
            onClick={() => setShowConfirmPassword((prev) =>!prev)}>
                {showConfirmPassword? (<AiOutlineEyeInvisible fontSize={24}/>):(<AiOutlineEye fontSize={24}/>)}
            </span>
        </label>
        </div>


        <button className='rounded-[8px] font-medium text-white bg-black border border-gray-500 px-[12px] py-[8px] gap-x-2 mt-4 w-[450px]'>
            Create Account
        </button>
           
         </form>

    </div>
  )
}

export default SignupForm

