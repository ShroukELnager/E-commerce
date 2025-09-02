import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './MainSlider.css';

import HeroSection from './HeroSection';
import FreeShippingBanner from './FreeShippingBanner';

const MainSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      loop={true}
      className="main-slider"
    >
      <SwiperSlide>
        <HeroSection />
      </SwiperSlide>
      <SwiperSlide>
        <FreeShippingBanner />
      </SwiperSlide>
    </Swiper>
  );
};

export default MainSlider;
