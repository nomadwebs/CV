import React from "react"
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import './Hero.css'
import profileImage from '../../assets/profile1.jpeg'

const Hero = () => {
    return (
        <div id='home' className="hero">
            <img src={profileImage} alt="profile image" />
            <h1><span>Francisco Sánchez G. </span>Full stack developer & more</h1>
            <p>Passion for technology with a forward-thinking vision. I transform ideas into digital products that will enhance your company's value.</p>
            <div className="hero-action">
                <div className="hero-connect"><Link to="contact" smooth={true} duration={500}>Contact with me</Link></div>
                <div className="hero-resume">My resume</div>
            </div>

        </div>
    )
}

export default Hero