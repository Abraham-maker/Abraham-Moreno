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
                        <a href="https://twitter.com/JholfrenM" target={'_blank'}><i class="fab fa-brands fa-twitter"></i></a>
                    </div>
                    <div className="items">
                        <a href="https://www.linkedin.com/in/morenoabraham/" target={'_blank'}><i class="fab fa-brands fa-linkedin-in"></i></a>
                    </div>
                    <div className="items">
                        <a href="https://github.com/Abraham-maker" target={'_blank'}><i class="fab fa-brands fa-github"></i></a>
                    </div>
                    <div className="items">
                        <a href="https://www.facebook.com/abraham.moreno.7777019" target={'_blank'}><i class="fab fa-brands fa-facebook-f"></i></a>
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