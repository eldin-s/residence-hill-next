import React from "react";
import "./Stanovi.css";

import { StudioMasinac } from "../components/pocetna/ApartmantSingle/StudioMasinac";
import { SuncanaDolina } from "../components/pocetna/ApartmantSingle/StudioSuncanaDolina";
import { StuidoJaram } from "../components/pocetna/ApartmantSingle/StudioJaram";

import { BsPhoneVibrate } from "react-icons/bs";
import stan2 from "../assets/apartment2.jpg";
import banner from "../assets/banner-img.jpg";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/ui/Button";

export const metadata = {
  title: "Lista Apartmana",
  description:
    "Stanovi svih veličina od jednosobnih do luksuznih dvosobnih apartmana sa vrhunskim panoramskim pogledom.",
};

const Stanovi = () => {
  return (
    <section className="apartments-page-section">
      <div className="apartments-background"></div>
      <div className="apartments-inner-container">
        <div className="heading-container">
          <h3 className="subtitle appartments-subtitle">Apartmani</h3>
          <h1 className="apartments-primary-heading">
            Lista <span className="span-heading">Apartmana</span>
          </h1>
          <p className="apartments-description">
            Residence Hill jedan najluksuzniji hotel na Kopaoniku poseduje
            apartmane svih veličina od jednosobnih do luksuznih dvosobnih
            apartmana sa vrhunskim panoramskim pogledom.
          </p>
        </div>

        <div className="apartments-page-container">
          <div data-aos="zoom-in-down" data-aos-delay="100">
            <StudioMasinac />
          </div>
          <div data-aos="zoom-in-up" data-aos-delay="300">
            <SuncanaDolina />
          </div>
          <div data-aos="fade" data-aos-delay="600">
            <StuidoJaram />
          </div>

          <div data-aos="fade" data-aos-delay="200">
            <div className="apartment-single">
              <div className="apartment-img">
                <Image src={stan2} alt="Stan 2" width={380} height="auto" />
                <div className="card-box">
                  <div className="subheading">Od 30 m²</div>
                  <h1 className="card-apartment-name">Studio Karaman</h1>
                  <Link href="/stanovi/studio-karaman">
                    <Button text="Pogledaj više" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade" data-aos-delay="400">
            <div className="apartment-single">
              <div className="apartment-img">
                <Image src={stan2} alt="Stan 2" width={380} height="auto" />
                <div className="card-box">
                  <div className="subheading">Od 30 m²</div>
                  <h1 className="card-apartment-name">Studio Pančićev vrh</h1>
                  <Link href="/stanovi/studio-pancicev-vrh">
                    <Button text="Pogledaj više" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="apartments-banner">
          <figure className="banner-img">
            <Image
              src={banner}
              alt="Residence Hill Prodaja"
              width={400}
              height="auto"
            />
          </figure>
          <h1 className="banner-heading">Prodaja je U TOKU</h1>
          <button className="banner-btn">
            <BsPhoneVibrate className="btn-icon" />

            <div className="btn-contact">
              <h3>Pozovite nas</h3>
              <h1>062607070</h1>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stanovi;
