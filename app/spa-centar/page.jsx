import React from "react";
import "./SpaCentar.css";

import spa1 from "../assets/spaCentar/spa-centar-1.jpg";
import spa2 from "../assets/spaCentar/spa-centar-2.jpg";
import spa3 from "../assets/spaCentar/spa-centar-3.jpg";
import Image from "next/image";
import GridGallery from "./GridGallery";

export const metadata = {
  title: "Spa Centar",
  description:
    "Savršen dodatak vašem Spa danu ili Spa odmoru, nudimo širok spektar tretmana, od masaže celog tela do opuštajućeg manikira - pomažući vam da izgledate i osećate se najbolje.",
};

const SpaCentar = () => {
  return (
    <section className="spa-centar-page">
      <div
        className="spa-centar-heading"
        style={{
          backgroundImage: `linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.631171218487395) 0%,
      rgba(0, 0, 0, 0.5275297619047619) 100%
    ), url('/assets/bg/spa-centar-header-bg.jpg')`,
        }}
      >
        <h1>Spa Centar</h1>
      </div>

      <div className="spa-centar-first-section">
        <div className="spa-centar-container">
          <div
            className="spa-centar-column"
            style={{
              backgroundImage: `url('/assets/bg/spa-centar-bg-pattern.jpg')`,
            }}
          >
            <div className="column-box negative-right">
              <h3 className="spa-heading">Za one koji znaju da biraju</h3>
              <p className="column-box-description text-right">
                Bez obzira da li provodite ceo dan ili samo nekoliko sati sa
                nama, naši Spa dani uključuju pristup svim spa iskustvima,
                besplatno iznajmljivanje ogrtača i peškira, korišćenje naših
                luksuznih spa proizvoda i toaletnih potrepština. Neki spa dnevni
                paketi uključuju i osveženje u našem Cafe Baru.
              </p>
            </div>
          </div>

          <div className="spa-centar-column">
            <Image
              src={spa2}
              alt="Spa Centar / Residence Hill"
              className="spa-img"
              width={600}
              height="auto"
            />
          </div>
        </div>
      </div>

      <div
        className="spa-centar-second-section"
        style={{
          backgroundImage: `url('/assets/bg/spa-section-bg.jpg')`,
        }}
      >
        <div className="spa-centar-container">
          <div className="spa-centar-column">
            <Image
              src={spa1}
              alt="Spa Centar / Residence Hill"
              className="spa-img"
              width={600}
              height="auto"
            />
          </div>

          <div className="spa-centar-column">
            <div className="column-box-second negative-left">
              <h3 className="spa-heading-right">Spa pauze</h3>
              <p className="column-box-description text-left">
                Za koga dan nije dovoljan. Od luksuznih spa apartmana, sa
                sopstvenim privatnim balkonom i velikom kadom, do eksluzivnih
                apartmana sa svim kućnim komforom za odmor u centru Residence
                Hill. Opustite se, osećate se kao kod kuće i ostanite još malo.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="spa-centar-third-section">
        <div className="spa-centar-container">
          <div
            className="spa-centar-column"
            style={{
              backgroundImage: `url('/assets/bg/spa-centar-bg-pattern.jpg')`,
            }}
          >
            <div className="column-box negative-right">
              <h3 className="spa-heading">Tretmani</h3>
              <p className="column-box-description text-right">
                Savršen dodatak vašem Spa danu ili Spa odmoru, nudimo širok
                spektar tretmana, od masaže celog tela do opuštajućeg manikira -
                pomažući vam da izgledate i osećate se najbolje.
              </p>
            </div>
          </div>

          <div className="spa-centar-column">
            <Image
              src={spa3}
              alt="Spa Centar / Residence Hill"
              className="spa-img"
              width={600}
              height="auto"
            />
          </div>
        </div>
      </div>

      <div
        className="spa-about-section"
        style={{
          backgroundImage: `linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.631171218487395) 0%,
      rgba(0, 0, 0, 0.5275297619047619) 100%
    ), url('/assets/bg/spa-parallax-min.jpg')`,
        }}
      >
        <div className="spa-about-container">
          <div className="border"></div>
          <div className="spa-small-about">
            <h1 className="spa-about-heading">Dođite i uverite se</h1>
            <p className="spa-about-description">
              Smešten u drveću našeg Kopaonika, je jedinstven samostalan Spa.
              Osetite kako se vaš stres topi u srcu šume u jednom od 6 Akua Spa.
              Rezervišite Spa dan ili Spa pauzu i opustite se u našim
              neverovatnim sobama za spa iskustvo i birajte između niza tretmana
              za lice i telo da biste stimulisali, prepustili i istakli svoju
              prirodnu lepotu. Svaka od naših banja ima preko 15 različitih spa
              doživljaja, od vlažnih, do suvih, biljnih ili meditativnih, naći
              ćete sve što vam je potrebno da se osećate opušteno i
              revitalizovano.
            </p>
          </div>
          <div className="border"></div>
        </div>
      </div>

      <GridGallery />
    </section>
  );
};

export default SpaCentar;
