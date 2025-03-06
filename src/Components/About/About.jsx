import React from 'react';
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile1.jpeg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h2>About me</h2>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Passionate about technology, with a focus on innovation and the creation of digital solutions. My experience ranges from developing and optimizing processes in SAP to Full Stack programming, with a particular interest in integrating emerging technologies such as AI. I am committed to excellence, always striving to create value through the development of innovative products.</p>
                        <p>Expert in cutting-edge technologies such as JavaScript, Node.js, React, Express, MongoDB, among others. Always eager to integrate and build teams at the forefront of digital innovation.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML5</p><hr style={{ width: "75%" }} /></div>
                        <div className="about-skill"><p>CSS3</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>React JS</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>Javascript</p><hr style={{ width: "65%" }} /></div>
                        <div className="about-skill"><p>Node JS</p><hr style={{ width: "65%" }} /></div>
                        <div className="about-skill"><p>MongoDB</p><hr style={{ width: "75%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h3>10+</h3>
                    <p>Years of experience</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h3>15+</h3>
                    <p>Projects completed</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h3>27+</h3>
                    <p>Happy Customers</p>
                </div>
            </div>
        </div>
    )
}

export default About