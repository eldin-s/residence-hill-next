import Link from "next/link";
import React from "react";

const ApartmantTypesColumn = () => {
  return (
    <div className="type-inner-columns">
      <div className="type-inner-column-60"></div>
      <div className="type-inner-column-40">
        <h3 className="subtitle">Tipovi Apartmana</h3>
        <h1 className="type-heading heading-secondary">
          Udobni & Kvalitetni <span className="span-heading">Enterijeri</span>
        </h1>
        <p className="p-description">
          Objekat je u izgradnji koji je u zimskom stilu, primenjujemo visoke
          standarde u izgradnji, koristimo najmodernije ekološke materijale koji
          se kombinuju sa proverenim sistemima gradnje.
        </p>

        <Link href="/stanovi">
          <button type="button" className="type-btn">
            Pogledaj Više
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ApartmantTypesColumn;
