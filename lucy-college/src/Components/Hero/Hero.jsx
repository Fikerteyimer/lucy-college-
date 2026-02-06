import React from "react";
import './Hero.css';
import hero from "../../assets/hero.jpg"; 
const Hero=()=>{
    return(
        <div className="hero container">
            <div className="hero-text">
              <h1>Lucy Medical Business and Technology College</h1>
              <p className="home-text">
             At Lucy Medical, Business & Technology College,
             <span className="line-break">
             we nurture talent, encourage innovation, and provide practical education
             that prepares students to thrive in healthcare, business, and technology careers.
               </span>
               </p>
    <a href=""><button className="btn button">Explore programs</button></a>
        </div>  
            <div>
                <img src={hero} className="hero-img"/>
            </div>

            </div>
            
    )
}
export default Hero;