import React from 'react'
import './experienceStyles.css'
import {FiCheckSquare} from 'react-icons/fi'

function Experience() {
  return (
    <section id='experience'>
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>

        <div className='container experience_container'>
            <div className='experience_frontend'>
                <h3>Frontend Development</h3>
                <div className='experience_content'>
                    <article className='experience_details'>
                        <FiCheckSquare className='experience_icon'/>
                        <div>
                          <h4>HTML</h4>
                          <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='experience_details'>
                        <FiCheckSquare className='experience_icon'/>
                       <div>
                       <h4>CSS</h4>
                        <small className='text-light'>Intermediate</small>
                       </div>
                    </article>
                    <article className='experience_details'>
                        <FiCheckSquare className='experience_icon'/>
                       <div>
                       <h4>JavaScript</h4>
                        <small className='text-light'>Intermediate</small>
                       </div>
                    </article>
                    <article className='experience_details'>
                        <FiCheckSquare className='experience_icon'/>
                        <div>
                        <h4>VUE</h4>
                        <small className='text-light'>Beginner</small>
                        </div>
                    </article>
                    <article className='experience_details'>
                        <FiCheckSquare className='experience_icon'/>
                        <div>
                        <h4>REACT</h4>
                        <small className='text-light'>Beginner</small>
                        </div>
                    </article>
                    <article className='experience_details'>
                        <FiCheckSquare className='experience_icon'/>
                        <div>
                        <h4>UX/UI</h4>
                        <small className='text-light'>Beginner</small>
                        </div>
                    </article>
                </div>
            </div>
            <div className='experience_digitalmarketing'>
            <h3>Digital Analytics & Marketing</h3>
                <div className='experience_content'>
                    <article className='experience_details'>
                        <FiCheckSquare className='experience_icon'/>
                        <div>
                        <h4>SEO</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='experience_details'>
                        <FiCheckSquare className='experience_icon'/>
                        <div>
                        <h4>CRO</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='experience_details'>
                        <FiCheckSquare className='experience_icon'/>
                       <div>
                       <h4>Google Analytics</h4>
                        <small className='text-light'>Intermediate</small>
                       </div>
                    </article>
                    <article className='experience_details'>
                        <FiCheckSquare className='experience_icon'/>
                        <div>
                        <h4>Google Tag Manager</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='experience_details'>
                        <FiCheckSquare className='experience_icon'/>
                        <div>
                        <h4>Data Visualization</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='experience_details'>
                        <FiCheckSquare className='experience_icon'/>
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
