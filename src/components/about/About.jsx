import React from 'react';
import './about.css';
import ME from '../../assets/profilepic.webp';
import { FaAward } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import { BsFillFolderFill } from 'react-icons/bs';

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
              <small>+2 years</small>
            </article>

            <article className='about__card'>
              <MdWork className='about__icon' />
              <h5>Work</h5>
              <small>
                <a href='https://www.xpi.com.br' target='_blank' rel="noreferrer">
                  XP Inc
                </a> 
              </small>
            </article>

            <article className='about__card'>
              <BsFillFolderFill className='about__icon' />
              <h5>Projects</h5>
              <small>+90 Projects</small>
            </article>
          </div>

          <p>
            From an early age, I have been fascinated by the ability of technology to transform the world around us. I chose to become a software developer because I believe in the power of creating solutions that positively impact the lives of millions of people. The possibility of streamlining various aspects of daily life and speeding up processes motivates me with every line of code I write.

            My journey in the development field is guided by the desire to break patterns and find new ways of doing things. Contributing to innovative projects is what drives me, and I am always looking for opportunities to apply my skills to initiatives that truly make a difference.
            <br />
            <br />
            Feel free to reach out to me to discuss collaboration opportunities, networking, 
            or simply to exchange ideas about the exciting world of software development. 
            Let&apos;s build something amazing together!
          </p>
          <a href="#contact" className='btn btn-primary'>Get in touch</a>
        </div>
      </div>
    </section>
  );
};

export default About;