/* VARIANT 1 (Without Props)
import React from 'react'
import './aboutStyles.css'
import Jag from '../../assets/jagAbout.jpg'
import {BiStar} from 'react-icons/bi'
import {MdOutlineWorkHistory} from 'react-icons/md'
import {RiReactjsLine} from 'react-icons/ri'
import {Link} from 'react-router-dom'

function About() {
  return (
    <section id='about'>

        <h2>About Me</h2>

        <div className='container about__container'>
        <div className='about__me'>
        <div className='about__me-image'>
                    <img src={Jag} alt="AboutImage" />
                </div>
            </div>
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
                <Link to="/#contact" className='btn btn-primary'>Contact me</Link>
            </div>

        </div>
    </section>
  )
}

export default About
*/

/* VARIANT 2 (With Props)
import React from 'react'
import './aboutStyles.css'
import Jag from '../../assets/jagAbout.jpg'
import { BiStar } from 'react-icons/bi'
import { MdOutlineWorkHistory } from 'react-icons/md'
import { RiReactjsLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

function About(props) {
    return (
        <section id="about">
            <h2>{props.title}</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={Jag} alt="AboutImage" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <BiStar className="about__icon" />
                            <h5>Experience</h5>
                        </article>
                        <article className="about__card">
                            <MdOutlineWorkHistory className="about__icon" />
                            <h5>Work & Internships</h5>
                        </article>
                        <article className="about__card">
                            <RiReactjsLine className="about__icon" />
                            <h5>Projects</h5>
                        </article>
                    </div>
                    <p>
                        I’am currently in my second semester out of four at
                        IT-Högskolans Frontend Developer training and soon it
                        will be time for me to go into my first internship. I'am
                        looking for an internship where I can grow and develop
                        in my new professional role as a developer.
                    </p>
                    <Link to="/#contact" className="btn btn-primary">
                        Contact me
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default About
*/

// VARIANT 3 (With Props)
import React from 'react'
import './aboutStyles.css'
import Jag from '../../assets/jagAbout2.jpg'
import { BiStar } from 'react-icons/bi'
import { MdOutlineWorkHistory } from 'react-icons/md'
import { RiReactjsLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

function About(props) {
    const { experience, work, projects } = props

    return (
        <section id="about">
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={Jag} alt="AboutImage" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <BiStar className="about__icon" />
                            <h5>{experience}</h5>
                        </article>
                        <article className="about__card">
                            <MdOutlineWorkHistory className="about__icon" />
                            <h5>{work}</h5>
                        </article>
                        <article className="about__card">
                            <RiReactjsLine className="about__icon" />
                            <h5>{projects}</h5>
                        </article>
                    </div>
                    <p>
                        My name is Ignacio and I am currently a student on a YH
                        training for FrontEnd development at the IT University
                        in Stockholm. Right now I am in my fourth and last
                        semester and facing my last internship period which
                        starts at the end of January 2024. It's an exciting time
                        for me as I'm actively looking for opportunities to use
                        and develop my FrontEnd development skills and hopefully
                        find long-term employment. <br /> <br /> Feel free to contact me if you want to talk!
                    </p>
                    <Link to="/#contact" className="btn btn-primary">
                        Contact me
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default About
