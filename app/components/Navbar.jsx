"use client";

import React, { useEffect, useState } from "react";
import "./Navbar.css";

import LogoGold from "../assets/residence-hill-logo-gold.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [header, setNavbar] = useState(false);

  useEffect(() => {
    const changeBg = () => {
      if (window.scrollY >= 240) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener("scroll", changeBg);

    return () => {
      window.removeEventListener("scroll", changeBg);
    };
  }, []);

  useEffect(() => {
    if (toggleMenu) {
      document.body.classList.add("toggledMenu");
    } else {
      document.body.classList.remove("toggledMenu");
    }

    return () => {
      document.body.classList.remove("toggledMenu");
    };
  }, [toggleMenu]);

  return (
    <header className={header ? "header active" : "header"}>
      <nav className="main-navigation" aria-label="Breadcrumb">
        <div className="nav-logo">
          <RxHamburgerMenu
            className={
              toggleMenu ? "menu-icon_open" : "menu-icon_open icon-active"
            }
            onClick={() => setToggleMenu(true)}
          />
          <IoMdClose
            className={
              toggleMenu ? "menu-icon_close icon-active" : "menu-icon_close"
            }
            onClick={() => setToggleMenu(false)}
          />
          <Link href="/">
            <Image
              src={LogoGold}
              alt="Residence Hill"
              width={350}
              height={70}
            />
          </Link>
        </div>

        <div className="main-navigation-container">
          <ul className="nav-items">
            <li className="nav-links">
              <Link href="/">Početna</Link>
            </li>
            <li className="nav-links">
              <Link href="/spa-centar">Spa Centar</Link>
            </li>
            <li className="nav-links">
              <Link href="/stanovi">Stanovi</Link>
            </li>
            <li className="nav-links">
              <Link href="/projektni-plan">Projektni Plan</Link>
            </li>
            <li className="nav-links">
              <Link href="/zatrazi-ponudu">Zatraži Ponudu</Link>
            </li>
            <li className="nav-links">
              <Link href="/kontakt">Kontakt</Link>
            </li>
          </ul>
          <div className="main-nav-button">
            <Link href="/kontakt">
              <button type="button" className="nav-btn">
                Zakažite posetu
              </button>
            </Link>
          </div>
        </div>

        <div
          className={
            toggleMenu
              ? "main-navigation-container_smallscreen active-menu"
              : "main-navigation-container_smallscreen"
          }
        >
          <ul className="nav-items_smallscreen">
            <li className="nav-links" onClick={() => setToggleMenu(false)}>
              <Link href="/">Početna</Link>
            </li>
            <li className="nav-links" onClick={() => setToggleMenu(false)}>
              <Link href="/spa-centar">Spa Centar</Link>
            </li>
            <li className="nav-links" onClick={() => setToggleMenu(false)}>
              <Link href="/stanovi">Stanovi</Link>
            </li>
            <li className="nav-links" onClick={() => setToggleMenu(false)}>
              <Link href="/projektni-plan">Projektni Plan</Link>
            </li>
            <li className="nav-links" onClick={() => setToggleMenu(false)}>
              <Link href="/zatrazi-ponudu">Zatraži Ponudu</Link>
            </li>
            <li className="nav-links" onClick={() => setToggleMenu(false)}>
              <Link href="/kontakt">Kontakt</Link>
            </li>
          </ul>
          <div className="main-nav-button">
            <Link href="/kontakt">
              <button
                type="button"
                className="nav-btn"
                onClick={() => setToggleMenu(false)}
              >
                Zakažite posetu
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
