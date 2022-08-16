import React from 'react'
import './portfolio.css'
import FM from '../../assets/findmovies.png'
import JM from '../../assets/jammming.png'
import PL from '../../assets/petlover.png'
import FC from '../../assets/flashcards.png'

const data = [
  {
    id: 1,
    image: FM,
    title: "Find Movies",
    github: "https://github.com/jonasaugust1/Find-Movies",
    demo: "https://findmovie-project.netlify.app/"
  },
  {
    id: 2,
    image: JM,
    title: "Jammming",
    github: "https://github.com/jonasaugust1/Jammming",
    demo: "https://jammming-jonash.surge.sh/"
  },
  {
    id: 3,
    image: PL,
    title: "Pet Lover",
    github: "https://github.com/jonasaugust1/Pet-Lover",
    demo: "https://petlover-react.surge.sh/"
  },
  {
    id: 4,
    image: FC,
    title: "Flash Cards",
    github: "https://github.com/jonasaugust1/flashcards",
    demo: "https://react-flashcards-project.netlify.app/"
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Meus Trabalhos Recentes</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} target='_blank' rel='noreferrer' className='btn'>GitHub</a>
                  <a href={demo} target='_blank' rel='noreferrer' className='btn btn-primary'>Live Demo</a>
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

