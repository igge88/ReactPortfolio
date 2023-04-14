import React from 'react'
import './experience.css'
import {FiCheckSquare} from 'react-icons/fi'

const Experience = () => {
  return (
    <section id='experience'>
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>

        <div className='container experience__container'>
            <div className='experience__frontend'>
                <h3>Frontend Development</h3>
                <div className='experience__content'>
                    <article className='experience__details'>
                        <FiCheckSquare className='experience__icon'/>
                        <div>
                          <h4>HTML</h4>
                          <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <FiCheckSquare className='experience__icon'/>
                       <div>
                       <h4>CSS</h4>
                        <small className='text-light'>Intermediate</small>
                       </div>
                    </article>
                    <article className='experience__details'>
                        <FiCheckSquare className='experience__icon'/>
                       <div>
                       <h4>JavaScript</h4>
                        <small className='text-light'>Intermediate</small>
                       </div>
                    </article>
                    <article className='experience__details'>
                        <FiCheckSquare className='experience__icon'/>
                        <div>
                        <h4>VUE</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <FiCheckSquare className='experience__icon'/>
                        <div>
                        <h4>REACT</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <FiCheckSquare className='experience__icon'/>
                        <div>
                        <h4>Bootstrap</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                </div>
            </div>
            <div className='experience__digitalmarketing'>
            <h3>Digital Analytics & Marketing</h3>
                <div className='experience__content'>
                    <article className='experience__details'>
                        <FiCheckSquare className='experience__icon'/>
                        <div>
                        <h4>SEO</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <FiCheckSquare className='experience__icon'/>
                        <div>
                        <h4>CRO</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <FiCheckSquare className='experience__icon'/>
                       <div>
                       <h4>Google Analytics</h4>
                        <small className='text-light'>Intermediate</small>
                       </div>
                    </article>
                    <article className='experience__details'>
                        <FiCheckSquare className='experience__icon'/>
                        <div>
                        <h4>Google Tag Manager</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <FiCheckSquare className='experience__icon'/>
                        <div>
                        <h4>Data Visualization</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <FiCheckSquare className='experience__icon'/>
                        <div>
                        <h4>Marketing Automation</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience
