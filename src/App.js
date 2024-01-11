import React from 'react'
import Header from './components/header/HeaderSection'
import Nav from './components/navbar/NavSection'
import ParentComponent from './components/about/ParentComponent'
import ExperienceSection from './components/experience/ExperienceSection'
import { ExperienceProvider } from './components/experience/ExperienceContext'
import Jobs from './components/Jobs/JobsSection'
import Portfolio from './components/projects/ProjectsSection'
import Contact from './components/contact/ContactSection'
import Footer from './components/footer/Footer'

function App() {
    return (
        <>
            <Header />
            <Nav />
            <ParentComponent />
            <ExperienceProvider>
                <div className="App">
                    <ExperienceSection />
                </div>
            </ExperienceProvider>
            <Jobs />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    )
}

export default App
