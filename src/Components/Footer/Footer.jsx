import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} className='footer-logo' alt="fransanchez logo" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio </p>
                </div>
                {/* <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="user icon" />
                        <input type="email" placeholder='Your best email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div> */}
            </div>
            <hr />
            <div className="footer-bottom">
                <p className='footer-bottom-left'>@Copyright of Francisco Sánchez G. Developed by nomadwebs</p>
                <div className='footer-bottom-right'>
                    <p>Terms</p>
                    <p>Privaci Policy</p>
                    <p>Contact with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer