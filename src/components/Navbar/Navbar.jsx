import React from 'react'
import './Navbar.css'
import { logo } from '../../assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <NavLink to="/"><h1 className='text-logo'>{logo.text_logo} <span className='text2'>{logo.text_logo2}</span>
        </h1></NavLink>
        <ul>
            <NavLink to="/"><li>Home</li></NavLink>
            <NavLink to="/notes"><li>Notes</li></NavLink>
            <NavLink to="/services"><li>Services</li></NavLink>
            <NavLink to="/contact-us"><li>Contact Us</li></NavLink>
            <NavLink to="/downloads"><li>Downloads</li></NavLink>
        </ul>
        <div className="nav-search-box">
          <input type="text" placeholder='Search Notes ( C++ or Java )' />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="nav-btn">
            <div className="login-btn">
              <NavLink to="/login"><button>Login</button></NavLink>
              <i class="fa-solid fa-right-to-bracket"></i>
            </div>
            <div className="cart-btn">
              <NavLink to="/cart"><button>Cart</button></NavLink>
              <i class="fa-solid fa-cart-plus"></i>
            </div>
        </div>
    </div>
  )
}

export default Navbar
