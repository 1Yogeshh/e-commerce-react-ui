import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Contactus.css"

function Contactus() {
    const navigate =useNavigate();
  return ( 
  <>
     <div className='navbar'>
          <div className='home-logo'>
            <p>Market🛒</p>
          </div>
          <div className='search'>
          <input placeholder='search' type='text'></input>
          </div>
          <div className='home-navbar-list'>
            <ul>
              <li><a onClick={()=>navigate('/home')}>Home</a></li>
              <li><a  onClick={()=>navigate('/about')}>About</a></li>
              <li><a onClick={()=>navigate('/product')}>Product</a></li>
              <li><a onClick={()=>navigate('/contact')}>Contact</a></li>
            </ul>
          </div>
          <div className='home-buttons'>
            <button>Go To Cart</button>
            <button onClick={()=>navigate("/")}>Logout</button>
          </div>
        </div>

        <div className='contact'>
            <div className='contact-heading'>
                <p><span>Contact</span> Us</p>
            </div>
            <div className='line-111'></div>

            <div className='form'>
                <input type='text' placeholder='Enter Your Name'></input>
                <input type='text' placeholder='Enter Your Email'></input>
                <input type='text' placeholder='Enter Subject'></input>
            </div>
            <div className='form-1'>
                <input type='text' placeholder='Enter Your Message'></input>
            </div>
            <div className='button-1111'>
                <button>Submit</button>
            </div>
        </div>




        <div className='footer'>
          <div className='footer-1'>
            <div className='footer-11'>
              <p>ONLINE STORE</p>
              <p>MEN CLOTHING</p>
              <p>WOMEN CLOTHING</p>
              <p>MEN ACCESSORIES</p>
              <p>WOMEN ACCESSORIES</p>

            </div>
            <div className='footer-12'>
            <p>HELPFUL LINK</p>
            <p>HOME</p>
            <p>ABOUT</p>
            <p>CONTACT</p>
            </div>
            <div className='footer-13'>
            <p>PARTNERS</p>
            <p>ZARA</p>
            <p>PANTALONNS</p>\
            <p>LEVIS</p>
            <p>UCB</p>
            <p>+ MANY MORE</p>
            </div>
            <div className='footer-14'>
            <p>ADDRESS</p>
            <p>BUILDING 101</p>
            <p>CENTRAL AVENUE</p>
            <p>LA-9029029</p>
            <p>UNITED STATES</p>
            </div>
          </div>
        </div>

  </>
  )
}

export default Contactus
