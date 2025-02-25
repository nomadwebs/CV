import React from "react"
import './Hero.css'
import profileImage from '../../assets/profile1.jpeg'

const Hero = () => {
    return (
        <div className="hero">
            <img src={profileImage} alt="profile image" className="profileImage" />
            <h1>Hola. Mi nombre es Francisco</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatem. Explicabo fuga omnis ut, porro quae numquam quidem rem consectetur adipisci natus id sunt beatae aut enim minima architecto eos.</p>
            <div className="hero-action">
                <div className="hero-connect">Contact with me</div>
                <div className="hero-resume">My resume</div>
            </div>

        </div>
    )
}

export default Hero