"use client";

import React, { useState } from "react";
import "./Slider.css";

import { VscKey } from "react-icons/vsc";
import { BsPhoneVibrate } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import Button from "../ui/Button";

export const Slider = () => {
  const [sliderIdx, setSliderIdx] = useState(1);

  const slideToNext = () => {
    const isLastSlide = sliderIdx === 3;
    const newIdx = isLastSlide ? 1 : sliderIdx + 1;
    setSliderIdx(newIdx);
  };

  const slideToPrev = () => {
    const isFirstSlide = sliderIdx === 1;
    const newIdx = isFirstSlide ? 3 : sliderIdx - 1;
    setSliderIdx(newIdx);
  };

  return (
    <section className="header-slider">
      <div
        className={
          sliderIdx === 1 ? "hero-slider-section active" : "hero-slider-section"
        }
        style={{
          background: `linear-gradient(
                90deg,
                rgba(0, 0, 0, 0.4) 0%,
                rgba(0, 0, 0, 0.5) 100%
              ),
              url(/assets/slider/residencehill-slide1.jpg)`,
          backgroundSize: "cover",
        }}
      >
        <div
          className={
            sliderIdx === 1 ? "slider-content active-content" : "slider-content"
          }
        >
          <h1 className="slider-heading">
            Mesto koje <br />
            zovete <span>Domom</span>
          </h1>
          <div className="slider-buttons">
            <Button
              icon={<VscKey className="slider-btn-icon rotate45" />}
              text="Cene od"
              title="120,000.00 RSD"
            />

            <Button
              icon={<BsPhoneVibrate className="slider-btn-icon" />}
              text="Pozovite"
              title="062607070"
              variant="outline"
            />
          </div>
        </div>
      </div>

      {/* SLIDE 2 */}

      <div
        className={
          sliderIdx === 2 ? "hero-slider-section active" : "hero-slider-section"
        }
        style={{
          background: `linear-gradient(
                90deg,
                rgba(0, 0, 0, 0.4) 0%,
                rgba(0, 0, 0, 0.5) 100%
              ),
              url(/assets/slider/residencehill-slide2.jpg)`,
          backgroundSize: "cover",
        }}
      >
        <div
          className={
            sliderIdx === 2 ? "slider-content active-content" : "slider-content"
          }
        >
          <h1 className="slider-heading">
            Odaberite <br />
            Najluksuznije <span>Apartmane</span>
          </h1>
          <div className="slider-buttons">
            <Button
              icon={<VscKey className="slider-btn-icon rotate45" />}
              text="Naši"
              title="Apartmani"
            />

            <Button
              icon={<BsPhoneVibrate className="slider-btn-icon" />}
              text="Rezervišite"
              title="Vaše Mesto"
              variant="outline"
            />
          </div>
        </div>
      </div>

      {/* SLIDE 3 */}

      <div
        className={
          sliderIdx === 3 ? "hero-slider-section active" : "hero-slider-section"
        }
        style={{
          background: `linear-gradient(
                90deg,
                rgba(0, 0, 0, 0.4) 0%,
                rgba(0, 0, 0, 0.5) 100%
              ),
              url(/assets/slider/residencehill-slide3.jpg)`,
          backgroundSize: "cover",
        }}
      >
        <div
          className={
            sliderIdx === 3 ? "slider-content active-content" : "slider-content"
          }
        >
          <h1 className="slider-heading">
            Rezervišite svoje <br />
            Mesto na <span>Kopaoniku</span>
          </h1>
          <div className="slider-buttons">
            <Button
              icon={<VscKey className="slider-btn-icon rotate45" />}
              text="Najluksuzniji"
              title="Hotel"
            />

            <Button
              icon={<BsPhoneVibrate className="slider-btn-icon" />}
              text="Pogodnosti"
              title="Našeg Hotela"
              variant="outline"
            />
          </div>
        </div>
      </div>
      <div className="arrows">
        <BsArrowLeft className="slider-arrow-left" onClick={slideToPrev} />
        <BsArrowRight className="slider-arrow-right" onClick={slideToNext} />
      </div>
    </section>
  );
};
