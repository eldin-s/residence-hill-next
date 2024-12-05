"use client";

import React from "react";
import "./ThumbGallery.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Link from "next/link";
import Image from "next/image";

const ThumbGallery = () => {
  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 0,
            },
          }}
          className="gallery-slider"
        >
          <SwiperSlide>
            <Link target="_self" href="/assets/thumbGallery/6-min.jpg">
              <Image
                src="/assets/thumbGallery/6-min.jpg"
                alt="Residence Hill"
                width={500}
                height={500}
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link target="_self" href="/assets/thumbGallery/7-min.jpg">
              <Image
                src="/assets/thumbGallery/7-min.jpg"
                alt="Residence Hill"
                width={400}
                height={400}
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link target="_self" href="/assets/thumbGallery/4-min.jpg">
              <Image
                src="/assets/thumbGallery/4-min.jpg"
                alt="Residence Hill"
                width={400}
                height={400}
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link target="_self" href="/assets/thumbGallery/1-min.jpg">
              <Image
                src="/assets/thumbGallery/1-min.jpg"
                alt="Residence Hill"
                width={400}
                height={400}
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link target="_self" href="/assets/thumbGallery/2-min.jpg">
              <Image
                src="/assets/thumbGallery/2-min.jpg"
                alt="Residence Hill"
                width={400}
                height={400}
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link target="_self" href="/assets/thumbGallery/5-min.jpg">
              <Image
                src="/assets/thumbGallery/5-min.jpg"
                alt="Residence Hill"
                width={400}
                height={400}
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link target="_self" href="/assets/thumbGallery/3-min.jpg">
              <Image
                src="/assets/thumbGallery/3-min.jpg"
                alt="Residence Hill"
                width={400}
                height={400}
              />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default ThumbGallery;
