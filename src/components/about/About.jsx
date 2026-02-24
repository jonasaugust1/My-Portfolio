import React from 'react';
import './about.css';
import ME from '../../assets/profilepic.webp';
import { FaAward } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import { BsFillFolderFill } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id='about'>
      <h5>{t('get-to-know-me')}</h5>
      <h2>{t('about-me')}</h2>

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
              <h5>{t('experience')}</h5>
              <small>{t('years')}</small>
            </article>

            <article className='about__card'>
              <MdWork className='about__icon' />
              <h5>{t('work')}</h5>
              <small>
                <a href='https://www.avanade.com' target='_blank' rel="noreferrer">
                  Avanade
                </a>
              </small>
            </article>

            <article className='about__card'>
              <BsFillFolderFill className='about__icon' />
              <h5>{t('projects')}</h5>
              <small>{t('projects-count')}</small>
            </article>
          </div>

          <p>
            {t('about-description')}
          </p>
          <a href="#contact" className='btn btn-primary'>{t('contact')}</a>
        </div>
      </div>
    </section>
  );
};

export default About;