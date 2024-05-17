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
// import { Link } from 'react-router-dom'
import CTAabout from './CTAabout'

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
                        As a final-semester student specializing in Front-End
                        Development, I am deeply passionate about creating
                        intuitive and dynamic user interfaces. With a keen eye
                        for design and detail, I enjoy the entire developmental
                        process from conceptualization to the final stages of
                        deployment. I find motivation in addressing challenges
                        and delivering functional end-products that meet user
                        needs. Eager to bring my technical skills and fresh
                        perspectives to a forward-thinking team! <br /> <br />{' '}
                        Feel free to contact me if you want to talk!
                    </p>
                    {/* <Link to="/#contact" className="btn btn-primary">
                        Contact me
                    </Link> */}
                    <CTAabout />
                </div>
            </div>
        </section>
    )
}

export default About
