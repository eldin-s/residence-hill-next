import React from "react";
import "./Apartments.css";
import stan2 from "../../assets/apartment2.jpg";

import Link from "next/link";
import { StudioMasinac } from "./ApartmantSingle/StudioMasinac";
import { SuncanaDolina } from "./ApartmantSingle/StudioSuncanaDolina";
import Image from "next/image";
import Button from "../ui/Button";

const Apartments = () => {
  return (
    <div className="apartments-section">
      <div className="apartments-container">
        <div className="apartments-inner-column">
          <h3 className="subtitle">Odaberite Najbolje</h3>
          <h1 className="apartments-first-column-heading heading-secondary">
            Za one koji znaju šta <span className="span-heading">Biraju</span>
          </h1>
          <p
            className="apartments-first-column-description
        p-description"
          >
            Mogućnost rentiranja apartmna sa uslugom recepcije i servisiranja
            apartmana. Sigurna investicija, brz povraćaj uloženih sredstava
            kroze rentiranje.
          </p>
        </div>

        <div data-aos="fade" data-aos-delay="100">
          <StudioMasinac />
        </div>
        <div data-aos="fade" data-aos-delay="300">
          <SuncanaDolina />
        </div>

        <div data-aos="fade" data-aos-delay="100">
          <div className="apartment-single">
            <div className="apartment-img">
              <Image src={stan2} alt="Studio Jaram" width={300} height={300} />
              <div className="card-box">
                <div className="subheading">Od 30 m²</div>
                <h1 className="card-apartment-name">Studio Jaram</h1>
                <Link href="/stanovi/studio-jaram">
                  <Button text="Pogledaj više" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade" data-aos-delay="300">
          <div className="apartment-single">
            <div className="apartment-img">
              <Image
                src={stan2}
                alt="Studio Karaman"
                width={300}
                height={300}
              />
              <div className="card-box">
                <div className="subheading">Od 32 m²</div>
                <h1 className="card-apartment-name">Studio Karaman</h1>
                <Link href="/stanovi/studio-karaman">
                  <Button text="Pogledaj više" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade" data-aos-delay="500">
          <div className="apartment-single">
            <div className="apartment-img">
              <Image
                src={stan2}
                alt="Studio Pančićev vrh"
                width={300}
                height={300}
              />
              <div className="card-box">
                <div className="subheading">Od 40 m²</div>
                <h1 className="card-apartment-name">Studio Pančićev vrh</h1>
                <Link href="/stanovi/studio-pancicev-vrh">
                  <Button text="Pogledaj više" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apartments;
