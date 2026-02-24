import React from 'react';
import './experience.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience">
      <h5>{t('experience-section-title-small')}</h5>
      <h2>{t('experience-section-title')}</h2>

      <div className='container experience__container'>

        {/* FRONTEND */}
        <div className='experience__frontend'>
          <h3>{t('frontend-development')}</h3>

          <div className='experience__content'>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>
                  {t('experienced-at', { companies: 'Sinqia & MTM' })}
                </small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>React Native</h4>
                <small className='text-light'>
                  {t('experienced-at', { companies: 'ZTaurus' })}
                </small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>TypeScript</h4>
                <small className='text-light'>
                  {t('experienced-at', { companies: 'Sinqia & MTM' })}
                </small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Angular</h4>
                <small className='text-light'>
                  {t('experienced-at', { companies: 'Sinqia & MTM' })}
                </small>
              </div>
            </article>

          </div>
        </div>

        {/* BACKEND */}
        <div className='experience__backend'>
          <h3>{t('backend-development')}</h3>

          <div className='experience__content'>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>.NET</h4>
                <small className='text-light'>
                  {t('experienced-at', { companies: 'XP & Sinqia' })}
                </small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Azure</h4>
                <small className='text-light'>
                  {t('experienced-at', { companies: 'XP' })}
                </small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Visual Basic</h4>
                <small className='text-light'>
                  {t('experienced-at', { companies: 'Sinqia' })}
                </small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Oracle</h4>
                <small className='text-light'>
                  {t('experienced-at', { companies: 'Sinqia & MTM' })}
                </small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Node.js</h4>
                <small className='text-light'>
                  {t('experienced-at', { companies: 'MTM' })}
                </small>
              </div>
            </article>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;