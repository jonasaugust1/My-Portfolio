import React from 'react';
import './experience.css';
import {BsFillCheckCircleFill} from 'react-icons/bs';

const Experience = () => {
  return (
    <section id="experience">
      <h5>Wich skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div className='experience__details-container'>
                <h4>React</h4>
                <small className='text-light'>Experienced Sinqia and MTM</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div className='experience__details-container'>
                <h4>React Native</h4>
                <small className='text-light'>Experienced ZTaurus</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div className='experience__details-container'>
                <h4>Typescript</h4>
                <small className='text-light'>Experienced Sinqia and MTM</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div className='experience__details-container'>
                <h4>Angular</h4>
                <small className='text-light'>Experienced Sinqia and MTM</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div className='experience__details-container'>
                <h4>Node JS</h4>
                <small className='text-light'>Experienced MTM</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div className='experience__details-container'>
                <h4>C#</h4>
                <small className='text-light'>Experienced Sinqia</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div className='experience__details-container'>
                <h4>Visual Basic</h4>
                <small className='text-light'>Experienced Sinqia</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div className='experience__details-container'>
                <h4>Oracle</h4>
                <small className='text-light'>Experienced Sinqia</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;