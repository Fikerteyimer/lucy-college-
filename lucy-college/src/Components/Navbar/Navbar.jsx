import React from "react";
import logo from "../../assets/logo.jpg"; 
import "./Navbar.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar=()=>{
    return(
    <nav className="nav-bar">
        <div className="heading-container">
       <img src={logo} alt="college logo" className="logo"/>
       <h1 className="heading">Lucy College</h1>
        </div>
       <ul className="container">
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/About"><li>About</li></NavLink>
        <NavLink to="/Programs"> <li>Programs</li></NavLink>
        <NavLink to="/Announcements"><li>Announcements</li></NavLink>
        <NavLink to="/Contact"><li><button className="btn">Contact Us</button></li></NavLink>
       </ul>
        
    </nav>
    );
}
export default Navbar;
