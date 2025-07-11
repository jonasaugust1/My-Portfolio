import React from 'react';
import PropTypes from 'prop-types';
import { Swiper } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

export const ProjectCarousel = ({ items, renderSlide }) => (
  <Swiper
    className='container portfolio__container'
    modules={[Pagination, Navigation]}
    spaceBetween={40}
    slidesPerView={1}
    autoHeight={true}
    navigation
    pagination={{ clickable: true }}
  >
    {items.map(renderSlide)}
  </Swiper>
);

ProjectCarousel.propTypes = {
  items: PropTypes.array.isRequired,
  renderSlide: PropTypes.func.isRequired,
};
