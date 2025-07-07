import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import Navbar from './components/Navbar'

function App() {

  const[isLoggedIn,setIsLoggedIn]=useState(false);

  return (
   <div >

    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        
    <Routes>
        
       <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
       <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
       <Route path='/dashboard' element={<Dashboard/>}/>

    </Routes>
     
   </div>
  )
}

export default App
