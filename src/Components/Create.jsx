import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Login.css"

function Create() {
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
                <p>Sign Up And Create Your Account</p>
            </div>
            <div className='login-input-1'>
                <p>First Name</p>
                <input type='text' placeholder='Enter First Name'></input>
            </div>
            <div className='login-input-1'>
                <p>Last Name</p>
                <input type='text' placeholder='Enter Last Name'></input>
            </div>
            <div className='login-input-1'>
                <p>Username</p>
                <input type='text' placeholder='Enter Username'></input>
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
                <button onClick={()=>navigate('/home')}>Sign up</button>
            </div>
            <div className='login-to-create'>
                <p>Already have an account?<a onClick={()=>navigate('/')}>Login Now</a></p>
            </div>
        </div>
        </div>

    </>
  )
}

export default Create
