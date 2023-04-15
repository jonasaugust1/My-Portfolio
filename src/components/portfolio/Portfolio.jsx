import React, { useEffect, useState } from 'react';
import './portfolio.css';
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { getStaticProps } from '../..';

const Portfolio = () => {

  const [pinnedItems, setPinnedItems] = useState([]);

  useEffect(() => {
    getStaticProps().then(data => setPinnedItems(data.props.pinnedItems));
  }, []);

  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <Swiper className='container portfolio__container'
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {
          pinnedItems.map(item => {
            return (
              <SwiperSlide key={item.id} className='portfolio__item'>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className='portfolio__item-language' style={{ backgroundColor: item.primaryLanguage.color }}>
                  <span>{item.primaryLanguage.name}</span>
                </div>
                <div className='portfolio__item-cta'>
                  <a href={item.url} target='_blank' rel='noreferrer' className='btn'>GitHub</a>
                  {item.homepageUrl && <a href={item.homepageUrl} target='_blank' rel='noreferrer' className='btn btn-primary'>Live Demo</a>}
                </div>
              </SwiperSlide>
            );
          })
        }
      </Swiper>
    </section>
  );
};


export default Portfolio;

