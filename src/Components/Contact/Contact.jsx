import React from "react";
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import location_icon from '../../assets/location_icon.svg';



const Contact = () => {
    return (
        <div className="contact">
            <div className="title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact_section">
                <div className="contact_left">
                    <h1>Let's talk</h1>
                    <p>write your contact desc...</p>
                    <div className="contact_details">
                        <div className="contact_detail">
                            <img src={mail_icon} alt="" /> <p>atulmicrosft@gmail.com</p>
                        </div>
                        <div className="contact_detail">
                            <img src={call_icon} alt="" /> <p>+91 7579322038</p>
                        </div>
                        <div className="contact_detail">
                            <img src={location_icon} alt="" /> <p>pizzz central lakhanpur kanpur up</p>
                        </div>
                    </div>
                </div>
                <form action="" className="right" >
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="Enter Your Name" name="name"/>
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder="Enter Your Email" name="email" />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="10" placeholder="Enter your message"></textarea>
                    <button type="submit" className="contact_submit">Submit Now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact