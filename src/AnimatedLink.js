import React from "react";
import { useNavigate } from "react-router-dom";

const AnimatedLink = ({ to, setIsTransitioning, children }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault(); // stop default navigation
    setIsTransitioning(true);

    // Wait for animation duration (match your transition length)
    setTimeout(() => {
      navigate(to);
    }, 2000); // must match Transition.js duration (~2s)
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default AnimatedLink;
