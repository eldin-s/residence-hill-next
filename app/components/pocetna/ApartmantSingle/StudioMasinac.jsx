import React from "react";
import stan1 from "../../../assets/apartment1.jpg";
import { TbSquaresFilled } from "react-icons/tb";
import { MdRestaurant } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Button from "../../ui/Button";

export const StudioMasinac = () => {
  return (
    <div className="apartment-single-card">
      <div className="card-img">
        <Image src={stan1} alt="Studio Mašinac" width={380} height="auto" />
      </div>

      <div className="card-inner">
        <p className="card-start-quadrature">Od 22 m²</p>
        <h1 className="card-apartment-name">Studio Mašinac</h1>

        <div className="card-apartment-info">
          <div className="card-details-container">
            <div className="card-details">
              <TbSquaresFilled className="card-icon" />
              <p className="card-detail-description">Studio</p>
            </div>
            <div className="card-detail-squared">15 m²</div>
          </div>

          <div className="card-details-container">
            <div className="card-details">
              <MdRestaurant className="card-icon" />
              <p className="card-detail-description">Kuhinja</p>
            </div>
            <div className="card-detail-squared">4 m²</div>
          </div>

          <div className="card-details-container">
            <div className="card-details">
              <FaBath className="card-icon" />
              <p className="card-detail-description">Kupatilo</p>
            </div>
            <div className="card-detail-squared">3 m²</div>
          </div>
        </div>
        <Link href="/stanovi/studio-masinac">
          <Button text="Pogledaj više" />
        </Link>
      </div>
    </div>
  );
};
