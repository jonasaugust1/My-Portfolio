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
              <small>2 years</small>
            </article>

            <article className='about__card'>
              <MdWork className='about__icon' />
              <h5>Work</h5>
              <small>
                <a href='https://sinqia.com.br/' target='_blank' rel="noreferrer">
                  Sinqia
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
            I am a full-stack developer passionate about creating innovative and efficient solutions. 
            With a wide range of skills in my arsenal, I specialize in various technologies, including 
            C#, Visual Basic, TypeScript, Node.js, Angular, React, React Native, and .NET.
            <br />
            <br />
            My professional journey has led me to work at Sinqia, where I am part of a dynamic team 
            developing solutions for the pension industry. Here, I have the opportunity to apply my 
            technical expertise to create robust and scalable systems, catering to the specific needs of the sector.
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