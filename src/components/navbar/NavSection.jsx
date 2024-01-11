import React, {useState} from 'react'
import './navStyles.css'
import {FiHome, FiUser, FiBook, FiMessageSquare} from 'react-icons/fi'
import {RiServiceLine} from 'react-icons/ri'


function Nav() {
  const [activeNav, setActiveNav] = useState('#')

  return (

    <nav>
        <a href="/" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FiHome/></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FiUser/></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FiBook/></a>
        <a href="#jobs" onClick={() => setActiveNav('#jobs')} className={activeNav === '#jobs' ? 'active' : ''}><RiServiceLine/></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><FiMessageSquare/></a>
    </nav>

  )
}

export default Nav
