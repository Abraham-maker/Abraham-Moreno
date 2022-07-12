import React from 'react'
import './Contact.css'
import Logo from '../../img/mf-logo.svg';
import Avatar from '../../img/avatar.svg'
import emailjs from 'emailjs-com'

const Contact = () => {

    const sendEmail = (e) => {
        emailjs.sendForm('service_drysart', 'template_znq9v7v', e.target, 'gANMUzEWo03e6iNuI')
            .then(response => console.log(response)).catch(error => console.log(error));
    }

    return (
        <>
            <nav className='navbar__contact'>
                <div className='navbar__container__contact'>
                    <img className='navbar__brand' src={Logo} alt="logo" />
                    <ul className="menus">
                        <li><a href="#home"></a></li>
                        <li><a href="#about"></a></li>
                    </ul>
                </div>
            </nav>

            <section className='body__contact'>
                <div className='container__body'>
                    <div className="colums">
                        <div className="colum">
                            <img className='avatar__contact' src={Avatar} alt="" />
                            <h1 className='title__contact'>Thanks for taking the time to reach out. How can I help you today?</h1>
                        </div>
                    </div>
                </div>
            </section>

            <div class="container">
                <form onSubmit={sendEmail}>
                    <div className="first__contacts">
                        <div class="col-70">
                            <label htmlFor="name">Name</label>
                            <br />
                            <input id='name' type="text" name="name_user" required />
                        </div>
                        <div class="col-70">
                            <label htmlFor="email">Email</label>
                            <br />
                            <input type="email" id="email" name="user_email" required />
                        </div>
                    </div>
                    <div class="col-70 message">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="user_message"></textarea>
                    </div>
                    <div class="row">
                        <div class="container__submit">
                            <input type="submit" id="submit" value="Send Message" />
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Contact