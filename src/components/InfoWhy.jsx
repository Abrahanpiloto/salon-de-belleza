import React from "react";

const InfoWhy = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-1 gap-0 overflow-x-auto snap-x snap-mandatory">
      <div className="h-[280px] snap-center bg-gray-900 text-white px-8 flex flex-col items-start justify-center overflow-hidden">
        <h1 className="text-2xl font-bold">
          <span className="font-light">¿Porque debes venir</span> <br /> a
          nuestro salón?
        </h1>
        <div className="w-22 h-0.5 bg-amber-300 mt-3"></div>
      </div>
      <div className="h-[280px] snap-center bg-green-300 px-8 flex flex-col items-start justify-center gap-2 overflow-hidden">
        <h1>
          {" "}
          <span className="font-light text-2xl">
            Usamos productos
          </span> <br />{" "}
          <span className="font-bold text-3xl">de alta gama</span>
        </h1>
        <p className="text-sm text-gray-700">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit minus
          corporis distinctio sit repellat nam rem sed. Consequuntur, repellat.
          Aperiam vitae magnam.
        </p>
      </div>
      <div className="h-[280px] snap-center bg-rose-400 flex flex-col items-start px-8 justify-center gap-2 overflow-hidden">
        <h1>
          {" "}
          <span className="font-light text-2xl">
            Todos nuestros estilistas
          </span>{" "}
          <br /> <span className="font-bold text-3xl">son profesionales</span>
        </h1>
        <p className="text-sm text-gray-700">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit minus
          corporis distinctio sit repellat nam rem sed. Consequuntur, repellat.
          Aperiam vitae magnam.
        </p>
      </div>
      <div className="h-[280px] snap-center bg-amber-200 flex flex-col items-start px-8 justify-center gap-2 overflow-hidden">
        <h1>
          {" "}
          <span className="font-light text-2xl">
            Tenemos regalos y ofertas
          </span>{" "}
          <br /> <span className="font-bold text-3xl">todo el año</span>
        </h1>
        <p className="text-sm text-gray-700">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit minus
          corporis distinctio sit repellat nam rem sed. Consequuntur, repellat.
          Aperiam vitae magnam.
        </p>
      </div>
    </div>
  );
};

export default InfoWhy;
