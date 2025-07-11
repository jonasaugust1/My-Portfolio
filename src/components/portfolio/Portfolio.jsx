import React, { useEffect, useState } from 'react';
import './portfolio.css';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { getStaticProps } from '../..';
import { projects } from '../../projects/projects';
import { ProjectCarousel } from './ProjectCarousel';

const Portfolio = () => {

  const [pinnedItems, setPinnedItems] = useState([]);

  useEffect(() => {
    getStaticProps().then(data => setPinnedItems(data.props.pinnedItems));
  }, []);

  return (
    <section id='portfolio'>
      <h5>Real Cases</h5>
      <h2>Portfolio</h2>

      <ProjectCarousel
        items={projects}
        renderSlide={(item) => (
          <SwiperSlide key={item.id} className='portfolio__item'>
            <div className='portfolio__item-container'>
              <h3>{item.title}</h3>
              <p style={{marginBottom: '3%'}}>{item.description}</p>
              {
                item.image.length > 0 ?
                  <img src={item.image}/> :
                  <></>
              }
              <div style={{display: 'flex'}}>
                {item.technologies.map((_, i) => {
                  return (
                    <div key={i} className='portfolio__item-language'>
                      <span className='portfolio__item-technology'>{item.technologies[i]}</span>
                    </div>
                  );
                })}
              </div>
              <div className='portfolio__item-cta'>
                {
                  item.playStore && 
                  <a 
                    href={item.playStore} 
                    target='_blank' 
                    rel='noreferrer' 
                    className='btn btn-primary'
                  >
                    Play Store
                  </a>
                }
                {
                  item.appStore && 
                  <a 
                    href={item.appStore} 
                    target='_blank' 
                    rel='noreferrer'
                    className='btn btn-primary'
                  >
                    App Store
                  </a>
                }
              </div>
            </div>
          </SwiperSlide>
        )}
      />

      <h5 style={{marginTop: '5%'}}>Other Works</h5>
      <h2>Projects</h2>

      <ProjectCarousel 
        items={pinnedItems}
        renderSlide={(item) => (
          <SwiperSlide key={item.id} className='portfolio__item'>
                <div className='portfolio__item-container'>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className='portfolio__item-language' style={{ backgroundColor: item.primaryLanguage.color }}>
                    <span>{item.primaryLanguage.name}</span>
                  </div>
                  <div className='portfolio__item-cta'>
                    <a href={item.url} target='_blank' rel='noreferrer' className='btn'>GitHub</a>
                    {item.homepageUrl && <a href={item.homepageUrl} target='_blank' rel='noreferrer' className='btn btn-primary'>Live Demo</a>}
                  </div>
                </div>
          </SwiperSlide>
        )}
      />
    </section>
  );
};

export default Portfolio;

