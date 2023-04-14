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

                <ul className='jobs__list'>
                    <li>
                        <MdWorkHistory className='jobs__list-icon'/>
                        <p>Internship Sep 2020 - Nov 2020 <br /> Cure Media</p>
                    </li>
                    <li>
                        <MdWorkHistory className='jobs__list-icon'/>
                        <p>Internship Feb 2020 - Apr 2020 <br /> Everworks International</p>
                    </li>

                </ul>
            </article>
            {/* END OF DA*/}
            <article className='jobs'>
                <div className='jobs__header'>
                    <h3>Marketing Automatiion Specialist</h3>
                </div>

                <ul className='jobs__list'>
                    <li>
                        <MdWorkHistory className='jobs__list-icon'/>
                        <p>Aug 2019 - Juni 2020 <br /> Halebop</p>
                    </li>
                    <li>
                        <MdWorkHistory className='jobs__list-icon'/>
                        <p>Internship Jan 2019 - Apr 2019 <br /> Halebop</p>
                    </li>
                    <li>
                        <MdWorkHistory className='jobs__list-icon'/>
                        <p>Internship Mars 2018 - Maj 2018 <br />FMG - Framtidsmediagruppen </p>
                    </li>
                </ul>
            </article>
            {/* END OF MA*/}
            <article className='jobs'>
                <div className='jobs__header'>
                    <h3>Warehouse Operator & Admin</h3>
                </div>

                <ul className='jobs__list'>
                    <li>
                        <MdWorkHistory className='jobs__list-icon'/>
                        <p>Aug 2010 - Aug 2022 <br /> TD SYNNEX Sweden</p>
                    </li>
                    <li>
                        <MdWorkHistory className='jobs__list-icon'/>
                        <p>Sep 2022 - Now <br /> Manpower Student </p>
                    </li>

                </ul>
            </article>
            {/* {/* END OF WO*/}
        </div>

    </section>
  )
}

export default Services
