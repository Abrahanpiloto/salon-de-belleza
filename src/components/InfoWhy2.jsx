import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const data = [
  {
    id: 1,
    title: (
      <>
        <span className="font-light">¿Porque debes venir</span> <br /> a nuestro
        salón?
      </>
    ),
    desc: null,
    color: "bg-gray-900 text-white",
  },
  {
    id: 2,
    title: (
      <>
        <span className="font-light text-2xl text-black">Usamos productos</span>{" "}
        <br />
        <span className="font-bold text-3xl text-white">de alta gama</span>
      </>
    ),
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit minus corporis distinctio sit repellat nam rem sed.",
    color: "bg-green-300 text-gray-700",
  },
  {
    id: 3,
    title: (
      <>
        <span className="font-light text-2xl text-black">
          Todos nuestros estilistas
        </span>{" "}
        <br />
        <span className="font-bold text-3xl text-white">son profesionales</span>
      </>
    ),
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit minus corporis distinctio sit repellat nam rem sed.",
    color: "bg-rose-400 text-gray-700",
  },
  {
    id: 4,
    title: (
      <>
        <span className="font-light text-2xl text-black">
          Tenemos regalos y ofertas
        </span>{" "}
        <br />
        <span className="font-bold text-3xl text-white">todo el año</span>
      </>
    ),
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit minus corporis distinctio sit repellat nam rem sed.",
    color: "bg-amber-200 text-gray-700",
  },
];

const InfoWhy2 = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      {/* ✅ DESKTOP VERSION */}
      <div className="hidden md:grid grid-cols-4 grid-rows-1 gap-0">
        {data.map((item) => (
          <div
            key={item.id}
            className={`h-[280px] snap-center px-8 flex flex-col items-start justify-center overflow-hidden ${item.color}`}
          >
            <h1 className="text-2xl font-bold">{item.title}</h1>

            {item.desc && (
              <p className="text-sm mt-2 text-gray-700">{item.desc}</p>
            )}

            {item.id === 1 && (
              <div className="w-22 h-0.5 bg-amber-300 mt-3"></div>
            )}
          </div>
        ))}
      </div>

      {/* ✅ MOBILE VERSION */}
      <div className="md:hidden">
        <div className="shadow-sm overflow-hidden border">
          {data.map((item, index) => {
            const isOpen = openId === item.id;
            const isFirst = item.id === 1;

            return (
              <div
                key={item.id}
                className={`${item.color} ${
                  index !== data.length - 1 ? "border-b border-black/20" : ""
                }`}
              >
                {/* Header */}
                <button
                  className={`w-full flex items-center justify-between px-4
                  ${isFirst ? "h-[120px]" : "h-[85px]"} 
                `}
                  onClick={() => !isFirst && toggle(item.id)}
                >
                  <h1
                    className={`font-semibold ${
                      isFirst ? "text-2xl text-center w-full" : "text-xl"
                    }`}
                  >
                    {item.title}
                  </h1>

                  {/* Icono (solo si puede abrirse) */}
                  {item.desc && (
                    <FiChevronDown
                      className={`text-2xl transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {/* Content - Solo afecta a los desplegables */}
                {item.desc && (
                  <div
                    className={`px-4 text-sm transition-all duration-300 overflow-hidden
                    ${isOpen ? "max-h-[300px] pb-4" : "max-h-0"} 
                  `}
                  >
                    {item.desc}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default InfoWhy2;
