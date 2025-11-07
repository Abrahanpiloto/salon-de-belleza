import React from "react";

const Hero = () => {
  return (
    <section
      className="relative w-full h-[90vh] bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/hair-banner.jpg')" }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Contenido */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-26">
        <div className="max-w-lg text-white">
          <div className="space-y-1 md:space-y-2 lg:space-y-1 max-h-[70vh] md:max-h-[80vh] overflow-hidden">
            <h1 className="text-4xl md:text-5xl font-light leading-tight text-amber-200">
              El Mejor
            </h1>

            <h1 className="text-4xl md:text-5xl font-light leading-tight text-amber-200">
              Cuidado
            </h1>

            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mt-2">
              PROFE
              <br />
              SIONAL
            </h2>

            <h3 className="text-4xl md:text-4xl font-light leading-tight mt-2">
              PARA TU
            </h3>

            <h4 className="text-4xl md:text-6xl font-semibold leading-tight mt-2 text-amber-200">
              CABELLO
            </h4>

            <div className="w-32 h-0.5 bg-amber-200 mt-2"></div>

            <button className="cursor-pointer mt-4 px-22 py-3 bg-white text-black font-semibold rounded-md hover:bg-amber-200 transition">
              Agenda aquí
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
