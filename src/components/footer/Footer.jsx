import React from 'react'
import './Footer.css'
import Logo from '../../img/mf-logo-white.svg';


const Footer = () => {
    return (
        <>
            <div className='footer__container'>
                <div className="img__brand">
                    <img src={Logo} alt="" />
                    <p className='living'>
                        Living, learning, & leveling up one day at a time.
                    </p>
                </div>
                <div className="social-media">
                    <div className="items">
                        <i class="fab fa-brands fa-twitter"></i>
                    </div>
                    <div className="items">
                        <i class="fab fa-brands fa-linkedin-in"></i>
                    </div>
                    <div className="items">
                        <i class="fab fa-brands fa-github"></i>
                    </div>
                    <div className="items">
                        <i class="fab fa-brands fa-facebook-f"></i>
                    </div>
                </div>
                <div className="end-footer">
                    <p>Handcrafted by me, Abraham-maker ❤️</p>
                </div>
            </div>
        </>
    )
}

export default Footer