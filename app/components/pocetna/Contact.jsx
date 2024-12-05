import React from "react";

import "./Contact.css";

import contactImg from "../../assets/kontakt-min.jpg";
import { BsPhoneVibrate } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import Image from "next/image";

const Contact = () => {
  return (
    <section
      className="contact-section"
      style={{
        backgroundImage: `linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.631171218487395) 0%,
    rgba(0, 0, 0, 0.5275297619047619) 100%
  ), url('assets/bg/kontakt-bg.jpg')`,
      }}
    >
      <div className="contact-container">
        <div className="contact-column">
          <h3 className="subtitle contact-subtitle">Kontaktirajte nas</h3>

          <h1 className="heading-secondary contact-column-heading">
            Zakažite <span className="span-heading">posetu</span>
          </h1>

          <div className="contact-column-description">
            Provedite nezaboravni odmor u jednom od najluksuznijih apartmana na
            Kopaoniku „RESIDENCE HILL“. Vodeći se idejom da je naša životnja
            sredina nešto što trebamo da čuvamo i cenimo, velika nam je čast da
            našim gostima i ljubiteljima prirode pružimo nezaboravni provod kroz
            divlju prirodu koja ostavlja bez daha.
          </div>

          <div className="contact-person-container">
            <div className="contact-person-img">
              <Image
                src={contactImg}
                alt="Ivana Premović | Residence Hill"
                width={150}
                height={150}
              />
            </div>
            <div className="contact-person-details">
              <h2 className="person-name">Ivana Premović</h2>
              <h3 className="person-jobtitle">MENADŽER PRODAJE</h3>
              <div className="person-contact-detail">
                <BsPhoneVibrate className="contact-icon" /> 062607070
              </div>
              <div className="person-contact-detail">
                <FaTelegramPlane className="contact-icon" />{" "}
                ivana@residence-hill.com
              </div>
            </div>
          </div>
        </div>

        <form
          className="contact-form"
          // onSubmit={handleSubmit}
        >
          {/* Honeypot */}
          <input type="text" name="_honey" style={{ display: "none" }} />

          {/* Disable Captcha */}
          <input type="hidden" name="_captcha" value="false" />

          <div className="form-first-fields">
            <input
              type="text"
              id="fullName"
              name="Ime"
              placeholder="Ime i Prezime*"
              //   onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="text"
              id="phoneNumber"
              name="Broj Telefona"
              placeholder="Broj&nbsp;telefona"
              //   onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="form-second-fields">
            <input
              type="email"
              id="email"
              name="E-mail"
              placeholder="E-mail*"
              //   onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              name="Poruka"
              id="message"
              cols="30"
              rows="5"
              placeholder="Vaša poruka"
              //   onChange={(e) => setMessage(e.target.value)}
              required
            />
            <input type="submit" value="Pošalji" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
