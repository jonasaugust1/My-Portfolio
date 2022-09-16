import React from 'react'
import './about.css';
import ME from '../../assets/profilepic.png'
import { FaAward } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'
import { BsFillFolderFill } from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>Junior</small>
            </article>

            <article className='about__card'>
              <MdWork className='about__icon' />
              <h5>Work</h5>
              <small>Intelligence Kapital</small>
            </article>

            <article className='about__card'>
              <BsFillFolderFill className='about__icon' />
              <h5>Projects</h5>
              <small>+60 Projects</small>
            </article>
          </div>

          <p>
            Jonas is passionate about programming and technology, because of the full range of opportunities to make things happen and for positively impacting society.
            <br />He joined the Software Engineering course at UniCV and is specializing in Backend at Gama Academy.
            Jonas is a language lover and is fluent in English and French, studying Italian and Japanese.
            <br />He is a knowledge-loving person, enjoys new challenges, learning new subjects, studying languages, getting to know new cultures and actively seeking to positively impact society as a whole.
          </p>

          <a href="#contact" className='btn btn-primary'>Entre em Contato</a>
        </div>
      </div>
    </section>
  )
}

export default About