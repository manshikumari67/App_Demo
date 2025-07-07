import React from 'react'
import { useState } from 'react';
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignupForm = ({setIsLoggedIn}) => {

    const navigate=useNavigate();

    const[showPassword,setShowPassword]=useState(false);

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
         }

          setIsLoggedIn(true);
          toast.success("Logged In")
          navigate("/dashboard")
      }
   

  return (
    <div>
        {/* student-Instructor tab */}
        <div>
            <button>Student</button>
            <button>Instructor</button>
        </div>

         <form onSubmit={submitHandler}>
              {/* First And Last Name */}
            <div>
                 <label >
                <p>First Name<sup>*</sup></p>
                <input 
                   required
                   type="text"
                   value={formData.firstName}
                   placeholder='Enter First Name'
                   onChange={changeHandler}
                   name='firstName'
            />
            </label>


            <label >
                <p>Last Name<sup>*</sup></p>
                <input 
                   required
                   type="text"
                   value={formData.lastName}
                   placeholder='Enter Last Name'
                   onChange={changeHandler}
                   name='lastName'
            />
            </label>
            </div>

                 {/* Email Address */}
            <label>
            <p>Email Addresss<sup>*</sup></p>
            <input 
            required
            type="text"
            value={formData.email}
            placeholder='Enter Email Id'
            onChange={changeHandler}
            name='email'
            />
            </label>

            {/* create and Confirm Password */}
                
         <div>
        <label>
            <p>Create Password<sup>*</sup></p>
            <input 
            required
            type={showPassword?("text"):("password")}
            value={formData.password}
            placeholder='Enter Password'
            onChange={changeHandler}
            name='password'
            />

            <span onClick={() => setShowPassword((prev) =>!prev)}>
                {showPassword? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
            </span>
        </label>

        <label>
            <p>Confirm Password<sup>*</sup></p>
            <input 
            required
            type={showPassword?("text"):("password")}
            value={formData.confirmPassword}
            placeholder='Confirm Password'
            onChange={changeHandler}
            name='confirmPassword'
            />

            <span onClick={() => setShowPassword((prev) =>!prev)}>
                {showPassword? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
            </span>
        </label>
        </div>


        <button>
            Create Account
        </button>
           
         </form>

    </div>
  )
}

export default SignupForm

