/*import React from 'react'
import Header from './components/header/HeaderSection'
import Nav from './components/navbar/NavSection'
import About from './components/about/AboutSection'
import Experience from './components/experience/ExperienceSection'
import Jobs from './components/Jobs/JobsSection'
import Portfolio from './components/projects/ProjectsSection'
import Contact from './components/contact/ContactSection'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Jobs />
    <Portfolio />
    <Contact />
    <Footer />
    </>
  )
}

export default App*/

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/HeaderSection';
import Nav from './components/navbar/NavSection';
import About from './components/about/AboutSection';
import Experience from './components/experience/ExperienceSection';
import Jobs from './components/Jobs/JobsSection';
import Portfolio from './components/projects/ProjectsSection';
import Contact from './components/contact/ContactSection';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Nav />
        <About />
    <Experience />
    <Jobs />
    <Portfolio />
    <Contact />
        <Routes>
          <Route path="/contact" component={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
