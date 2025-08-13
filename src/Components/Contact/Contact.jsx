import React from "react";
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import location_icon from '../../assets/location_icon.svg';


    const Contact = ()=>{
        
        
    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "79db3c0b-8c18-4129-9498-b44cbf3083be");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      mode: 'cors',
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert("Your message submitted successfully");
    }
  };

    return (
        <div id="contact" className="contact">
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
                <form onSubmit={onSubmit} className="right">
                    <p>Your Name</p>
                    <input type="text" placeholder="Enter Your Name" name="name"/>
                    <p>Your Email</p>
                    <input type="email" placeholder="Enter Your Email" name="email" />
                    <p>Write your message here</p>
                    <textarea name="message" rows="10" placeholder="Enter your message"></textarea>
                    <button type="submit" className="contact_submit">Submit Now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact