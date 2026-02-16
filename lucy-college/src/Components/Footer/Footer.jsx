import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>Lucy College</h2>
          <p>Medical • Business • Technology</p>
        </div>

        <ul className="footer-links">
          <h3>Quick Links</h3>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/programs">Programs</NavLink></li>
          <li><NavLink to="/announcements">Announcements</NavLink></li>
          <li><NavLink to="/contact-us">Contact Us</NavLink></li>
        </ul>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Lucy College. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
