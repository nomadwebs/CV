import React from 'react';
import './About.css'
//import theme_pattern from '../../assets/pattern.svg'
import profile_img from '../../assets/profile1.jpeg'

const About = () => {
    return (
        <div className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <hr className='decoration' />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus debitis alias consequuntur eos rerum officiis incidunt maiores a sed vero vel doloribus recusandae sint aliquid, nihil repudiandae possimus adipisci nobis?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum amet suscipit blanditiis!</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML5</p><hr style={{ width: "100%" }} /></div>
                        <div className="about-skill"><p>CSS3</p><hr style={{ width: "80%" }} /></div>
                        <div className="about-skill"><p>React JS</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>Javascript</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>Node JS</p><hr style={{ width: "90%" }} /></div>
                        <div className="about-skill"><p>MongoDB</p><hr style={{ width: "75%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>Years of experience</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>15+</h1>
                    <p>Projects completed</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>27+</h1>
                    <p>Happy Customers</p>
                </div>
            </div>
        </div>
    )
}

export default About