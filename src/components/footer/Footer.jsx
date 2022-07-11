import React from 'react'
import './Footer.css'
import Logo from '../../img/mf-logo-white.svg';


const Footer = () => {
    return (
        <>
            <div className="start__footer">
                <div className="content">
                    <h1>
                        Start a project
                    </h1>
                    <p>
                        Interested in working together? We should queue up a chat. I’ll buy the coffee.
                    </p>
                    <a href="/" className='buttom__footer'>
                        <p>Lest's do this</p>
                    </a>
                </div>
            </div>
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