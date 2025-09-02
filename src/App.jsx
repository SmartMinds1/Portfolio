import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Services from './pages/Services.jsx';
import Projects from './pages/Projects.jsx';
import Blog from './pages/Blog.jsx';

const App = () => {
  return (
  <Router>
    <Routes>
      {/* <Route path="*" element={<NotFound />} /> */}
      <Route path="/" element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="services" element={<Services/>} />
      <Route path="projects" element={<Projects/>} />
      <Route path="blog" element={<Blog/>} />
      <Route path="contact" element={<Contact/>} />
    </Routes>
  </Router>
  )
}

export default App
