import React from 'react'
import './about.css'
import ME from '../../assets/jag.jpg'
import {BsAward} from 'react-icons/bs'
import {MdOutlineWorkHistory} from 'react-icons/md'
import {AiOutlineProject} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className='container about__container'>
            <div className='about__me'>
                <div className='about__me-image'>
                    <img src={ME} alt="AboutImage" />
                </div>
            </div>

            <div className='about__content'>
                <div className='about__cards'>
                    <article className='about__card'>
                        <BsAward className='about__icon'/>
                        <h5>Experience</h5>

                    </article>
                    <article className='about__card'>
                        <MdOutlineWorkHistory className='about__icon'/>
                        <h5>Work & Internships</h5>

                    </article>
                    <article className='about__card'>
                        <AiOutlineProject className='about__icon'/>
                        <h5>Projects</h5>
                    
                    </article>
                </div>

                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum eos a odio laboriosam magnam, fugit cupiditate natus adipisci perspiciatis quidem inventore reprehenderit modi! Consequatur molestias omnis totam? Eos, fugit impedit.
                </p>

                <a href="#contact" className='btn btn-primary'>Let's Talk</a>

            </div>
        </div>
    </section>
  )
}

export default About
