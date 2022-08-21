import React from 'react'
import './about.css';
import ME from '../../assets/profilepic.png'
import {FaAward} from 'react-icons/fa'
import {MdWork} from 'react-icons/md'
import {BsFillFolderFill} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>Sobre mim</h2>

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
              <h5>Experiência</h5>
              <small>Junior</small>
            </article>

            <article className='about__card'>
              <MdWork className='about__icon' />
              <h5>Work</h5>
              <small>Intelligence Kapital</small>
            </article>

            <article className='about__card'>
              <BsFillFolderFill className='about__icon' />
              <h5>Projetos</h5>
              <small>+40 Projetos</small>
            </article>
          </div>

          <p>
            Sou um apaixonado pela área de programação e tecnologia, por toda a gama de oportunidades de fazer acontecer que ela proporciona e pela a chance de poder impactar positivamente a sociedade.
            <br />Ingressei no curso de Engenharia de Software na UniCV e estou me especializando em Backend pela Gama Academy.
            <br />Gosto de estudar e aprender idiomas. Tenho fluência em Inglês e Francês e estudo italiano e japonês. <br />Sou uma pessoa amante do conhecimento, gosto de novos desafios, aprender novos assuntos, estudar idiomas, conhecer novas culturas e busco impactar positivamente a sociedade como um todo.
          </p>

          <a href="#contact" className='btn btn-primary'>Entre em Contato</a>
        </div>
      </div>
    </section>
  )
}

export default About