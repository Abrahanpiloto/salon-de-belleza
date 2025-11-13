import React from "react";
import Carousel from "./Carousel";
import ServiceList from "./ServiceList";

const Galery = () => {
  return (
    <section id="galeria" className=" relative overflow-hidden min-h-screen">
      {/* Fondo SOLO en desktop */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/fondo-galeria.jpg"
          alt="Equipo profesional en oficinas modernas de Lima - Sedes en La Molina, Miraflores, San Miguel, Jesús María y San Isidro"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        {/* Overlay con 60% de opacidad para ver la imagen */}
        <div className="absolute inset-0 bg-black/90"></div>
      </div>
      <header className="bg-black flex items-center justify-center py-4">
        <h1 className="text-white text-3xl">Galería</h1>
      </header>

      <div className="flex flex-col md:flex-row lg:gap-2 items-center justify-center py-14 px-4">
        <div className="w-full md:w-auto flex justify-center">
          <div style={{ height: "600px", position: "relative" }}>
            <Carousel
              baseWidth={400}
              autoplay={true}
              autoplayDelay={3000}
              pauseOnHover={true}
              loop={true}
              round={false}
            />
          </div>
        </div>

        <div className="w-full md:w-auto flex justify-center h-[750px]">
          <ServiceList />
        </div>
      </div>
    </section>
  );
};

export default Galery;
