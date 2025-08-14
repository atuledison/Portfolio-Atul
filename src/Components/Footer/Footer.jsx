import React from "react";
import './Footer.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_top">
                <div className="footer_top_left">
                    <h1 className="font-logo">AtuL</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, fuga culpa. Illum fugit earum repudiandae fuga!</p>
                </div>
                <div className="footer_top_right">
                    <div className="footer_email_input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder="Enter your Email" />

                    </div>
                    <div className="footer_subscribe">Subscribe</div>
                </div>
                
            </div>
            <hr />
            <div className="footer_bottom">
                    <p className="footer_bottom_left">copyrights</p>
                    <div className="footer_bottom_right">
                        <p>Term of Services</p>
                        <p>Privacy Policy</p>
                        <p><AnchorLink className="anchor" offset={50} href="#contact">Connect With Me</AnchorLink></p>
                    </div>
                </div>
        
        </div>
    )
}

export default Footer