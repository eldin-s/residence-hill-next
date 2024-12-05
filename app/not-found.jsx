import Link from "next/link";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";

const NoutFound = () => {
  return (
    <div className="notfound">
      <h1>Opsss... Stranica koju ste tražili nije pronažena</h1>
      <Link href="/">
        <IoMdArrowBack />
        Vratite se na početnu
      </Link>
    </div>
  );
};

export default NoutFound;
