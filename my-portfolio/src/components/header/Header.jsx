import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Profil.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Ignacio Tapia</h1>
            <h5 className="text-light">Front End Developer</h5>
            <CTA />
            <HeaderSocial />

            <div className="me">
                <img src={ME} alt="me" />
            </div>

            <a href="#contact" className='scroll__dowm'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header
