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
              <small>+1 year</small>
            </article>

            <article className='about__card'>
              <MdWork className='about__icon' />
              <h5>Work</h5>
              <small>Sinqia</small>
            </article>

            <article className='about__card'>
              <BsFillFolderFill className='about__icon' />
              <h5>Projects</h5>
              <small>+90 Projects</small>
            </article>
          </div>

          <p>
            As a software engineering student, 
            I am passionate about technology and always seeking new ways to create innovative and 
            efficient solutions in software development. With one year of professional experience 
            and currently employed at Sinqia, I have been honing my skills in software development, 
            delivering high-quality work in fast-paced environments.
            <br />
            <br />
            I am constantly searching for new challenges and growth opportunities, 
            with a deep interest in the latest industry trends and technologies. 
            My goal is to continuously expand my knowledge and skills to stay ahead of the curve 
            and create solutions that positively impact society.
            <br />
            <br />
            With my strong problem-solving skills and attention to detail, 
            I am able to tackle complex challenges and ensure project success. 
            I enjoy working on challenging projects and contributing to the success of the 
            team and organization.
            <br />
            <br />
            I believe that technology has the power to transform society and I am committed to contributing to this process.
          </p>

          <a href="#contact" className='btn btn-primary'>Get in touch</a>
        </div>
      </div>
    </section>
  );
};

export default About;