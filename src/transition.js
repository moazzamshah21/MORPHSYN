import React, { useEffect } from "react";
import gsap from "gsap";
import "./transition.css";

const Transition = ({ onComplete }) => {
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete(); // call back when done
      }
    });

    // Expand from center
    tl.to(".block1", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      stagger: 0.1,
      ease: "power4.inOut"
    });

    // Shrink back to center to reveal page
    tl.to(".block1", {
      clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
      duration: 1,
      stagger: 0.1,
      ease: "power4.inOut"
    });

  }, [onComplete]);

  return (
    <div className="overlay1">
      <div className="block1"></div>
      <div className="block1"></div>
    </div>
  );
};

export default Transition;
