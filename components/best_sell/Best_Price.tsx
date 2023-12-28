"use client";
import React, { CSSProperties } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import DemoCard from "./DemoCard";
import { Autoplay, Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

const Best_Price = () => {

    const slideStyles: CSSProperties = {
        boxSizing: 'border-box',
        maxWidth: '350px',
      };
      

    const sliderSettings: SwiperOptions = {
        modules: [Navigation,Autoplay],
        spaceBetween: 10,
        slidesPerView: 'auto',
        speed: 1000,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
      };


  return (
    <div>
      <Swiper {...sliderSettings} style={{ width: '100%', height: '100%' }}>
        <SwiperSlide style={slideStyles}>
          <DemoCard />
        </SwiperSlide>
        <SwiperSlide style={slideStyles}>
          <DemoCard />
        </SwiperSlide>
        <SwiperSlide style={slideStyles}>
          <DemoCard />
        </SwiperSlide>
        <SwiperSlide style={slideStyles}>
          <DemoCard />
        </SwiperSlide>
        <SwiperSlide style={slideStyles}>
          <DemoCard />
        </SwiperSlide>
        <SwiperSlide style={slideStyles}>
          <DemoCard />
        </SwiperSlide>
        <SwiperSlide style={slideStyles}>
          <DemoCard />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Best_Price;
