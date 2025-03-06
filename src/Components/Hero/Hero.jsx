import React from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Hero.css'
import profileImage from '../../assets/profile1.jpeg'

const Hero = () => {
    return (
        <div id='home' className="hero">
            <img src={profileImage} alt="profile image" />
            <h1><span>Francisco Sánchez G. </span>full stack developer</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatem. Explicabo fuga omnis ut, porro quae numquam quidem rem consectetur adipisci natus id sunt beatae aut enim minima architecto eos.</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' href='#contact'>Contact with me</AnchorLink></div>
                <div className="hero-resume">My resume</div>
            </div>

        </div>
    )
}

export default Hero