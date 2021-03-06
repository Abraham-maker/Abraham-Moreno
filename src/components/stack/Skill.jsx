import React from 'react'
import './Skill.css'

const Skill = () => {
    return (
        <>
            <div className="skill__container">
                <h1 className='title__skill'>Technologies</h1>
                <div className="skill__background">
                    <div className="skill__item">
                        <i className="fab fa-brands fa-html5"></i>
                        <i className="fab fa-brands fa-css3"></i>
                        <i className="fab fa-brands fa-js"></i>
                        <i className="fab fa-brands fa-react"></i>
                        <i className="fab fa-brands fa-laravel"></i>
                        <i className="fab fa-brands fa-github"></i>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Skill