import React from 'react'
import './portfolio.css'
//import Bild1 from '../../assets/'
//import Bild2 from '../../assets/'
//import Bild3 from '../../assets/'

const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Projects</h5>
        <h2>Portfolio</h2>

        <div className='container portfolio_container'>
            <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                    
                </div>
                <h3>Project Title</h3>
                <a href="https://github.com/igge88" className='btn' target='_blank'>Github</a>
                <a href="https://dribbble.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
            </article>
        </div>
    </section>
  )
}

export default Portfolio
