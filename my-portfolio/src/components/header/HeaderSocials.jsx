import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiTwitter} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/ignacio-tapia-troncoso-01b07710b/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/igge88" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><FiTwitter/></a>
    </div>
  )
}

export default HeaderSocials
