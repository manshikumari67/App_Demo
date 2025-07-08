import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import Navbar from './components/Navbar'
import PrivateRoute from './components/PrivateRoute'

function App() {

  const[isLoggedIn,setIsLoggedIn]=useState(false);

  return (
   <div className='w-screen h-screen bg-radial-[at_25%_25%] from-white to-zinc-700 to-75% flex flex-col' >
      
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        
    <Routes>
        
       <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
       <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
       <Route path='/dashboard' element={
        <PrivateRoute  isLoggedIn={isLoggedIn}>
            <Dashboard/>
        </PrivateRoute>
       }/>

    </Routes>
     
   </div>
  )
}

export default App
