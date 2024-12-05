import React from "react";
import "../Studio.css";

import { TbSquaresFilled } from "react-icons/tb";
import { MdRestaurant } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { BsPhoneVibrate } from "react-icons/bs";

import banner from "../../assets/banner-img.jpg";
import stan1 from "../../assets/stan1.jpg";
import Image from "next/image";

const Jaram = () => {
  return (
    <div className="studio-single">
      <div
        className="studio-heading"
        style={{
          backgroundImage: `linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.631171218487395) 0%,
        rgba(0, 0, 0, 0.5275297619047619) 100%
      ), url(/assets/slider/residencehill-slide1.jpg)`,
        }}
      >
        <div className="studio-heading-container">
          <h3 className="studio-page-subtitle">Apartmani</h3>
          <h1 className="studio-page-heading">Studio Jaram</h1>
          <p className="studio-page-description">
            Primenjujemo visoke standarde u izgradnji, koristimo najmodernije
            ekološke materijale koji se kombinuju sa proverenim sistemima
            gradnje.
          </p>
        </div>
      </div>

      <div className="studio-section">
        <Image
          src={stan1}
          alt="Residence Hill Stan"
          className="studio-stan-img-desktop"
          width={900}
          height={600}
        />
        <div className="studio-container">
          <div className="studio-columns">
            <div className="studio-column-60">
              <Image
                src={stan1}
                alt="Residence Hill Stan"
                className="studio-stan-img-mobile"
                width={400}
                height={400}
              />
            </div>
            <div className="studio-column-40">
              <div className="studio-inner-column">
                <h3 className="subtitle">Apartman</h3>

                <h1 className="studio-inner-heading">Studion Jaram</h1>
              </div>
              <div className="card-apartment-info">
                <div className="studio-card-details-container">
                  <div className="card-details">
                    <TbSquaresFilled className="card-icon" />
                    <p className="card-detail-description">Studio</p>
                  </div>
                  <div className="card-detail-squared">21 m²</div>
                </div>

                <div className="studio-card-details-container">
                  <div className="card-details">
                    <MdRestaurant className="card-icon" />
                    <p className="card-detail-description">Kuhinja</p>
                  </div>
                  <div className="card-detail-squared">5 m²</div>
                </div>

                <div className="studio-card-details-container">
                  <div className="card-details">
                    <FaBath className="card-icon" />
                    <p className="card-detail-description">Kupatilo</p>
                  </div>
                  <div className="card-detail-squared">4 m²</div>
                </div>
              </div>
              <p className="studio-total-square">Ukupno 30 m²</p>

              <button type="button" className="studio-contact-btn">
                Kontakt
              </button>
            </div>
          </div>

          <div className="apartments-banner studio-banner">
            <figure className="banner-img">
              <Image
                src={banner}
                alt="Residence Hill Prodaja"
                width={400}
                height="auto"
              />
            </figure>
            <h1 className="banner-heading">POŽURI</h1>
            <button className="banner-btn">
              <BsPhoneVibrate className="btn-icon" />

              <div className="btn-contact">
                <h3>Pozovite nas</h3>
                <h1>062607070</h1>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jaram;
