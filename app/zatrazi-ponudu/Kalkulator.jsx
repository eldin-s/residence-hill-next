"use client";

import React, { useState } from "react";

const Kalkulator = () => {
  const [appsType, setAppsType] = useState("220");
  const [orientation, setOrientation] = useState("200");
  const [toggleGarageBtn, setToggleGarageBtn] = useState(false);
  const [floorValue, setFloorValue] = useState(1);

  const garagePrice = toggleGarageBtn ? 1000 : 0;

  const totalPrice = +appsType * +orientation + garagePrice;

  return (
    <div className="calculator-section">
      <div className="calculator-container">
        <div className="calculator-column">
          <h1 className="calculator-title">Konfigurator</h1>
          <div className="calculator-inner-column custom-select">
            <label htmlFor="structure">Struktura apartmana</label>

            <select
              name="structure"
              id="structure"
              onChange={(event) => setAppsType(event.target.value)}
            >
              <option value="220" id="masinac">
                Studio Mašinac
              </option>
              <option value="240">Studio Sunčana dolina</option>
              <option value="300">Studio Jaram</option>
              <option value="320">Studio Karaman</option>
              <option value="400">Studio Pančićev vrh</option>
            </select>
          </div>

          <div className="calculator-inner-column">
            <label htmlFor="floor">Broj Sprata: {floorValue}</label>

            <input
              type="range"
              name="floor"
              id="floor"
              min={1}
              max={5}
              value={floorValue}
              onChange={(event) => setFloorValue(event.target.value)}
              className="input-range"
            />
          </div>

          <div className="calculator-inner-column">
            <label htmlFor="orientation">Orjentacija Apartmana</label>

            <select
              name="orientation"
              id="orientation"
              onChange={(event) => setOrientation(event.target.value)}
            >
              <option value="200">Prednja strana</option>
              <option value="180">Zadnja strana</option>
            </select>
          </div>

          <div className="calculator-inner-column">
            <div className="calculator-garage"> Garaža</div>

            <div className="calculator-garage-btn">
              <div
                className={
                  toggleGarageBtn
                    ? "calculator-garage-btn-circle garage-btn-active"
                    : "calculator-garage-btn-circle"
                }
                onClick={() => setToggleGarageBtn(!toggleGarageBtn)}
              ></div>
            </div>
          </div>
          <div className="calculator-inner-column">
            <div className="calculator-total-price">
              <p className="total-price-text">Ukupno</p>
              <div className="calculator-price">
                €{" "}
                {totalPrice
                  .toFixed(2)
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kalkulator;
