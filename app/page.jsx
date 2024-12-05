import { About } from "./components/pocetna/About";
import Amanities from "./components/pocetna/Amanities";
import ApartmantTypes from "./components/pocetna/ApartmentTypes";
import Apartments from "./components/pocetna/Apartments";
import Contact from "./components/pocetna/Contact";
import { ResidenceMap } from "./components/pocetna/ResidenceMap";
import { Slider } from "./components/pocetna/Slider";
import ThumbGallery from "./components/pocetna/ThumbGallery";

import "aos/dist/aos.css";
import AOSWrapper from "./components/ui/AOSWrapper";

export default function Home() {
  return (
    <main>
      <Slider />
      <AOSWrapper>
        <section data-aos="fade">
          <About />
        </section>
        <section data-aos="fade-up">
          <ResidenceMap />
        </section>
        <Apartments />
        <section data-aos="fade-right">
          <ApartmantTypes />
        </section>
        <Amanities />
        <Contact />
        <ThumbGallery />
      </AOSWrapper>
    </main>
  );
}
