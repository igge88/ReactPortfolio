import React from 'react'
import './footer.css'
import {AiOutlineGithub} from 'react-icons/ai'
import {FaFacebookSquare} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <a href="#" className='footer_logo'>AKA IGGE</a>

        <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#jobs">Work Experiences</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer_socials">
            <a href="https://github.com/igge88"><AiOutlineGithub /></a>
            <a href="https://www.facebook.com/nacho.t.troncoso"><FaFacebookSquare /></a>
            <a href="https://twitter.com/"><AiOutlineTwitter /></a>
        </div>

        <div className='footer_copyrigth'>
            <small>&copy; All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer
