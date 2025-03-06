import React, { useState } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'

const Navbar = () => {

    const [menu, setMenu] = useState('home')

    return (
        <div className="navbar">
            <img src={logo} alt="logo" className="logo" />
            <ul className="nav-menu">
                <li><AnchorLink className='anchor-link' href='#home'><p onClick={() => setMenu('home')}>Home</p></AnchorLink>{menu === 'home' ? <img src={underline} alt='undeline menu line' /> : <></>}</li>
                <li><AnchorLink className='anchor-link' href='#about'><p onClick={() => setMenu('about')}>About</p></AnchorLink>{menu === 'about' ? <img src={underline} alt='undeline menu line' /> : <></>}</li>
                <li><AnchorLink className='anchor-link' href='#services'><p onClick={() => setMenu('services')}>Services</p></AnchorLink>{menu === 'services' ? <img src={underline} alt='undeline menu line' /> : <></>}</li>
                <li><AnchorLink className='anchor-link' href='#portfolio'><p onClick={() => setMenu('portfolio')}>Portfolio</p></AnchorLink>{menu === 'portfolio' ? <img src={underline} alt='undeline menu line' /> : <></>}</li>
                <li><AnchorLink className='anchor-link' href='#contact'><p onClick={() => setMenu('contact')}>Contact</p></AnchorLink>{menu === 'contact' ? <img src={underline} alt='undeline menu line' /> : <></>}</li>
            </ul>
            <div className="nav-connect"><AnchorLink className='anchor-link' href='#contact'>Contact with me</AnchorLink></div>
        </div>
    )
}

export default Navbar