import React from "react";
import './Hero.css';
import profile_img from '../../assets/profile_img.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return (
        <div id="home" className="hero">
            <img src={profile_img} alt="" style={{height : "400px", borderRadius: "500px"}}/>
            <h1>Hi, I'm <span>Atul Kumar</span></h1>
            <h2>I’m a passionate software engineer who loves turning complex problems into simple, elegant solutions. </h2>
            <p>From developing a multiplayer chess game and review system to experimenting with new frameworks and automation, I believe in learning by doing and constantly pushing the limits of what I can create.</p>
            <p>“Build it like it’s going to scale tomorrow, and fix it like someone’s life depends on it today.”</p>

            <div className="hero-actions">
                <div className="hero-connect"><AnchorLink className="anchor" offset={50} href="#contact">Connect With Me</AnchorLink></div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    )
}

export default Hero