import React from 'react'
import Header from './components/header/HeaderSection'
import Nav from './components/nav/Nav'
import About from './components/about/AboutSection'
import Experience from './components/experience/ExperienceSection'
import Jobs from './components/Jobs/Jobs'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/ContactSection'
import Footer from './components/footer/Footer'

const App = () => {
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

export default App
