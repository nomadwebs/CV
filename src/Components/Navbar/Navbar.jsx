import React, { useState } from "react"
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'

const Navbar = () => {

    const [menu, setMenu] = useState('home')

    return (
        <div className="navbar">
            <img src={logo} alt="logo" className="logo" />
            <ul className="nav-menu">
                <li><Link to="home" smooth={true} duration={500} onClick={() => setMenu('home')}><p>Home</p></Link>{menu === 'home' ? <img src={underline} alt='underline menu line' /> : <></>}</li>
                <li><Link to="about" smooth={true} duration={500} onClick={() => setMenu('about')}><p>About</p></Link>{menu === 'about' ? <img src={underline} alt='undeline menu line' /> : <></>}</li>
                <li><Link to="services" smooth={true} duration={500} onClick={() => setMenu('services')}><p>Services</p></Link>{menu === 'services' ? <img src={underline} alt='undeline menu line' /> : <></>}</li>
                <li><Link to="portfolio" smooth={true} duration={500} onClick={() => setMenu('portfolio')}><p>Portfolio</p></Link>{menu === 'portfolio' ? <img src={underline} alt='undeline menu line' /> : <></>}</li>
                <li><Link to="contact" smooth={true} duration={500} onClick={() => setMenu('contact')}><p>Contact</p></Link>{menu === 'contact' ? <img src={underline} alt='undeline menu line' /> : <></>}</li>
            </ul>
            <div className="nav-connect"><Link to="contact" smooth={true} duration={500}>Contact with me</Link></div>
        </div>
    )
}

export default Navbar