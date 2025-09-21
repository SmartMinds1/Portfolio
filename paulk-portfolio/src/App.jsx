import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Services from './pages/Services.jsx';
import Pricing from './pages/Pricing.jsx';
import CaseStudies from './pages/CaseStudies.jsx';

//for animations
import {ScrollTrigger, SplitText} from "gsap/all";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger, SplitText);


const App = () => {
  return (
  <Router>
    <Routes>
      {/* <Route path="*" element={<NotFound />} /> */}
      <Route path="/" element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="services" element={<Services/>} />
      <Route path="case-studies" element={<CaseStudies />} />
      <Route path="pricing" element={<Pricing/>} />
      <Route path="contact" element={<Contact/>} />
    </Routes>
  </Router>
  )
}

export default App
