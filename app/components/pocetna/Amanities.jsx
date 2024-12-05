import React from "react";
import amanitiesData from "./amanitiesData";
import "./Amanities.css";

const Amanities = () => {
  return (
    <section className="amanities-section">
      <div className="amanities-container">
        <div className="amanities-heading-container">
          <h3 className="subtitle">Galerija Pogodnosti</h3>
          <h1 className="heading-secondary amanities-heading">
            Naše <span className="span-heading">Pogodnosti</span>
          </h1>
        </div>

        <div className="amanities-column">
          {amanitiesData.map((amanitie) => (
            <div className="amanities-card" key={amanitie.id}>
              <div data-aos="flip-right">
                <div className="amanities-card-icons-container">
                  <amanitie.icon className="amanities-card-icons" />
                </div>
                <h4 className="amanities-card-subtitle">Pogodnosti</h4>
                <h1 className="amanities-card-heading">{amanitie.heading}</h1>
                <div className="amanities-card-description-container">
                  <p className="amanities-card-description">
                    {amanitie.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amanities;
