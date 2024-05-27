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
                <a href='https://www.mtmtecnologia.com.br/' target='_blank' rel="noreferrer">
                  MTM
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
            Technology enthusiast with a passion for solving complex problems. 
            Started programming at the age of 17 and has consistently honed skills since then. 
            Proficient in various programming languages and frameworks, including .NET, Python, 
            Angular, React, React Native, Flutter, Node. Experienced in working with databases 
            such as Oracle, SQL Server, and MySQL. Familiar with agile methodologies, including 
            Scrum and Kanban. Skilled in developing scalable and flexible applications on Oracle 
            Cloud and Microsoft Azure. Currently employed as a Full stack Developer, contributing 
            to challenging and innovative projects. Committed to delivering high-quality solutions, 
            prioritizing customer satisfaction, and embracing continuous improvement. 
            Enjoys knowledge sharing and learning from peers.
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