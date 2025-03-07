import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-bottom">
                <p className='footer-bottom-left'>@Copyright of Francisco Sánchez G. Developed by nomadwebs</p>
                <div className='footer-bottom-right'>
                    {/* <p>Terms</p>
                    <p>Privaci Policy</p> */}
                    <a href='mailto:hola@nomadwebs.com'>Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Footer