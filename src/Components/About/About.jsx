import React from "react";
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import about_img from '../../assets/about_profile.svg'

const About = () => {
    return (
        <div id="about" className="about">
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={about_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I’m a passionate software engineer who loves turning complex problems into simple, elegant solutions. Whether it’s building a feature-rich frontend, diving deep into backend logic, or deploying reliable systems, I bring a builder’s mindset to every part of the engineering lifecycle.</p>
                        <p>From developing a multiplayer chess game and review system to experimenting with new frameworks and automation, I believe in learning by doing and constantly pushing the limits of what I can create.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>skill 1</p><hr  style={{width: "50%"}}/>
                        </div>
                         <div className="about-skill">
                            <p>skill 2</p><hr  style={{width: "70%"}}/>
                        </div>
                         <div className="about-skill">
                            <p>skill 3</p><hr  style={{width: "60%"}}/>
                        </div>
                         <div className="about-skill">
                            <p>skill 4</p><hr  style={{width: "50%"}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>Years of experience</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>20+</h1>
                    <p>projects completed</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>happy clients</p>
                </div>
            </div>
        </div>
    )
}

export default About