import React from "react";
import "./Header.css";
import AnimatedLink from "../../AnimatedLink"; // adjust path as needed

const Header = ({ setIsTransitioning }) => {
  return (
    <nav className="header">
      <div className="header__logo">
        <div className="word-1"><h1>MORPH</h1></div>
        <div className="word-1"><h1><span>SYN.</span></h1></div>
      </div>
      {/* <ul className="header__links">
        <li><AnimatedLink to="/" setIsTransitioning={setIsTransitioning}>Home</AnimatedLink></li>
        <li><AnimatedLink to="/about" setIsTransitioning={setIsTransitioning}>About</AnimatedLink></li>
        <li><AnimatedLink to="/services" setIsTransitioning={setIsTransitioning}>Services</AnimatedLink></li>
        <li><AnimatedLink to="/contact" setIsTransitioning={setIsTransitioning}>Contact</AnimatedLink></li>
      </ul> */}
      <div className="developer">
        <h1>Developed by MOAZZAM SHAH KHAN</h1>
      </div>
    </nav>
  );
};

export default Header;
