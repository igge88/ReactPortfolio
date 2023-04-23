import React from 'react'
import './footerStyle.css'
import {AiOutlineGithub} from 'react-icons/ai'
import {FaFacebookSquare} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {FaHeart} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>

<div className="footer_socials">
            <a href="https://github.com/igge88"><AiOutlineGithub /></a>
            <a href="https://www.facebook.com/nacho.t.troncoso"><FaFacebookSquare /></a>
            <a href="https://twitter.com/"><AiOutlineTwitter /></a>
            <a href="https://www.linkedin.com/in/ignacio-tapia-troncoso-01b07710b/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        </div>

        <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#jobs">Work Experiences</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div className='made_by'>
          <h5>Made with <FaHeart /> by Ignacio Tapia</h5>
        </div>

    </footer>
  )
}

export default Footer
