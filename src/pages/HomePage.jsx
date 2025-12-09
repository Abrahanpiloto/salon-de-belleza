import React, { useEffect } from "react";
// import Hero from "../components/Hero";
import ServicesGrid from "../components/ServicesGrid";
import Consulting from "../components/Consulting";
import Hero3 from "../components/Hero3";
import InfoWhy2 from "../components/InfoWhy2";
import LayoutMain from "../components/LayoutMain";
import Galery from "../components/Galery";
import Contact from "../components/Contact";

const HomePage = () => {
  useEffect(() => {
    // Detecta si llegaste con un hash (ej: /#galeria)
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          // Pequeño delay para que cargue el DOM
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    };
    handleHash();
    // Ejecutar si cambia el hash (opcional)
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <div className="">
      <LayoutMain>
        <Hero3 />
        <ServicesGrid />
        <Consulting />
        <InfoWhy2 />
        <Galery />
        <Contact />
      </LayoutMain>
    </div>
  );
};

export default HomePage;
