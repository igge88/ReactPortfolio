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
            <h5 className="text-light">Front End Developer Student</h5>
            <div className="me">
                <img src={ME} alt="me" />
            </div>
            <HeaderSocial />
            <CTA />
        </div>


    </header>

  )
}

export default Header
