import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
 import { toast } from 'react-toastify';

const Navbar = (props) => {
    let isLoggedIn= props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className='flex justify-evenly bg-amber-500 h-[60px]'>
       <Link to="/">
          <img src={logo} alt="Logo" loading='lazy' className='h-15 w-30'/>
       </Link>

       <nav>
        <ul className='flex gap-3 mt-4'>
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
        
        <div className='flex ml-5 mt-4 mr-3 gap-3'> 
            { !isLoggedIn &&
                <Link to="/login">
                    <button>
                        Log in
                    </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/signup">
                    <button>
                        Sign Up
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button onClick={() =>{
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                    }}>
                        Log Out
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button>
                        Dashboard
                    </button>
                </Link>
            }
        </div>

    </div>
  )
}

export default Navbar
