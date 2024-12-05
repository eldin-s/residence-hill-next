import React from "react";
import "./About.css";

import { BsBuildings } from "react-icons/bs";
import { MdConstruction } from "react-icons/md";
import { TiThLargeOutline } from "react-icons/ti";
import { RiCarLine } from "react-icons/ri";
import Link from "next/link";
import Button from "../ui/Button";

export const About = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-inner-column">
          <h3 className="subtitle">Udobno Življenje</h3>

          <h1 className="about-heading">
            Kvalitet i <br />
            <span className="span-heading">Komfort</span>
          </h1>

          <p className="about-description">
            Residence Hill jedan najluksuzniji hotel na Kopaoniku poseduje
            apartmane svih veličina od jednosobnih do luksuznih dvosobnih
            apartmana.
          </p>

          <Link href="/stanovi">
            <Button text="Otkri više" />
          </Link>
        </div>

        <div
          className="about-inner-column"
          style={{
            backgroundImage: `url(assets/bg/pattern-bg.jpg)`,
          }}
        >
          <div className="about-inner-column-container">
            <div className="about-short-info">
              <TiThLargeOutline className="about-icon" />

              <div className="about-info">
                <h1>12000</h1>
                <p>Kvadratnih metara</p>
              </div>
            </div>

            <div className="about-short-info">
              <MdConstruction className="about-icon" />
              <div className="about-info">
                <h1>2023</h1>
                <p>Godina završetka</p>
              </div>
            </div>

            <div className="about-short-info">
              <BsBuildings className="about-icon" />
              <div className="about-info">
                <h1>480</h1>
                <p>Apartmana</p>
              </div>
            </div>

            <div className="about-short-info">
              <RiCarLine className="about-icon" />
              <div className="about-info">
                <h1>500</h1>
                <p>Parking Mesta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
