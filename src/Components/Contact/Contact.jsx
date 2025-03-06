import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
    const [state, handleSubmit] = useForm('mwplepqb')
    if (state.succeeded) {
        return (
            <div className="success-message">
                <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
                <h2>Thanks for your message!</h2>
                <p>I'll get back to you soon.</p>
            </div>
        )
    }

    return (
        <div id='contact' className="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h2>Let's talk</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi laboriosam voluptate dicta reiciendis aspernatur officiis possimus at, expedita debitis fugit sunt sit quasi dolorem itaque consequatur, iste provident. Ullam, ratione!</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="mail icon" /><p>hola@nomadwebs.com</p>
                        </div>

                        <div className="contact-detail">
                            <img src={call_icon} alt="telephone icon" /><p>4445554344</p>
                        </div>

                        <div className="contact-detail">
                            <img src={location_icon} alt="location icon" /><p>Barcelona, Spain</p>
                        </div>
                    </div>
                </div>
                <form className='contact-right' onSubmit={handleSubmit}>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id='name' name='name' placeholder='your name' />

                    <label htmlFor="email">Your Email</label>
                    <input type="email" placeholder='Your best email' id='email' name='email' />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />

                    <label htmlFor="message">Write your message</label>
                    <textarea name="message" id="message" rows='8' placeholder='Enter your message'></textarea>
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />

                    <button type='submit' disabled={state.submitting} className='contact-submit'>Send</button>
                </form>
            </div>
        </div >
    )
}

export default Contact