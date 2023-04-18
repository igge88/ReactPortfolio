import React from 'react'
import './about.css'
import ME from '../../assets/jag.jpg'
import {BiStar} from 'react-icons/bi'
import {MdOutlineWorkHistory} from 'react-icons/md'
import {RiReactjsLine} from 'react-icons/ri'

const About = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className='container about__container'>

            <div className='about__content'>
                <div className='about__cards'>
                    <article className='about__card'>
                        <BiStar className='about__icon'/>
                        <h5>Experience</h5>
                    </article>
                    <article className='about__card'>
                        <MdOutlineWorkHistory className='about__icon'/>
                        <h5>Work & Internships</h5>

                    </article>
                    <article className='about__card'>
                        <RiReactjsLine className='about__icon'/>
                        <h5>Projects</h5>

                    </article>
                </div>
                <p>
                I’am currently in my second semester out of four at  IT-Högskolans Frontend Developer training and soon it will be time for me to go into my first internship. I'am looking for an internship where I can grow and develop in my new professional role as a developer.
                </p>
                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
            <div className='about__me'>
                <div className='about__me-image'>
                    <img src={ME} alt="AboutImage" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
