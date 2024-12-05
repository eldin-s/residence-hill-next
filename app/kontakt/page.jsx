import React from "react";

import "./Kontakt.css";

import kontaktPerson from "../assets/inner_team_01.jpg";

import { CiMobile1 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import Image from "next/image";

export const metadata = {
  title: "Kontakt",
  description:
    "Pozovite nas ili nam pošaljite email, odgovorićemo u najkraćem mogućem roku…",
};

const Kontakt = () => {
  return (
    <section className="contact-section">
      <div
        className="contact-heading-container"
        style={{ backgroundImage: `url(/assets/bg/contact_hero.jpg)` }}
      >
        <div className="contact-heading-inner">
          <h1 className="contact-primary-heading">Kontaktirajte nas</h1>
          <p className="contact-heading-description">
            Pozovite nas ili nam pošaljite email, odgovorićemo u najkraćem
            mogućem roku…
          </p>
        </div>
      </div>

      <div className="contact-contact-container">
        <div className="contact-contact-inner-container">
          <h4 className="contact-column-subheading">MENADŽER PRODAJE</h4>
          <h1 className="contact-contact-column-heading">Ivana Premović</h1>
          <div className="contact-contact-form-column">
            <form className="contact-contact-form">
              {/* Honeypot */}
              <input type="text" name="_honey" style={{ display: "none" }} />

              {/* Disable Captcha */}
              <input type="hidden" name="_captcha" value="false" />

              <div className="contact-form-first-fields">
                <input
                  type="text"
                  id="fullName"
                  name="name"
                  placeholder="Ime*"
                  // onChange={(e) => setName(e.target.value)}
                  required
                />

                <input
                  type="text"
                  id="phoneNumber"
                  name="number"
                  placeholder="Broj telefona"
                  // onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <div className="contact-form-second-fields">
                <input
                  type="email"
                  id="email"
                  name="e-mail"
                  placeholder="E-mail*"
                  // onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  placeholder="Vaša poruka"
                  // onChange={(e) => setMessage(e.target.value)}
                  required
                />
                <input type="submit" value="Pošalji" />
              </div>
            </form>
          </div>
        </div>
        <div className="contact-img">
          <Image
            src={kontaktPerson}
            alt="Residence Hill Ivana"
            width={570}
            height="auto"
          />
        </div>
      </div>

      <div className="contact-details-columns">
        <div className="contact-details-column">
          <CiLocationOn className="contact-details-column-icon" />
          <h4>Lokacija</h4>
          <p>Kopaonik</p>
        </div>

        <div className="contact-details-column">
          <CiMobile1 className="contact-details-column-icon" />
          <h4>Telefon</h4>
          <p>062607070</p>
        </div>

        <div className="contact-details-column">
          <CiMail className="contact-details-column-icon" />
          <h4>E-mail</h4>
          <p>ivana@residence-hill.com</p>
        </div>

        <div className="contact-details-column">
          <CiClock2 className="contact-details-column-icon" />
          <h4>Radno vreme</h4>
          <p>Pon – Pet: 9:00 – 18:00</p>
        </div>
      </div>

      <div
        className="contact-promo-offer-container"
        style={{
          backgroundImage: `linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0.3) 100%
    ), url(/assets/bg/background_contact_02.jpg)`,
        }}
      >
        <div className="contact-promo-offer-inner-container">
          <h4 className="promo-offer-subtitle">Promo Offer</h4>
          <h1 className="promo-offer-heading">
            Rezerviši <span className="span-heading">Spa Centar</span>
          </h1>

          <div className="promo-offer-box">
            <p className="textbox">
              Wellness & Spa Centar + 30% popusta za goste na korišćenje Wellnes
              & Spa (sa zatvorenim i otvorenim bazenima + otvoreni bazeni sa
              tolom vodom za uživanje u zimskim danima)
            </p>
          </div>

          <div className="promo-offers-buttons">
            <div className="promo-offers-bold-btn">
              <CiMobile1 className="promo-offers-btn-icon" />
              <div className="promo-offer-btn-details">
                <h4>Pozovite</h4>
                <h1>062607070</h1>
              </div>
            </div>
            <div className="promo-offers-border-btn">
              <CiMail className="promo-offers-btn-icon" />
              <div className="promo-offer-btn-border-details">
                <h4>Pošaljite nam mail</h4>
                <h1>ivana@residence-hill.com</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kontakt;
