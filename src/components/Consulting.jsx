import React from "react";

const Consulting = () => {
  return (
    <section
      className="relative w-full h-[90vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/consulting3.jpg')" }}
    >
      {/* Overlay oscuro */}
      {/* <div className="absolute inset-0 bg-black/40"></div> */}

      <div className="relative z-10 h-full flex items-center justify-end px-36 md:px-16">
        {/* ----- Texto ----- */}
        <div className="max-w-sm">
          <div className="space-y-1 md:space-y-12 lg:space-x-5 lg:space-y-1 max-h-[70vh] md:max-h-[80vh] overflow-hidden">
            <h1 className="lg:text-4xl text-xl md:text-6xl font-light leading-tight text-amber-200">
              ¿Quieres un nuevo look?
            </h1>

            <h2 className="lg:text-5xl text-white text-2xl md:text-7xl font-extrabold leading-tight mt-2">
              Nosotros te asesoramos para darte el que deseas
            </h2>

            {/* <h3 className="text-4xl md:text-6xl font-light leading-tight mt-2">
            PARA TU
          </h3>

          <h4 className="text-4xl md:text-6xl font-semibold leading-tight mt-2 text-amber-200">
            CABELLO
          </h4> */}

            <div className="w-32 h-0.5 bg-amber-200 mt-4"></div>

            <button className="cursor-pointer mt-10 px-4 py-3 bg-white text-black font-semibold rounded-md hover:bg-amber-200 transition">
              Conoce más
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consulting;
