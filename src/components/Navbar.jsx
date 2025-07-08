import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
 import { toast } from 'react-toastify';

const Navbar = (props) => {
    let isLoggedIn= props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className='flex justify-between items-center w-11/12  max-w-[1160px] py-4 mx-auto h-12'>
       <Link to="/">
          <img src={logo} alt="Logo" width={160} height={32} loading='lazy' className=''/>
       </Link>

       <nav>
        <ul className='flex gap-x-6 text-2xl'>
            <li>
                <Link to="/">Home</Link>
            </li>

            <li>
                <Link to="/">About</Link>
            </li>

            <li>
                <Link to="/">Contact</Link>
            </li>

        </ul>
       </nav>
        
        <div className='flex ml-5  mr-3 gap-3'> 
            { !isLoggedIn &&
                <Link to="/login">
                    <button className='py-[8px] px-[12px] rounded-[8px] border border-blue-950 bg-gray-700 text-white'>
                        Log in
                    </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/signup">
                    <button className='py-[8px] px-[12px] rounded-[8px] border border-blue-950 bg-gray-700 text-white'>
                        Sign Up
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button 
                    className='py-[8px] px-[12px] rounded-[8px] border border-blue-950 bg-gray-700 text-white'
                    onClick={() =>{
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                    }}>
                        Log Out
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button
                    className='py-[8px] px-[12px] rounded-[8px] border border-blue-950 bg-gray-700 text-white'>
                        Dashboard
                    </button>
                </Link>
            }
        </div>

    </div>
  )
}

export default Navbar
