import React from "react";

import "./Footer.css";

import footerLogo from "../assets/residencehill-footer-min.png";

import { FaHome } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: `url('/assets/bg/footer-min.jpg')` }}
    >
      <div className="footer-container">
        <div className="footer-first-column">
          <div className="footer-logo">
            <Image
              src={footerLogo}
              alt="Residence Hill Kopaonik"
              width={200}
              height="auto"
            />
          </div>

          <div className="footer-short-info">
            <FaHome className="footer-contact-icon" />
            <p>Kopaonik - Srbija</p>
          </div>
          <div className="footer-short-info">
            <MdEmail className="footer-contact-icon" />
            <p>info@residence-hill.com</p>
          </div>

          <div className="footer-socials">
            <p>Zapratite nas:</p>
            <Link href="https://www.instagram.com/residencehill.kop/">
              <FaInstagram className="footer-social-icon" />
            </Link>
          </div>
        </div>
        <div className="footer-second-column">
          <p className="footer-small-heading">Instagram</p>

          <div className="footer-grid-gallery">
            <img src="/assets/thumbGallery/1-min.jpg" alt="Residence Hill" />
            <img src="/assets/thumbGallery/5-min.jpg" alt="Residence Hill" />
            <img src="/assets/thumbGallery/3-min.jpg" alt="Residence Hill" />
            <img src="/assets/thumbGallery/2-min.jpg" alt="Residence Hill" />
            <img src="/assets/thumbGallery/5-min.jpg" alt="Residence Hill" />
            <img src="/assets/thumbGallery/6-min.jpg" alt="Residence Hill" />
          </div>
        </div>

        <div className="footer-third-column">
          <p className="footer-small-heading">Pozovite nas</p>

          <div className="footer-phone-number">
            <BsTelephoneFill className="third-column-icon" />
            <p className="horizontal-line">|</p>
            <p className="phone-number">062607070</p>
          </div>
          <p className="third-column-description">
            Mogućnost rentiranja apartmna sa uslugom recepcije i servisiranja
            apartmana. Sigurna investicija, brz povraćaj uloženih sredstava kroz
            rentiranje.
          </p>
          <small className="copyright">
            © Residence Hill 2022. Sva prava rezervisana
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
