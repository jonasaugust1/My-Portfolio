import React from 'react'
import './portfolio.css'
import FM from '../../assets/findmovies.webp'
import JM from '../../assets/jammming.webp'
import PL from '../../assets/petlover.webp'
import FC from '../../assets/flashcards.webp'
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

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

      <Swiper className='container portfolio__container'
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <SwiperSlide key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} target='_blank' rel='noreferrer' className='btn'>GitHub</a>
                  <a href={demo} target='_blank' rel='noreferrer' className='btn btn-primary'>Live Demo</a>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}


export default Portfolio

