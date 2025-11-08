import React from "react";

const Consulting = () => {
  return (
    <section
      className="relative w-full h-[90vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/consulting3.jpg')" }}
    >
      {/* Overlay opcional */}
      {/* <div className="absolute inset-0 bg-black/40"></div> */}

      <div className="relative z-10 h-full flex items-center">
        {/* Contenedor principal: móvil = derecha, desktop = derecha (pero con margen) */}
        <div
          className="
          w-full 
          px-6 
          md:px-16 
          lg:px-30 
          flex 
          justify-end
        "
        >
          <div className="w-full max-w-md">
            {/* Texto: más vertical y espaciado SOLO en móvil */}
            <div
              className="
              /* Espaciado vertical: más en móvil */
              space-y-4 
              md:space-y-6 
              lg:space-y-6

              /* Alineación: derecha en móvil, derecha en desktop */
              text-right

              /* Padding para no pegar al borde en móvil */
              pr-2 
              md:pr-0
            "
            >
              <h1
                className="
                text-2xl 
                sm:text-3xl 
                md:text-5xl 
                lg:text-5xl 
                font-bold 
                leading-snug 
                md:leading-tight 
                text-amber-200
              "
              >
                ¿Quieres un nuevo look?
              </h1>

              <h2
                className="
                text-3xl 
                sm:text-4xl 
                md:text-6xl 
                lg:text-4xl 
                font-bold 
                leading-relaxed 
                md:leading-tight 
                text-white 
                mt-4 
                md:mt-6
              "
              >
                Nosotros te asesoramos
                <br />
                para darte el que deseas
              </h2>

              <div
                className="
                w-24 
                h-0.5 
                bg-amber-200 
                mt-2 
                md:mt-2 
                ml-auto
              "
              ></div>

              <div className="flex justify-end mt-8 md:mt-4">
                <button
                  className="
                  px-6 
                  py-3 
                  bg-white 
                  text-black 
                  font-semibold 
                  rounded-md 
                  hover:bg-amber-200 
                  transition 
                  text-sm 
                  sm:text-base
                "
                >
                  Conoce más
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consulting;
