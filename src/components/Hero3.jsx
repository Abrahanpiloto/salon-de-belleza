import React from "react";
import TypingLocations from "./TypingLocations";

const Hero3 = () => {
  return (
    <section className="relative w-full h-[90vh] min-h-screen overflow-hidden">
      <picture className="absolute inset-0 w-full h-full -z-10">
        <img
          src="/hair-banner.jpg"
          alt="Profesional estilista atendiendo a una cliente en un salón moderno — imagen que transmite cuidado profesional del cabello"
          className="w-full h-full object-cover object-center"
          loading="eager" /* hero: prioridad inmediata */
          fetchPriority="high"
        />
      </picture>

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* LOGO SOLO EN MÓVIL - CENTRADO EN PANTALLA */}
      {/* <div className="md:hidden absolute top-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none w-full">
        <div className="w-86 h-32 mx-auto">
          <img
            src="/logo-mobile.png"
            alt="Logotipo del salón"
            className="w-full h-full object-contain"
          />
        </div>
      </div> */}

      {/* Contenedor principal con Grid para desktop */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-12 lg:px-26">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
          {/* COLUMNA IZQUIERDA: Texto */}
          <div className="text-white max-w-lg ">
            <div className="space-y-1 md:space-y-2 lg:space-y-1">
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
              <div className="w-32 h-0.5 bg-amber-200 mt-4"></div>

              <section className="...">
                <TypingLocations
                  words={[
                    "Miraflores",
                    "San Isidro",
                    "La Molina",
                    "Jesús María",
                    "San Miguel",
                  ]}
                  speed={100} // Velocidad de escritura
                  pause={1000} // Pausa antes de borrar
                />
              </section>

              {/* BOTÓN SOLO EN MÓVIL (se oculta en desktop) */}
              <div className="md:hidden mt-6">
                <button className="px-8 py-3 bg-white text-black font-semibold rounded-md hover:bg-amber-200 transition ">
                  Agenda aquí
                </button>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Logo + Botón (solo visible en desktop) */}
          <div className="hidden md:flex flex-col items-end justify-center space-y-8">
            <div className="flex flex-col items-center gap-4">
              {/* LOGO */}
              <div className="w-48 h-48 lg:w-64 lg:h-64">
                <img
                  src="/1.png"
                  alt="Logo del salón"
                  className="w-full h-full object-contain drop-shadow-2xl rounded-full"
                />
              </div>

              {/* BOTÓN DEBAJO DEL LOGO (solo en desktop) */}
              <button className="px-10 py-2 bg-amber-200 text-black font-bold text-lg rounded-md hover:bg-white transition shadow-lg cursor-pointer">
                Agenda aquí
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3;
