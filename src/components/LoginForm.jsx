import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginForm = ({setIsLoggedIn}) => {
    const navigate=useNavigate();

    const[showPassword,setShowPassword]=useState(false);

    const[formData,setFormData]=useState({
        email:"",password:""
    })
     
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
       setIsLoggedIn(true);
       toast.success("Logged In")
       navigate("/dashboard")
   }

  return (
     <form  onSubmit={submitHandler} 
     className='flex flex-col w-full gap-y-4 mt-4 '
     >
        <label className='w-full'>
            <p className='text-[0.875rem] text-black mb-1 leading-[1.375rem]'>
                Email Addresss<sup className='text-pink-500'>*</sup>
            </p>
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

        <label className='w-full relative'>
            <p className='text-[0.875rem] text-black mb-1 leading-[1.375rem]'>
             Password<sup className='text-pink-500'>*</sup>
            </p>
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
                {showPassword? 
                (<AiOutlineEyeInvisible fontSize={24} />)
                :(<AiOutlineEye fontSize={24}/>)}
            </span>

            <Link to="#">
            <p className='text-sm mt-1 text-blue-900 max-w-max ml-auto'>
                Forget Password
            </p>
            </Link>
        </label>


        <button className=' rounded-[8px] font-medium text-white bg-black border border-gray-500 px-[12px] py-[8px] gap-x-2 mt-2'>
            Sign In
        </button>


     </form>
  )
}

export default LoginForm
