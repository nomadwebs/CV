import React from "react"
import './Navbar.css'
import logo from '../../assets/logo.svg'

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="logo" className="logo" />
            <ul className="nav-menu">
                <li>Home</li>
                <li>About</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
            <div className="nav-connect">Contact with me</div>
        </div>
    )
}

export default Navbar