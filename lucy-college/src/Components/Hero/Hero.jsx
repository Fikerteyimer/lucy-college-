import React from "react";
import './Hero.css';
import hero from "../../assets/hero.jpg"; 
import HeroStats from "./HeroStats";
import AboutSection from "../About/AboutSection";
import ProgramsSection from "../Programs/ProgramsSection";
const Hero=()=>{
    return(
        <>
        <div className="hero-container">
            <div className="hero-text">
              <h1>Excellence in education confidence<span className="span"> in Your Future</span> </h1>
              <p className="home-text">
             At Lucy Medical, Business & Technology College,
             we nurture talent, encourage innovation, and provide practical education
             that prepares students to thrive in healthcare, business, and technology careers.
               </p>
    <a href="/programs"><button className="btn button">Explore programs</button></a>
    
        </div>  
        
            </div>
            <HeroStats/>
            <AboutSection/>
            <ProgramsSection/>
            
            
            </>
            
    )
}
export default Hero;