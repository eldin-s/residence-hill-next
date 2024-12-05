import "./ZatraziPonudu.css";

import gallery3 from "../assets/gallery_03.jpg";

import Image from "next/image";
import Kalkulator from "./Kalkulator";

export const metadata = {
  title: "Zatrazi Ponudu",
  description:
    "Konfigurator koji vam nudi opciju da izračunate cene određenih apartmana.",
};

const ZatraziPonudu = () => {
  return (
    <section className="calculator-offer-section">
      <div
        className="calculator-heading"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.5) 100%), url(/assets/bg/background_04.jpg)`,
        }}
      >
        <div className="calculator-heading-container">
          <h3 className="studio-page-subtitle">Kalkulator</h3>
          <h1 className="studio-page-heading">Izračunaj cenu apartmana</h1>
        </div>
      </div>

      <Kalkulator />

      <div className="calculator-reservations-container">
        <div className="calculator-reservation-column">
          <h3 className="subtitle">Rezervacije</h3>
          <h1 className="reservation-heading">
            Ukratko, <span className="span-heading">veoma efikasno</span>
          </h1>
          <p className="reservation-description">
            Pomoću kalkulatora možete brzo izračunati šta vam konkretno treba.
            Odaberite ono što vama treba i kalkulator će vam izračunati cenu.
            Ukoliko ste zadovoljni, možete poslati email odmah i mi ćemo biti
            obavešteni.
          </p>
        </div>
        <div className="calculator-reservation-img">
          <Image src={gallery3} alt="" width={500} height="auto" />
        </div>
      </div>
    </section>
  );
};

export default ZatraziPonudu;
