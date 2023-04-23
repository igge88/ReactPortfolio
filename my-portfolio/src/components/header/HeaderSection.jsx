import React from 'react'
import './headerStyle.css'
import CTA from './CTA'
import ME from '../../assets/Profil.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="container header_container">
            <h3>Hey! I Am</h3>
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
