import React from 'react'
import frameImage from "../assets/frame.png"
import SignupForm from "./SignupForm"
import LoginForm from './LoginForm'
import {FcGoogle} from 'react-icons/fc'

const Template = ({title,desc1,desc2,image, formtype,setIsLoggedIn}) => {
  return (
    <div className='flex justify-evenly w-11/12 max-w-[1160px] py-8 mx-auto gap-x-12 gap-y-0 '>
         <div>
            <h1 className='text-gray-900 font-semibold text-[1.575rem] leading-[2.375rem] '>{title}</h1>
            <p className='text-[1.125rem] leading-[1.625rem] mt-2'>
                <span className='text-gray-700' >{desc1}</span>
                <br />
                <span className='text-blue-900 italic'>{desc2}</span>
            </p>

            {formtype==="signup"?
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
            (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

            <div className='flex w-full items-center my-3 gap-x-2'>
                <div className='w-full h-[1px] bg-gray-950'></div>
                <p className='text-gray-950 font-medium leading-[1.375rem]'>OR</p>
                <div className='w-full h-[1px] bg-gray-950'></div>
            </div>

            <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-white bg-black border border-gray-500 px-[12px] py-[8px] gap-x-2 mt-4'>
              <FcGoogle/>
                <p>Sign Up with Google</p>
            </button>
         </div>


        <div className='relative w-11/12 max-w-[450px]'>
            <img src={frameImage} alt="Pattern" loading='lazy' className='h-[420px] w-[390px]'/>
             <img src={image} alt="Students" loading='lazy' width={300} height={450} className='absolute top-4 right-30'/>
        </div>



    </div>
  )
}

export default Template
