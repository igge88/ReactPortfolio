import React from 'react'
import Header from './components/header/HeaderSection'
import Nav from './components/navbar/NavSection'
import About from './components/about/AboutSection'
import Experience from './components/experience/ExperienceSection'
import Jobs from './components/Jobs/JobsSection'
import Portfolio from './components/projects/ProjectsSection'
import Contact from './components/contact/ContactSection'
import Footer from './components/footer/Footer'
//import { NavContext } from './components/NavContext'

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

export default App
