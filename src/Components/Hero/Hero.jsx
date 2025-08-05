import React from "react";
import './Hero.css';
import profile_img from '../../assets/profile_img.svg';

const Hero = () => {
    return (
        <div className="hero">
            <img src={profile_img} alt="" />
            <h1>Hi, I'm <span>Atul Kumar</span></h1>
            <h2>I’m a passionate software engineer who loves turning complex problems into simple, elegant solutions. </h2>
            <p>From developing a multiplayer chess game and review system to experimenting with new frameworks and automation, I believe in learning by doing and constantly pushing the limits of what I can create.</p>
            <p>“Build it like it’s going to scale tomorrow, and fix it like someone’s life depends on it today.”</p>

            <div className="hero-actions">
                <div className="hero-connect">Connect With Me</div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    )
}

export default Hero