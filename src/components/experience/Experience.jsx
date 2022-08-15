import React from 'react'
import './experience.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>Quais Habilidades Eu Tenho</h5>
      <h2>Minha Experiência</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Desenvolvimento Frontend</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced Gama Academy</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced Gama Academy</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Experienced Gama Academy</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced Code Academy</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className='experience__backend'>
          <h3>Desenvolvimento Backend</h3>
          <div className='experience__content'>
            <article className='experience__details'>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <div>
                  <h4>Node JS</h4>
                  <small className='text-light'>Experienced Gama Academy</small>
                </div>
            </article>

            <article className='experience__details'>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <div>
                  <h4>C#</h4>
                  <small className='text-light'>Experienced Code Academy</small>
                </div>
            </article>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experienced Alura</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Experienced Gama Academy</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience