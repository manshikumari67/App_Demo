import React from 'react'
import SignUpImage from '../assets/SignUp.png'
import Template from '../components/Template'

const SignUp = ({setIsLoggedIn}) => {
  return (
    <Template
     title="Join to code with StudyNotion for free"
     desc1="Build skills for today, tomorrow, and beyond."
     desc2="Education to Future-proof your career."
     image={SignUpImage}
     formtype="signup"
     setIsLoggedIn={setIsLoggedIn}
   />
  )
}

export default SignUp
