import React from 'react'
import Logo from '../../img/mf-logo.svg';
import './Navbar.css'

const NavBar = () => {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar__container'>
          <img className='navbar__brand' src={Logo} alt="logo" />
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
          <ul className="menu">
            <li><a href="#work">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#tech">Skills</a></li>
            <li><a href="#careers">Project</a></li>
            <li><a className='boton__contact' href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar