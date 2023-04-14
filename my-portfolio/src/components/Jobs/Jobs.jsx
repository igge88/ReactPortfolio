import React from 'react'
import './Jobs.css'
import {MdWorkHistory} from 'react-icons/md'

const Services = () => {
  return (
    <section id='jobs'>
        <h5>My Recent</h5>
        <h2>Work Experiences</h2>

        <div className='container jobs__container'>
            <article className='jobs'>
                <div className='jobs__header'>
                    <h3>Digital Analyst</h3>
                </div>

                <ul className='jobs_list'>
                    <li>
                        <MdWorkHistory className='jobs__list-icon'/>
                        <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
                    </li>
                    <li>
                        <MdWorkHistory className='jobs__list-icon'/>
                        <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
                    </li>
                    <li>
                        <MdWorkHistory className='jobs__list-icon'/>
                        <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
                    </li>

                </ul>
            </article>
            {/* END OF DA*/}
            <article className='jobs'>
                <div className='jobs__header'>
                    <h3>Marketing Automatiion Specialist</h3>
                </div>

                <ul className='jobs_list'>
                    <li>
                        <MdWorkHistory className='jobs__list-icon'/>
                        <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
                    </li>
                    <li>
                        <MdWorkHistory className='jobs__list-icon'/>
                        <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
                    </li>
                    <li>
                        <MdWorkHistory className='jobs__list-icon'/>
                        <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
                    </li>
                </ul>
            </article>
            {/* END OF MA*/}
            <article className='jobs'>
                <div className='jobs__header'>
                    <h3>Warehouse Operator</h3>
                </div>

                <ul className='jobs_list'>
                    <li>
                        <MdWorkHistory className='jobs__list-icon'/>
                        <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
                    </li>
                    <li>
                        <MdWorkHistory className='jobs__list-icon'/>
                        <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
                    </li>
                    <li>
                        <MdWorkHistory className='jobs__list-icon'/>
                        <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
                    </li>
                </ul>
            </article>
            {/* {/* END OF WO*/}
        </div>

    </section>
  )
}

export default Services
