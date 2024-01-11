import React from 'react'
import './jobsStyles.css'
import { MdWorkHistory } from 'react-icons/md'

function MyJobs() {
    return (
        <section id="jobs">
            <h5>My Recent</h5>
            <h2>Work Experiences</h2>

            <div className="container jobs__container">
                <article className="jobs">
                    <div className="jobs__header">
                        <h3>FrontEnd Developer</h3>
                    </div>

                    <ul className="jobs__list">
                        <li>
                            <MdWorkHistory className="jobs__list-icon" />
                            <p>
                                Internship Aug 2023 - Okt 2023 <br /> All Aboard
                            </p>
                        </li>
                    </ul>
                </article>
                <article className="jobs">
                    <div className="jobs__header">
                        <h3>Digital Analyst</h3>
                    </div>

                    <ul className="jobs__list">
                        <li>
                            <MdWorkHistory className="jobs__list-icon" />
                            <p>
                                Internship Sep 2020 - Nov 2020 <br /> Cure Media
                            </p>
                        </li>
                        <li>
                            <MdWorkHistory className="jobs__list-icon" />
                            <p>
                                Internship Feb 2020 - Apr 2020 <br /> Everworks
                                International
                            </p>
                        </li>
                    </ul>
                </article>
                <article className="jobs">
                    <div className="jobs__header">
                        <h3>Marketing Automatiion Specialist</h3>
                    </div>

                    <ul className="jobs__list">
                        <li>
                            <MdWorkHistory className="jobs__list-icon" />
                            <p>
                                Aug 2019 - Juni 2020 <br /> Halebop (Telia)
                            </p>
                        </li>
                        <li>
                            <MdWorkHistory className="jobs__list-icon" />
                            <p>
                                Internship Jan 2019 - Apr 2019 <br /> Halebop
                                (Telia){' '}
                            </p>
                        </li>
                        <li>
                            <MdWorkHistory className="jobs__list-icon" />
                            <p>
                                Internship Mars 2018 - Maj 2018 <br />
                                FMG - Framtidsmediagruppen{' '}
                            </p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default MyJobs
