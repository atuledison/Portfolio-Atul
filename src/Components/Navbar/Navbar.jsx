import React, { useRef, useState } from "react";
import './Navbar.css'
// import logo from '/assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

    const [menu, setmenu] = useState("home");
    const menuRef = useRef();

    function openMenu(){
        menuRef.current.style.right="0px";
    }
    function closeMenu(){
        menuRef.current.style.right="-350px";
    }

    return (
        <div className='navbar'>
        <h1 className="font-logo">AtuL</h1>
        <img src={menu_open} alt="" onClick={openMenu} className="nav_mob_open"/>
        <ul className="nav-menu" ref={menuRef}>
            <img src={menu_close} alt="" onClick={closeMenu} className="nav_mob_close"/>
            <li> <AnchorLink className="anchor" href="#home"><p onClick={()=>setmenu("home")}>Home</p></AnchorLink> {menu==="home"?<img src={underline} alt=""/>:<></> }</li>
            <li><AnchorLink className="anchor" offset={50} href="#about"><p onClick={()=>setmenu("about")}>About Me</p></AnchorLink> {menu==="about"?<img src={underline} alt=""/>:<></> }</li>
            <li><AnchorLink className="anchor" offset={50} href="#services"><p onClick={()=>setmenu("services")}>Services</p></AnchorLink> {menu==="services"?<img src={underline} alt=""/>:<></> }</li>
            <li><AnchorLink className="anchor" offset={50} href="#work"><p onClick={()=>setmenu("work")}>Portfolio</p></AnchorLink> {menu==="work"?<img src={underline} alt=""/>:<></> }</li>
            <li><AnchorLink className="anchor" offset={50} href="#contact"><p onClick={()=>setmenu("contact")}>Contact</p></AnchorLink> {menu==="contact"?<img src={underline} alt=""/>:<></> }</li>
        </ul>
        <div className="nav-connect"><AnchorLink className="anchor" offset={50} href="#contact">Connect With Me</AnchorLink></div>
        </div>
    )
}

export default Navbar