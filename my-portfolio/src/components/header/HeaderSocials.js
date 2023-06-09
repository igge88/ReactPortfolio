import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub, FaFacebookSquare} from 'react-icons/fa'
import {FiTwitter} from 'react-icons/fi'

function HeaderSocials() {
  return (
    <div className="header_socials">
        <div className='social_github'>
        <a href="https://github.com/igge88" target="_blank" rel="noreferrer"><FaGithub/></a>
        </div>
       <div className='social_linkedIn'>
       <a href="https://www.linkedin.com/in/ignacio-tapia-troncoso-01b07710b/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
       </div>
        <div className='social_twitter'>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><FiTwitter/></a>
        </div>
        <div className='social_twitter'>
         <a href="https://www.facebook.com/nacho.t.troncoso"><FaFacebookSquare /></a>
        </div>
    </div>
  )
}

export default HeaderSocials
