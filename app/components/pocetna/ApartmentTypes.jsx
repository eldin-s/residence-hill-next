"use client";

import React from "react";
import "./ApartmantTypes.css";
import slide1 from "../../assets/slide1-min.jpg";
import slide2 from "../../assets/slide2-min.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import ApartmantTypesColumn from "./ApartmentTypesColumn";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";

const ApartmentTypes = () => {
  return (
    <div className="apartmants_types-section">
      <div className="slides-img">
        <div data-aos="zoom-in-left" data-aos-delay="100">
          <Swiper
            modules={[Navigation, EffectFade, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            effect="fade"
          >
            <SwiperSlide>
              <Image
                src={slide1}
                alt="Rresidence Hill Interijer"
                width={1100}
                height={650}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={slide2}
                alt="Rresidence Hill Interijer"
                width={1100}
                height={650}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <ApartmantTypesColumn />
    </div>
  );
};

export default ApartmentTypes;
