import React from 'react'
import { useNavigate } from 'react-router-dom'
import pic1 from "./pic1.jpg";
import pic2 from "./pic2.jpg";
import pic3 from "./pic3.jpeg";
import pic4 from "./pic4.jpeg";
import pic5 from "./pic5.jpeg";

function Product() {
    const navigate=useNavigate();
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


        <div className='hero-section-2'>
          <div className='hero-section-2-heading'>
            <p>Our <span>products</span></p>
            <div className='line'></div>
          </div>

          <div className='hero-products'>
            
            <div className='hero-product-1'>
              <div className='hero-product-1-img'>
                <img src={pic1}></img>
              </div>
              <div className='product-price'>
              <p>Nokia</p><span>₹299</span>
              </div>
              <div className='hero-product-1-btn'>
                <button className='btn-1'>Add To Cart</button>
                <button>Buy Now</button>
              </div>
            </div>

            <div className='hero-product-1'>
              <div className='hero-product-1-img'>
                <img src={pic5}></img>
              </div>
              <div className='product-price-1'>
              <p>Vivo T2x</p><span>₹299</span>
              </div>
              <div className='hero-product-1-btn'>
                <button>Add To Cart</button>
                <button>Buy Now</button>
              </div>
            </div>

            <div className='hero-product-1'>
              <div className='hero-product-1-img'>
                <img src={pic3}></img>
              </div>
              <div className='product-price-2'>
              <p>Iphone 15 Pro Max</p><span>₹299</span>
              </div>
              <div className='hero-product-1-btn'>
                <button>Add To Cart</button>
                <button>Buy Now</button>
              </div>
            </div>

            <div className='hero-product-1'>
              <div className='hero-product-1-img'>
                <img src={pic4}></img>
              </div>
              <div className='product-price-3'>
              <p>Smart watch</p><span>₹299</span>
              </div>
              <div className='hero-product-1-btn'>
                <button>Add To Cart</button>
                <button>Buy Now</button>
              </div>
            </div>

          </div>

          <div className='hero-products-2'>


          <div className='hero-product-1'>
              <div className='hero-product-1-img'>
                <img src={pic4}></img>
              </div>
              <div className='product-price-3'>
              <p>Smart watch</p><span>₹299</span>
              </div>
              <div className='hero-product-1-btn'>
                <button>Add To Cart</button>
                <button>Buy Now</button>
              </div>
            </div>

            <div className='hero-product-1'>
              <div className='hero-product-1-img'>
                <img src={pic3}></img>
              </div>
              <div className='product-price-2'>
              <p>Iphone 15 Pro Max</p><span>₹299</span>
              </div>
              <div className='hero-product-1-btn'>
                <button>Add To Cart</button>
                <button>Buy Now</button>
              </div>
            </div>  

            <div className='hero-product-1'>
              <div className='hero-product-1-img'>
                <img src={pic5}></img>
              </div>
              <div className='product-price-1'>
              <p>Vivo T2x</p><span>₹299</span>
              </div>
              <div className='hero-product-1-btn'>
                <button>Add To Cart</button>
                <button>Buy Now</button>
              </div>
            </div>

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

export default Product
