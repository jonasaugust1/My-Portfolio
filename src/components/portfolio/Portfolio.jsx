import React, { useEffect, useState } from 'react';
import './portfolio.css';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { getStaticProps } from '../..';
import { projects } from '../../projects/projects';
import { ProjectCarousel } from './ProjectCarousel';
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  const { t } = useTranslation();
  const [pinnedItems, setPinnedItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getStaticProps()
      .then(data => {
        setPinnedItems(data.props.pinnedItems);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section id='portfolio'>
      <h5>{t('portfolio-real-cases')}</h5>
      <h2>{t('portfolio-title')}</h2>

      <ProjectCarousel
        items={projects}
        renderSlide={(item) => (
          <SwiperSlide key={item.id} className='portfolio__item'>
            <div className='portfolio__item-container'>
              <h3>{t(item.title)}</h3>

              <p style={{ marginBottom: '3%' }}>
                {t(item.description)}
              </p>

              {item.image?.length > 0 && (
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />
              )}

              <div className='portfolio__container__item-language'>
                {item.technologies.map((tech, i) => (
                  <div key={i} className='portfolio__item-language'>
                    <span className='portfolio__item-technology'>
                      {tech}
                    </span>
                  </div>
                ))}
              </div>

              <div className='portfolio__item-cta'>
                {item.playStore && (
                  <a
                    href={item.playStore}
                    aria-label='Play Store'
                    target='_blank'
                    rel='noreferrer'
                    className='btn btn-primary'
                  >
                    Play Store
                  </a>
                )}

                {item.appStore && (
                  <a
                    href={item.appStore}
                    aria-label='App Store'
                    target='_blank'
                    rel='noreferrer'
                    className='btn btn-primary btn-sm'
                  >
                    App Store
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        )}
      />

      <h5 style={{ marginTop: '5%' }}>
        {t('portfolio-other-works')}
      </h5>

      <h2>{t('portfolio-projects')}</h2>

      {
        loading ?
          <div className="portfolio__loading">Carregando projetos do GitHub...</div> :
          <ProjectCarousel
            items={pinnedItems}
            renderSlide={(item) => (
              <SwiperSlide key={item.id} className='portfolio__item'>
                <div className='portfolio__item-container'>
                  <h3>{item.name}</h3>

                  <p>
                    {t(
                      `portfolio.githubProjects.${item.name}.description`
                    )}
                  </p>

                  <div
                    className='portfolio__item-language'
                    style={{ backgroundColor: item.primaryLanguage.color }}
                  >
                    <span>{item.primaryLanguage.name}</span>
                  </div>

                  <div className='portfolio__item-cta'>
                    <a
                      href={item.url}
                      aria-label='Github'
                      target='_blank'
                      rel='noreferrer'
                      className='btn'
                    >
                      Github
                    </a>

                    {item.homepageUrl && (
                      <a
                        href={item.homepageUrl}
                        aria-label={t('live-demo')}
                        target='_blank'
                        rel='noreferrer'
                        className='btn btn-primary'
                      >
                        {t('live-demo')}
                      </a>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            )}
          />
      }
    </section>
  );
};

export default Portfolio;