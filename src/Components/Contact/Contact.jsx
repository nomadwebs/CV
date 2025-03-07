import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
    /* const [state, handleSubmit] = useForm('mwplepqb')
    if (state.succeeded) {
        return (
            <div className="success-message">
                <img src={mail_icon} alt="mail success" className="success-icon" />
                <h2>Thanks for your message!</h2>
                <p>I'll get back to you soon.</p>
            </div>
        )
    } */

    return (
        <div id='contact' className="contact">
            <div className="contact-title">
                <h2>Get in touch</h2>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h3>Do you want to talk?</h3>
                    <p>Have a project in mind or need a digital hero to tackle your tech challenges? Whether it's crafting modern web solutions, managing your data like a pro, or integrating seamless APIs, let's make it happen together. Reach out and let's bring your ideas to life!"

                        Feel free to adjust it as needed to fit your style or specific requirements.</p>
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
                <form className='contact-right' action="https://formspree.io/f/mwplepqb" method="POST">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id='name' name='name' placeholder='your name' />

                    <label htmlFor="email">Your Email</label>
                    <input type="email" placeholder='Your best email' id='email' name='email' />

                    <label htmlFor="message">Write your message</label>
                    <textarea name="message" id="message" rows='8' placeholder='Enter your message'></textarea>

                    <button type='submit' className='contact-submit'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact