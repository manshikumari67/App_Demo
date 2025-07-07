import React from 'react'
import SignUpImage from '../assets/SignUp.jpg'
import Template from '../components/Template'

const SignUp = ({setIsLoggedIn}) => {
  return (
    <Template
     title="Join the millions learning to code with StudyNotion for free"
     desc1="Build skills for today, tomorrow, and beyond."
     desc2="Education to Future-proof your career."
     image={SignUpImage}
     formtype="signup"
     setIsLoggedIn={setIsLoggedIn}
   />
  )
}

export default SignUp
