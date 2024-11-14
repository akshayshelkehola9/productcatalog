import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Hero.css'; 
import { Navigation, Autoplay } from 'swiper/modules';
import slideimg1 from './assets/images/slideimg1.jpg';
import slideimg2 from './assets/images/slideimg2.jpg';
import slideimg4 from './assets/images/slideimg4.jpg';



const Hero = () => {
  return (
    <section className="hero-section">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000 }}
        loop={true}
        className="hero-carousel"
      >
        <SwiperSlide className="hero-slide">
          <img
            src={slideimg1}
            alt="Hero Slide 1"
            className="hero-image"
          />
        </SwiperSlide>
        <SwiperSlide className="hero-slide">
          <img
            src={slideimg2}
            alt="Hero Slide 2"
            className="hero-image"
          />
        </SwiperSlide>
        <SwiperSlide className="hero-slide">
          <img
            src={slideimg4}
            alt="Hero Slide 3"
            className="hero-image"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
