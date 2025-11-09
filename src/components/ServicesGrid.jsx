import React from "react";

const ServicesGrid = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-3 grid-rows-2 gap-0">
        {/* ---- CUADRO 1 IMAGEN ----- */}
        <div className="h-68 bg-green-300">
          {/* imagen desktop */}
          <img
            src="/servicio-peluqueria.jpg"
            className="hidden sm:block object-cover"
          />

          {/* imagen mobile */}
          <img
            src="/servicio-peluqueria-large.jpg"
            className="w-full h-full object-cover block sm:hidden"
          />
        </div>

        {/* ---- CUADRO 2 TEXTO------- */}
        <div className="bg-rose-400 flex flex-col justify-center items-center p-6">
          {" "}
          <p className=" text-white lg:text-3xl tracking-widest">CORTES</p>
          <h2 className="text-md font-bold">DE</h2>
          <p className="mt-1 lg:text-3xl text-gray-200 uppercase tracking-widest">
            CABELLO
          </p>
          <div className="w-22 h-0.5 bg-amber-300 mt-3"></div>
          <button className="mt-6 text-xs lg:text-lg cursor-pointer lg:w-xs bg-amber-300 text-black font-semibold px-4 py-2 hover:bg-amber-400 transition">
            CONOCELOS
          </button>
        </div>

        {/* ----- CUADRO 3 IMAGEN ALARGADA ----- */}
        <div className="bg-blue-400 row-span-2">
          <img src="/propietaria.jpg" className="w-full h-full object-cover" />
        </div>
        <div className="bg-green-300 flex flex-col justify-center items-center p-6">
          <p className="lg:text-3xl text-white font-bold tracking-widest">
            TINTES
          </p>
          <h2 className="lg:text-3xl font-bold">
            Tonos naturales, <br /> intensos o fantasía
          </h2>
          {/* <p className="mt-1 text-gray-400 uppercase tracking-widest">
            PROFESSIONAL
          </p> */}
          <div className="w-22 h-0.5 bg-amber-300 mt-3"></div>
          <button className="mt-6 text-xs lg:text-lg cursor-pointer lg:w-xs bg-amber-300 text-black font-semibold px-4 py-2 hover:bg-amber-400 transition">
            CONOCELOS
          </button>
        </div>

        {/* ----CUADRO 4 IMAGEN ----- */}
        <div className="bg-pink-400">
          <img
            src="/lavado-cabello.jpg"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
