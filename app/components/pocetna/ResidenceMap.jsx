"use client";

import React, { useState } from "react";
import "./ResidenceMap.css";

import eksterijer from "../../assets/eksterijer1.jpg";

import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import Image from "next/image";

export const ResidenceMap = () => {
  const [toggleTab, setToggleTab] = useState(1);

  return (
    <div className="residence-map-section">
      <div className="residence-map-container">
        <div className="residence-map-container-inner">
          <h1 className="residence-map-heading">
            Sve na dohvat <span className="span-heading">Ruke</span>
          </h1>
          <div className="residence-map-column">
            <div className="residence-map-column-img">
              <Image
                src={eksterijer}
                width={1000}
                height={1000}
                alt="Eksterijer Residence Hill"
              />
              <div
                className={
                  toggleTab === 1 ? "map-dot dot1 dot-active" : "map-dot dot1"
                }
                onClick={() => setToggleTab(1)}
              >
                <span className="hide-desktop">
                  <a href="#1">01</a>
                </span>
                <span className="hide-mobile">01</span>
              </div>
              <div
                className={
                  toggleTab === 2 ? "map-dot dot2 dot-active" : "map-dot dot2"
                }
                onClick={() => setToggleTab(2)}
              >
                <span className="hide-desktop">
                  <a href="#2">02</a>
                </span>
                <span className="hide-mobile">02</span>
              </div>
              <div
                className={
                  toggleTab === 3 ? "map-dot dot3 dot-active" : "map-dot dot3"
                }
                onClick={() => setToggleTab(3)}
              >
                <span className="hide-desktop">
                  <a href="#3">03</a>
                </span>
                <span className="hide-mobile">03</span>
              </div>
              <div
                className={
                  toggleTab === 4 ? "map-dot dot4 dot-active" : "map-dot dot4"
                }
                onClick={() => setToggleTab(4)}
              >
                <span className="hide-desktop">
                  <a href="#4">04</a>
                </span>
                <span className="hide-mobile">04</span>
              </div>
              <div
                className={
                  toggleTab === 5 ? "map-dot dot5 dot-active" : "map-dot dot5"
                }
                onClick={() => setToggleTab(5)}
              >
                <span className="hide-desktop">
                  <a href="#5">05</a>
                </span>
                <span className="hide-mobile">05</span>
              </div>
            </div>

            <div className="residence-map-colum-tabs">
              <div className="tabs-single-column" id="1">
                <div
                  className="tabs-tab-heading"
                  onClick={() => setToggleTab(1)}
                >
                  <div className="single-tab-heading">
                    <span>01</span> Zajednički Lobi
                  </div>
                  {toggleTab === 1 ? (
                    <FiChevronUp className="tabs-icon" />
                  ) : (
                    <FiChevronDown className="tabs-icon" />
                  )}
                </div>

                {toggleTab === 1 ? (
                  <p className="tabs-tab-description">
                    Predviđen za druženje rezidenta
                  </p>
                ) : (
                  ""
                )}
              </div>

              <div className="tabs-single-column" id="2">
                <div
                  className="tabs-tab-heading"
                  onClick={() => setToggleTab(2)}
                >
                  <div className="single-tab-heading">
                    <span>02</span> Restoran
                  </div>
                  <FiChevronDown className="tabs-icon" />
                </div>

                {toggleTab === 2 ? (
                  <p className="tabs-tab-description">
                    Za sve vaše pauze nudimo vrhunsku hranu i piće. Provedite
                    pauzu u našem restoranu uz veliku udubnost i profesionalnu
                    uslugu.
                  </p>
                ) : (
                  ""
                )}
              </div>

              <div className="tabs-single-column" id="3">
                <div
                  className="tabs-tab-heading"
                  onClick={() => setToggleTab(3)}
                >
                  <div className="single-tab-heading">
                    <span>03</span> Fitnes Centar
                  </div>
                  <FiChevronDown className="tabs-icon" />
                </div>

                {toggleTab === 3 ? (
                  <p className="tabs-tab-description">
                    Ne odustajte od vaše aktivnosti, jer u Residence Hill
                    posedujemo i fitnes centar, opromljen visoko kvalitetnom
                    aparaturom.
                  </p>
                ) : (
                  ""
                )}
              </div>

              <div className="tabs-single-column" id="4">
                <div
                  className="tabs-tab-heading"
                  onClick={() => setToggleTab(4)}
                >
                  <div className="single-tab-heading">
                    <span>04</span> Rekreativni Centar
                  </div>
                  <FiChevronDown className="tabs-icon" />
                </div>
                {toggleTab === 4 ? (
                  <p className="tabs-tab-description">
                    Residence Hill poseduje i centar za vaše aktivnosti, igru i
                    druženje. Da vaše vreme sa porodicom i prijateljima bude
                    kvalitetno provedeno.
                  </p>
                ) : (
                  ""
                )}
              </div>

              <div className="tabs-single-column" id="5">
                <div
                  className="tabs-tab-heading"
                  onClick={() => setToggleTab(5)}
                >
                  <div className="single-tab-heading">
                    <span>05</span> Spa Centar
                  </div>
                  <FiChevronDown className="tabs-icon" />
                </div>
                {toggleTab === 5 ? (
                  <p className="tabs-tab-description">
                    U objektu je smešten i Spa Centar sa zatvorenim i otvorenim
                    bazenima. Otvoreni bazen sa tolom vodom za uživanje u
                    zimskim danima.
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
