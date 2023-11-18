import React, { useState } from 'react'
import logo from "../assets/images/logo.png"
import { useNavigate } from "react-router-dom"

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = () => {

    if (email === "test@gmail.com" && password === "test") {
      setEmail("")
      setPassword("")
      setError("")
      navigate("/home")
    }
    else {
      setError("Invalid Credentials")
    }
  }
  return (
    <div className='w-full flex flex-col justify-center items-center h-screen '>
      {/* to display the error message */}
      {error !== "" && <div className='w-full h-[24px] flex justify-center items-center bg-red-200 text-red-600 fixed top-[20px]'>{error}</div>}

      <div className='flex flex-col justify-center items-center w-[400px] h-full max-w-full'>

        <div>
          <img src={logo} />
        </div>

        <div className='text-center text-customgreen border-black border-1px pt-[17px] pb-[49px]'>
          We are electric
        </div>

        <div className='pb-[25px]'>
          <input type='text' className='bg-customgray shadow-customShadow1 h-[42px] w-[238px] text-white outline-none rounded-3xl pl-[12px] ' placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <input type='password' className='bg-customgray shadow-customShadow1 h-[42px] w-[238px] text-white outline-none rounded-3xl pl-[12px]' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className='pt-[47px]'>
          <button className='bg-image2 w-[238px] h-[42px] rounded-3xl text-center text-customWhite ' onClick={handleSubmit}>Login</button>
        </div>

        <div className='text-center text-customgreen2 pt-[26px]'>
          Forgot Password?
        </div>

      </div>
    </div>
  )
}

export default Login
