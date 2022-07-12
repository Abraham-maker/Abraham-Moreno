import React from 'react'
import './Header.css'
import Avatar from '../../img/avatar.svg'
import Logo from '../../img/hero.svg'
import 'animate.css';
import 'animate.css/animate.css'

const Header = () => {
  return (
    <div className='container__header'>
      <h1 className='header__title animate__animated animate__backInUp'>Front-end Developer</h1>
      <p className='header__paragraph animate__animated animate__bounceInDown'>I code beautifully simple things, and I love what I do.</p>
      <div className="header__avatar">
        <img src={Avatar} alt="avatar" />
      </div>
      <div className="header__logo">
        <img src={Logo} alt="logo" />
      </div>
    </div>
  )
}

export default Header