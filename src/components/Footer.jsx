import React from 'react'
import './footer.css'
import artificiallogo from '../assets/images/artificiallogo.svg'
import newslogo from '../assets/images/news.svg'
import tellogo from '../assets/images/tel.svg'
import socialmedia from
'../assets/images/socialmedia.svg'
import englishlogo from '../assets/images/english.svg'
import locallogo from '../assets/images/local.svg'
const Footer = () => {
  return (
    <div className='footer row'>

<div class="card col-12 col-md-4 col-lg-2">
  <img src={artificiallogo} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Lorem ipsum is placeholder text <br /> commonly used in the graphic, print, and <br /> layouts and visual mockups.</p>
    <a href="#" ><img src={newslogo} alt="" /></a>
    <a href="#" ><img src={tellogo} alt="" /></a>
    <a href="#" ><img src={locallogo} alt="" /></a>
  </div>
</div>



<div class="card col-12  col-md-4 col-lg-2">
  <div class="card-body">
    <h5 class="card-title">INFORMATION</h5>

    <a href="#" class="card-link">New Collection</a>
    <a href="#" class="card-link">About Store</a>
    <a href="#" class="card-link">Contact Us</a>
    <a href="#" class="card-link">Latest News</a>
    <a href="#" class="card-link">Our Sitemap</a>
    <a href="#" class="card-link">Orders History</a>
 
  </div>
</div>

<div class="card col-12 col-md-4 col-lg-2">
  <div class="card-body">
    <h5 class="card-title">FOOTER MENU</h5>

    <a href="#" class="card-link">Instagram profile</a>
    <a href="#" class="card-link">New Collection</a>
    <a href="#" class="card-link">Contact Us</a>
    <a href="#" class="card-link">Latest News</a>
    <a href="#" class="card-link">Terms & Conditions</a>
    <a href="#" class="card-link">Purchase Theme</a>
 
  </div>
</div>
<div class="card col-12 col-md-4 col-lg-2">
  <div class="card-body">
    <h5 class="card-title">USEFUL LINKS</h5>

    <a href="#" class="card-link">Instagram profile</a>
    <a href="#" class="card-link">New Collection</a>
    <a href="#" class="card-link">Contact Us</a>
    <a href="#" class="card-link">Latest News</a>
    <a href="#" class="card-link">Terms & Conditions</a>
    <a href="#" class="card-link">Purchase Theme</a>
 
  </div>
</div>

<div class="card col-12 col-md-4 col-lg-2">
  <div class="card-body">
    <h5 class="card-title">ABOUT THE STORE</h5>
    <p class="card-text">Lorem ipsum is placeholder text <br /> commonly used in the graphic, print, and <br /> layouts and visual mockups.</p>
    <a href="#" class="card-link">www.company.com</a>
    <a href="#" class="card-link"><img src={socialmedia} alt="" /></a>
    <a href="#" class="card-link"><img src={englishlogo} alt="" /></a>
  </div>
</div>
    </div>
  )
}

export default Footer