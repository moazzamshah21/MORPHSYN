import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
// import ScrollWrapper from './ScrollWrapper';

// import About from './Components/About/About';
// import Services from './Components/Service/Service';
// import Contact from './Components/Contact/Contact';
// import Transition from './transition'; // your page transition component

function App() {
  // const [isTransitioning, setIsTransitioning] = useState(false);

  // const handleTransitionComplete = () => {
  //   setIsTransitioning(false);
  // };

  return (
    // <ScrollWrapper>
      <Home />
    // </ScrollWrapper>
    // <Router>
    //   {/* {isTransitioning && <Transition onComplete={handleTransitionComplete} />} */}

    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     {/* <Route path="/about" element={<About setIsTransitioning={setIsTransitioning} />} />
    //     <Route path="/services" element={<Services setIsTransitioning={setIsTransitioning} />} />
    //     <Route path="/contact" element={<Contact setIsTransitioning={setIsTransitioning} />} /> */}
    //   </Routes>
    // </Router>
  );
}

export default App;
