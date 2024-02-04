import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Login.css"

function Login() {
    const navigate=useNavigate()
  return (
    <>
    <div className='login-back'>
        <div className='login-page'>
            <div className='login-heading'>
                <p>Welcome,</p>
            </div>
            <div className='login-heading-1'>
                <p>To The E-Market 🛒</p>
            </div>
            <div className='login-para'>
                <p>Login Your Account</p>
            </div>
            <div className='login-input-1'>
                <p>Email</p>
                <input type='text' placeholder='Email address'></input>
            </div>
            <div className='login-input-2'>
                <p>Password</p>
                <input type='text' placeholder='Password'></input>
            </div>
            <div className='login-button'>
                <button onClick={()=>navigate('/home')}>Login</button>
            </div>
            <div className='login-to-create'>
                <p>Don't have an account?<a onClick={()=>navigate('/create')}>Create Now</a></p>
            </div>
        </div>
        </div>
    </>
  )
}

export default Login
