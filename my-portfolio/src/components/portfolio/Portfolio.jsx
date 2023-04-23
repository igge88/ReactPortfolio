import React from 'react'
import './portfolio.css'
import Bild1 from '../../assets/NewRetro.jpg'
import Bild2 from '../../assets/R2D2.jpg'
import Bild3 from '../../assets/Aventuras.jpg'
import Bild4 from '../../assets/Figma.jpg'
import Bild5 from '../../assets/SpotifyApp.jpg'

const data = [
    {
        id: 1,
        image: Bild1,
        title: 'A HTML & CSS website',
        github: 'https://github.com/igge88/Lab1',
        demo: 'http://studentiths.se/JSUFEU-STHLM/IgnacioT/NewRetro/'
    },
    {
        id: 2,
        image: Bild2,
        title: 'A VUE project with APIs',
        github: 'https://github.com/igge88/R2D2App',
        demo: 'https://igge88.github.io/R2D2App/'
    },
    {
        id: 3,
        image: Bild3,
        title: 'A group project with VUE',
        github: 'https://github.com/vikluund/Team1',
        demo: 'https://github.com/vikluund/Team1'
    },
    {
        id: 4,
        image: Bild4,
        title: 'A UX/UI group project - Designsystem',
        github: 'https://github.com/igge88/Lab2',
        demo: 'https://github.com/igge88/Lab2'
    },
    {
        id: 5,
        image: Bild5,
        title: 'A JavaScript project - Spotify API',
        github: 'https://github.com/igge88',
        demo: 'https://figma.com/'
    },


]

const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Projects</h5>
        <h2>Portfolio</h2>

        <div className='container portfolio_container'>
           {
            data.map(({id, image, title, github, demo}) => {
                return (
                    <article key={id} className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={image} alt={title} />
                    </div>
                    <h3>{title}</h3>
                    <div className="portfolio_item-cta">
                      <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                      <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>
                )
            })
           }

        </div>
    </section>
  )
}

export default Portfolio
