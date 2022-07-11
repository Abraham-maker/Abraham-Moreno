import React from 'react'
import './Header.css'
import Avatar from '../../img/avatar.svg'
import Logo from '../../img/hero.svg'

const Header = () => {
  return (
    <div className='container__header'>
      <h1 className='header__title'>Front-end Developer</h1>
      <p className='header__paragraph'>I code beautifully simple things, and I love what I do.</p>
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