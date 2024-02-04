import React from 'react'
import "./Home.css";
import hero from "./commerce-logo.png"
import pic1 from "./pic1.jpg";
import pic2 from "./pic2.jpg";
import pic3 from "./pic3.jpeg";
import pic4 from "./pic4.jpeg";
import pic5 from "./pic5.jpeg";
import { useNavigate } from 'react-router-dom';



function Home() {
  const navigate=useNavigate();
  return (
    <>
      <div className='home-page'>


        <div className='navbar'>
          <div className='home-logo'>
            <p>Market🛒</p>
          </div>
          <div className='search'>
          <input placeholder='search' type='text'></input>
          </div>
          <div className='home-navbar-list'>
            <ul>
              <li><a>Home</a></li>
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


        <div className='hero-section-1'>
          <div className='hero-section-1-para'>
            <div className='hero-heading-1'>
              <p>Sale 20% Off</p>
            </div>
            <div className='hero-heading-2'>
              <p>On Everything</p>
            </div>
            <div className='hero-para'>
              <p>We are the world best e commerce online store and nominated for best
              serving agency across tha world so trust on use for better quality</p>
            </div>
            <div className='hero-button'>
              <button>Check Now</button>
            </div>
          </div>
          <div className='hero-pic'>
            <img src={hero}></img>
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

        <div className='about-us'>
            <div className='heading'>
                <p><span>About</span> Us</p>
            </div>
            <div className='lin-1'></div>
            
            <div className='about-us-1'>
                <div className='heading-2'>
                    <p>Why <span>Shop</span> With Us</p>
                </div>

                <div className='about-section'>
                    <div className='about-section-1'>
                        <p>🚛</p>
                        <span>Free Delivery</span>
                        <h5>variations of passages of Lorem Ipsum available</h5>
                    </div>
                    <div className='about-section-1'>
                        <p>🆓</p>
                        <span>Free Shiping</span>
                        <h5>variations of passages of Lorem Ipsum available</h5>
                    </div>
                    <div className='about-section-1'>
                         <p>🏅</p>
                        <span>Best Quality</span>
                        <h5>variations of passages of Lorem Ipsum available</h5>
                    </div>
                </div>
            </div>
        </div>


        <div className='hero-section-1'>
          <div className='hero-section-1-para'>
            <div className='hero-heading-1'>
              <p>#New Arrival</p>
            </div>
            <div className='hero-para'>
              <p>We are the world best e commerce online store and nominated for best
              serving agency across tha world so trust on use for better quality</p>
            </div>
            <div className='hero-button'>
              <button>Shop Now</button>
            </div>
          </div>
          <div className='hero-pic'>
            <img src={hero}></img>
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


      </div>
    </>
  )
}

export default Home
