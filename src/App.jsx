import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import My_Work from "./Components/My_Work/My_Work";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <About/>
            <Services/>
            <My_Work/>
            <Contact/>
            <Footer/>
        
        </div>
    )
}

export default App