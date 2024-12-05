import React from "react";
import "./GridGallery.css";

import item1 from "../assets/spaCentar/1-min.jpg";
import item2 from "../assets/spaCentar/2-min.jpg";
import item3 from "../assets/spaCentar/3-min.jpg";
import item4 from "../assets/spaCentar/4-min.jpg";
import item5 from "../assets/spaCentar/5-min.jpg";
import item6 from "../assets/spaCentar/6-min.jpg";
import Image from "next/image";

const GridGallery = () => {
  return (
    <div className="spa-grid-gallery-section">
      <div className="spa-grid-gallery">
        <figure className="gallery-item-1">
          <Image
            src={item3}
            alt="Residence Hill Spa Centar"
            width={800}
            height="auto"
          />
        </figure>
        <figure className="gallery-item-2">
          <Image
            src={item4}
            alt="Residence Hill Spa Centar"
            width={400}
            height="auto"
          />
        </figure>
        <figure className="gallery-item-3">
          <Image
            src={item6}
            alt="Residence Hill Spa Centar"
            width={400}
            height="auto"
          />
        </figure>
        <figure className="gallery-item-4">
          <Image
            src={item1}
            alt="Residence Hill Spa Centar"
            width={400}
            height="auto"
          />
        </figure>
        <figure className="gallery-item-5">
          <Image
            src={item2}
            alt="Residence Hill Spa Centar"
            width={400}
            height="auto"
          />
        </figure>
        <figure className="gallery-item-6">
          <Image
            src={item5}
            alt="Residence Hill Spa Centar"
            width={400}
            height="auto"
          />
        </figure>
      </div>
    </div>
  );
};

export default GridGallery;
