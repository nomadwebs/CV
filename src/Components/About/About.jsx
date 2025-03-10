import React from 'react';
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img_left from '../../assets/fransanchezg_left.webp'
import profile_img_right from '../../assets/fransanchezg_right.webp'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h2>About me</h2>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img_left} alt="Francisco Sánchez G." />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Passionate about technology, with a focus on innovation and the creation of digital solutions. My experience ranges from developing and optimizing processes in SAP to Full Stack programming, with a particular interest in integrating emerging technologies such as AI. I am committed to excellence, always striving to create value through the development of innovative products.</p>
                        <p>Expert in cutting-edge technologies such as JavaScript, Node.js, React, Express, MongoDB, among others. Always eager to integrate and build teams at the forefront of digital innovation.</p>
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
                    <h3>50+</h3>
                    <p>Happy Customers</p>
                </div>
            </div>


            <div className="about-sections">
                <div className="about-extra">
                    <div className="about-para">
                        <h3>More about me</h3>
                        <ul>
                            <li>I have trained as a <span className='featured-word'>Full Stack Developer</span> at ISDI Coders. Now I can create modern and efficient applications that solve real-world problems.</li>
                            <li>I worked as a <span className='featured-word'>Project Manager</span> at Desigual, implementing a multicarrier service in all stores across Europe.</li>
                            <li>I have assisted over <span className='featured-word'>50 customers</span> with web projects.</li>
                            <li>I have more than <span className='featured-word'>10 years of experience</span> working on big tech projects with SAP.</li>
                        </ul>
                    </div>
                </div>
                <div className="about-left">
                    <img src={profile_img_right} alt="Francisco Sánchez G." />
                </div>
            </div>
        </div>
    )
}

export default About