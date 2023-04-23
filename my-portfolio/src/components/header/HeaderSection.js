import React from 'react'
import './headerStyles.css'
import CTA from './CTA'
import Jag from '../../assets/Profil.png'
import HeaderSocial from './HeaderSocials'

function Header() {
  return (
    <header>
        <div className="container header_container">
            <h3>Hey! I Am</h3>
            <h1>Ignacio Tapia</h1>
            <h5 className="text-light">Front End Developer Student</h5>
            <div className="me">
                <img src={Jag} alt="me" />
            </div>
            <HeaderSocial />
            <CTA />
        </div>


    </header>

  )
}

export default Header
