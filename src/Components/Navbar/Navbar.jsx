import React, { useState, useRef } from "react"
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

const Navbar = () => {

    const [menu, setMenu] = useState('home')
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0"
    }
    const closeMenu = () => {
        menuRef.current.style.right = "-350px"
    }


    return (
        <section>
            <div className="top-navbar">
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/fransanchezgil/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="icon" />
                    </a>
                    <a href="https://github.com/nomadwebs" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="icon" />
                    </a>
                    <a href="mailto:hola@nomadwebs.com">
                        <FaEnvelope className="icon" />
                    </a>
                </div>
            </div>
            <div className="navbar">
                <img src={logo} alt="logo" className="logo" />
                <img src={menu_open} onClick={openMenu} alt="menu mobile open" className="nav-mob-open" />
                <ul ref={menuRef} className="nav-menu">
                    <img src={menu_close} onClick={closeMenu} className="nav-mob-close" alt="menu mobile close" />
                    <li><Link to="home" smooth={true} duration={500} onClick={() => setMenu('home')}><p>Home</p></Link>{menu === 'home' ? <img src={underline} alt='underline menu line' /> : <></>}</li>
                    <li><Link to="about" smooth={true} duration={500} onClick={() => setMenu('about')}><p>About</p></Link>{menu === 'about' ? <img src={underline} alt='undeline menu line' /> : <></>}</li>
                    <li><Link to="services" smooth={true} duration={500} onClick={() => setMenu('services')}><p>Services</p></Link>{menu === 'services' ? <img src={underline} alt='undeline menu line' /> : <></>}</li>
                    <li><Link to="portfolio" smooth={true} duration={500} onClick={() => setMenu('portfolio')}><p>Portfolio</p></Link>{menu === 'portfolio' ? <img src={underline} alt='undeline menu line' /> : <></>}</li>
                    <li><Link to="contact" smooth={true} duration={500} onClick={() => setMenu('contact')}><p>Contact</p></Link>{menu === 'contact' ? <img src={underline} alt='undeline menu line' /> : <></>}</li>
                </ul>
                <div className="nav-connect"><Link to="contact" smooth={true} duration={500}>Contact with me</Link></div>
            </div>
        </section>

    )
}

export default Navbar