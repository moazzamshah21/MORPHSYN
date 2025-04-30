import React, {useEffect, useRef} from "react";
// import CustomEase from "gsap/dist/CustomEase";
import { BsCart, BsArrowRight } from "react-icons/bs";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import Header from "../../Header-Footer/Header/Header";
import "./Home.css";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';



const Home = () => {
  const containerRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(CustomEase);
        CustomEase.create("hop", "0.9, 0, 0.1, 1");
    
        const tl = gsap.timeline({
          delay: 0.3,
          defaults: { ease: "hop" },
        });
    
        const counts = document.querySelectorAll(".count");
    
        counts.forEach((count, index) => {
          const digits = count.querySelectorAll(".digit h1");
    
          tl.to(
            digits,
            {
              y: "0%",
              duration: 1,
              stagger: 0.075,
            },
            index * 1
          );
    
          tl.to(
            digits,
            {
              y: "-100%",
              duration: 1,
              stagger: 0.075,
            },
            index * 1 + 1
          );
        });
    
        tl.to(".spinner", {
          opacity: 0,
          duration: 0.3,
        });
    
        tl.to(".word h1", {
          y: "0%",
          duration: 1,
        }, "<");
    
        tl.to(".divider", {
          scaleY: "100%",
          duration: 1,
          onComplete: () =>
            gsap.to(".divider", { opacity: 0, duration: 0.3, delay: 0.3 }),
        });
    
        tl.to("#word-1 h1", {
          y: "100%",
          duration: 1,
          delay: 0.3,
        });
    
        tl.to("#word-2 h1", {
          y: "-100%",
          duration: 1,
        }, "<");
    
        tl.to(".block", {
          clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
          duration: 1,
          stagger: 0.1,
          delay: 0.75,
          onStart: () => {
              // First set initial scale, then animate down
              gsap.set(".Hero-section", { scale: 1.3 });
              gsap.to(".Hero-section", { 
                  scale: 1, 
                  duration: 2, 
                  ease: "hop" 
              });
          }
      }, "<");

          tl.to(".navbar", {
            top: 0,
            duration: 2,
            onComplete: () =>
              gsap.to(".navbar", { top: 0, duration: 1 }),
          }, "<");
          
          // tl.to("body", {
          //   overflow: "scroll",
          //   duration: 0.1,
          // }, "<");
          
          
    
      }, []);

    return (
      <>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            lerp: 0.07, // Adjust for smoother/faster scroll
            smartphone: {
              smooth: true,
              breakpoint: 0 // Force smooth on mobile
            },
            tablet: {
              smooth: true,
              breakpoint: 0 // Force smooth on tablet
            }
          }}
          containerRef={containerRef}>
            
          <main data-scroll-container ref={containerRef}>
            <div className="navbar">
              <Header/>
            </div>

            <div className="reveal-section">
                <div className="overlay">
                    <div className="block"></div>
                    <div className="block"></div>
                </div>

                <div className="intro-logo">
                    <div className="word" id="word-1">
                        <h1>
                            MORPH
                        </h1>
                    </div>
                    <div className="word" id="word-2">
                        <h1><span>SYN.</span></h1>
                    </div>
                </div>
                
                <div className="divider"></div>

                <div className="spinner-container">
                    <div className="spinner"></div>
                </div>

                <div className="Counter">
                    <div className="count">
                        <div className="digit">
                            <h1>0</h1>
                        </div>
                        <div className="digit">
                            <h1>0</h1>
                        </div>
                    </div>
                    <div className="count">
                        <div className="digit">
                            <h1>2</h1>
                        </div>
                        <div className="digit">
                            <h1>1</h1>
                        </div>
                    </div>
                    <div className="count">
                        <div className="digit">
                            <h1>4</h1>
                        </div>
                        <div className="digit">
                            <h1>1</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Hero-section" data-scroll-section>
              <div className="hero-img-container">
                <img
                    src="./banner-img.jpg"
                    alt="Background"
                    className="hero-bg"
                    data-scroll
                    data-scroll-speed="-2"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      zIndex: -1,
                    }}
                  />                
                </div>
                  <div className="hero-img-copy">
                  <div className="hero-img-copy-h1">
                      <h1>Morph<span>Syn.</span></h1>
                      <h6>From syntax to solution — we morph ideas into code.</h6>
                  </div>
                  </div>
            </div>

            <div className="Project" data-scroll-section>
                <div className="project-copy">
                    <h1>Projects</h1>
                    <h6>Explore our latest projects and see how we can help you.</h6>
                </div>
                <div className="project-btn">
                    <button className="btn">View Projects</button>
                    <BsArrowRight className="arrow-icon"/>
                </div>
            </div>
            </main>
        </LocomotiveScrollProvider>
      </>
    );
}

export default Home;