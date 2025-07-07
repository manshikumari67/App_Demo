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
     <form  onSubmit={submitHandler}>
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

        <label>
            <p>Password<sup>*</sup></p>
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

            <Link to="#">
            <p>
                Forget Password
            </p>
            </Link>
        </label>


        <button>
            Sign In
        </button>


     </form>
  )
}

export default LoginForm
