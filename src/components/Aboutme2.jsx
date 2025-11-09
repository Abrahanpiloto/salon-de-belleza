import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";

const Aboutme = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = `
    A los 25 años, Sandra inició su sueño con una maleta de herramientas de belleza y un corazón lleno de pasión, visitando hogares en Lima para realzar la belleza natural de cada mujer. Con dedicación y un toque personal, transformaba rutinas en momentos de empoderamiento.
    Hoy, a sus 35 años, esa chispa ha crecido en 5 salones exclusivos en Miraflores, San Isidro, Surco, La Molina y San Borja. Cada espacio es un refugio de lujo, donde técnicas innovadoras se unen a productos premium para resultados impecables.
    Sandra no solo crea looks; inspira confianza y autoestima. "Tu belleza es única, y nosotras la celebramos", dice ella.
    Lo que empezó como un servicio a domicilio se convirtió en una comunidad de mujeres empoderadas. Miles de clientas confían en nosotras porque sabemos escuchar, innovar y hacerte sentir reina. Ven, únete a esta historia de éxito. ¡Tu transformación empieza aquí!
  `.trim();

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* === DESKTOP: Imagen de fondo + texto completo a la izquierda === */}
      <div className="hidden md:flex items-center min-h-screen py-16 px-16">
        <img
          src="/propietaria-desktop2.jpg"
          alt="Sandra Haro, fundadora de Sandra Haro, en uno de sus salones"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="relative z-10 max-w-lg bg-black opacity-90 p-10 rounded-lg text-white space-y-6 ml-8 lg:ml-20">
          <h1 className="text-3xl lg:text-4xl font-light text-amber-200 leading-tight">
            ¡Conoce a Sandra, la visión detrás de Sandra Haro!
          </h1>
          <p className="text-md leading-relaxed text-gray-100">
            {fullText.split("\n")[0]}
          </p>
          <p className="text-md leading-relaxed text-gray-100">
            {fullText.split("\n")[1]}
          </p>
          <p className="text-md leading-relaxed text-gray-100">
            {fullText.split("\n")[2]}
          </p>
          <p className="text-md leading-relaxed text-gray-100">
            {fullText.split("\n")[3]}
            <span className="block mt-2 italic text-amber-200">
              "Tu belleza es única, y nosotras la celebramos", dice ella.
            </span>
          </p>
          <p className="text-lg leading-relaxed text-gray-100 font-medium">
            {fullText.split("\n")[4]}
            <span className="block mt-3 text-amber-200 font-bold">
              Ven, únete a esta historia de éxito. ¡Tu transformación empieza
              aquí!
            </span>
          </p>
        </div>
      </div>

      {/* === MÓVIL: CARD con "Leer más" === */}
      <div className="md:hidden flex items-center justify-center min-h-screen px-4 py-8 bg-[#514E4A]">
        <div className="w-full max-w-sm bg-gray-800 rounded-md shadow-2xl p-8 text-center space-y-6">
          {/* Avatar */}
          <div className="mx-auto w-62 h-62 rounded-full overflow-hidden">
            <img
              src="/avatar-sandra.jpg"
              alt="Sandra Haro, fundadora"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Nombre */}
          <div>
            <h1 className="text-xl font-bold text-white">Sandra Haro</h1>
            <p className="text-sm text-amber-200">Fundadora de Sandra Haro</p>
          </div>

          {/* Texto plegable */}
          <div className="text-left text-sm leading-relaxed text-gray-100 space-y-3">
            <p>{fullText.split("\n")[0].substring(0, 120)}...</p>
            {/* Contenido expandido con animación */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isExpanded ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              <p>{fullText.split("\n")[1]}</p>
              <p>{fullText.split("\n")[2]}</p>
              <p className="italic text-amber-200">
                "Tu belleza es única, y nosotras la celebramos", dice ella.
              </p>
              <p className="font-medium">
                {fullText.split("\n")[3].split("Ven")[0]}
                <span className="block mt-2 text-amber-200 font-bold">
                  Ven, únete a esta historia de éxito. ¡Tu transformación
                  empieza aquí!
                </span>
              </p>
            </div>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gray-100 italic font-medium text-xs block"
            >
              {isExpanded ? "Leer menos" : "Leer más"}
            </button>

            {/* {isExpanded && (
              <>
                <p>{fullText.split("\n")[1]}</p>
                <p>{fullText.split("\n")[2]}</p>
                <p className="italic text-amber-200">
                  "Tu belleza es única, y nosotras la celebramos", dice ella.
                </p>
                <p className="font-medium">
                  {fullText.split("\n")[3].split("Ven")[0]}
                  <span className="block mt-2 text-amber-200 font-bold">
                    Ven, únete a esta historia de éxito. ¡Tu transformación
                    empieza aquí!
                  </span>
                </p>
              </>
            )}

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gray-100 italic font-medium text-xs block"
            >
              {isExpanded ? "Leer menos" : "Leer más"}
            </button> */}
          </div>

          {/* Redes sociales */}
          <div className="flex justify-center items-center space-x-6 pt-4 border-t border-gray-100 ">
            <a
              href="https://instagram.com/sandrahobeauty"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 text-white text-3xl font-medium"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com/sandrahobeauty"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 text-white text-3xl font-medium"
            >
              <FaFacebook />
            </a>
            <a
              href="https://wa.me/51987654321"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 text-white text-3xl font-medium"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://wa.me/51987654321"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 text-white text-3xl font-medium"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
