import React from "react";
import "./ProjektniPlan.css";

import headingBg from "../assets/background_03.jpg";
import eksterijer2 from "../assets/eksterijer2.jpg";

import { CiLocationOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { BsPhoneVibrate } from "react-icons/bs";
import Image from "next/image";
import Button from "../components/ui/Button";

export const metadata = {
  title: "Projektni Plan",
  description:
    "Projektni plan jednog od najluksuznijih kompleksa na Kopaoniku koji poseduje studio apartmane vrhunskim sa panoramskim pogledom.",
};

const ProjetniPlan = () => {
  return (
    <section className="project-plan-page-section">
      <div className="apartments-background"></div>
      <div className="project-plan-page-inner-section">
        <div className="project-plan-page-heading">
          <div className="heading-container">
            <h3 className="subtitle appartments-subtitle">Vremenska linija</h3>
            <h1 className="apartments-primary-heading">
              Faze u razvoju <span className="span-heading">Projekta</span>
            </h1>
            <p className="project-plan-heading-description">
              RESIDENCE HILL jedan od najluksuznijih kompleksa na Kopaoniku
              poseduje studio apartmane vrhunskim sa panoramskim pogledom.
              (hotel se sastoji od 460 apartmana i povrsine apartmana su od 20m²
              do 40m²) . objekat je u izgradnji koji je u zimskom stilu,
              primenjujemo visoke standarde u izgradnji, koristimo najmodernije
              ekoloske materijale koji se kombinuju sa proverenim sistemima
              gradnje. Pored kvalitetnih i komfonih apartmana, gosti će uživati
              u premium sadržajima u sastavu objekta:
            </p>
            <p className="project-plan-heading-description">
              Zajednicki ulazni lobi predviđen za druženje rezidenta <br />
              - Restoran <br />
              - Recepcija 24/7 <br />
              - Teretana <br />
              - Igraonica za decu <br />- Wellness&spa centar + 30% popusta za
              goste na koriscenje wellnes&spa( sa zatvorenim i otvorenim
              bazenima + otvoreni bazeni sa tolom vodom za uživanje u zimskim
              danima)
            </p>
          </div>
          <figure className="heading-img">
            <Image
              src={headingBg}
              alt="Residence Hill Projekt Plan"
              width={650}
              height="auto"
            />
          </figure>
        </div>

        <div className="project-plan-section">
          <div className="year-2022-circle">
            <h1>2022</h1>
          </div>
          <div className="project-plan-container">
            <div className="project-plan-inner-container">
              <div className="project-plan-box">
                <h4 className="box-subtitle">Mart 2021</h4>
                <h2 className="box-title">Faza 1 Završena</h2>
                <ul className="box-list p-description">
                  <li>Projektovanje i dizajniranje</li>
                  <li>Planiranje enterijera</li>
                  <li>Dobavljanje opreme i materijala</li>
                </ul>
                <Image
                  src={eksterijer2}
                  alt="Residence Hill eksterijer"
                  width={500}
                  height="auto"
                />
                <div className="pointer"></div>
              </div>

              <div className="project-plan-box">
                <h3 className="box-subtitle">2023</h3>
                <h2 className="box-title">Izgradnja</h2>
                <ul className="box-list p-description">
                  <li>Polaganje temelja</li>
                  <li>Izgradnja strukture objekta</li>
                  <li>Instaliranje opreme i nove tehnologije</li>
                  <li>Opremanje sobe, apartmana i restorana</li>
                </ul>
                <div className="pointer"></div>
              </div>

              <div className="project-plan-box">
                <h4 className="box-subtitle">2023</h4>
                <h2 className="box-title">Dovršavanje</h2>
                <ul className="box-list p-description">
                  <li>Izgradnja i oprema Spa-Centra</li>
                  <li>Opremanje restorana i dobavljanje opreme za restoran</li>
                  <li>Opremljanje dečijeg kutka</li>
                  <li>Pripremljanje teretane</li>
                </ul>
                <div className="pointer"></div>
              </div>
            </div>
            <div className="project-plan-box box-color">
              <h4 className="box-subtitle">2024</h4>
              <h2 className="box-title">Godina završetka</h2>
              <p className="box-description p-description ">
                Residence Hill kompleks inspirisan prirodom i potrebom za svežim
                vazduhom, odmor i uživanjem. Residence hill poseduje izuzetnu
                lokaciju koja će vam dokazati zbog čega se Kopanik drugačije
                naziva i „Planina sunca“.
              </p>
              <div className="pointer"></div>
            </div>
          </div>
          <div className="year-2023-circle">
            <h1>2023</h1>
          </div>

          <div className="project-plan-contact-container">
            <h3 className="subtitle">Kontaktirajte nas za više detalja</h3>
            <p className="p-description project-p">
              Provedite nezaboravni odmor u jednom od najluksuznijih apartmana
              na Kopaoniku „RESIDENCE HILL“. Vodeći se idejom da je naša
              životnja sredina nešto što trebamo da čuvamo i cenimo, velika nam
              je čast da našim gostima i ljubiteljima prirode pružimo
              nezaboravni provod kroz divlju prirodu koja ostavlja bez daha.
            </p>

            <div className="project-plan-contact-inner-container">
              <div className="project-plan-contact-details">
                <CiLocationOn className="project-plan-contact-details-icon" />

                <div className="project-plan-contact-detail">
                  <h3>Lokacija</h3>
                  <p>Kopaonik</p>
                </div>
              </div>

              <div className="project-plan-contact-details">
                <CiMail className="project-plan-contact-details-icon" />

                <div className="project-plan-contact-detail">
                  <h3>E-mail</h3>
                  <p>info@residence-hill.com</p>
                </div>
              </div>

              <div className="project-plan-contact-details">
                <CiClock2 className="project-plan-contact-details-icon" />

                <div className="project-plan-contact-detail">
                  <h3>Radno vreme</h3>
                  <p>24H</p>
                </div>
              </div>
            </div>

            <Button
              icon={<BsPhoneVibrate className="slider-btn-icon" />}
              text="Rezervišite apartman"
              title="062607070"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjetniPlan;
