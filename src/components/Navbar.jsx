import React, { useState, useEffect } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [scrollUpDistance, setScrollUpDistance] = useState(0);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      const scrollingDown = lastScrollY < currentScrollY;

      if (scrollingDown) {
        // Bajando → ocultar + reiniciar distancia
        setVisible(false);
        setScrollUpDistance(0);
      } else {
        // Subiendo → calcular cuánto subiste
        const distanceUp = lastScrollY - currentScrollY;
        const newDistance = Math.min(scrollUpDistance + distanceUp, 150); // máximo 150px
        setScrollUpDistance(newDistance);

        // Mostrar solo si subiste más de 100px
        if (newDistance > 120 || currentScrollY < 50) {
          setVisible(true);
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollUpDistance]);

  return (
    <nav
      className={`fixed left-0 w-full shadow-md z-50 transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-9xl mx-auto bg-black flex items-center justify-between px-4 py-3 lg:py-4 opacity-75">
        {/* --- Mobile: hamburguesa (izquierda) --- */}
        <button
          className="lg:hidden cursor-pointer  transition-transform duration-300"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          aria-label={
            isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"
          }
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <GiHamburgerMenu
            aria-hidden="true"
            className={`text-2xl text-amber-200 transition-transform duration-300 ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
          />
        </button>

        {/* --- Logo (centro en mobile, izquierda en desktop) --- */}
        <div className="flex-1 flex justify-center lg:justify-start">
          <a href="/" className="">
            <img
              src="/logo-mobile-mejorada.png"
              alt="Logotipo del salón"
              className="w-52 h-12 object-cover"
            />
          </a>
        </div>

        {/* --- Links centro (solo visible en lg) --- */}
        <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 text-md text-amber-200">
          <a href="/sobre-mi" className="hover:text-[#5683A0]">
            ¿Quién soy?
          </a>
          <a href="/store" className="hover:text-[#5683A0]">
            Servicios
          </a>
          <a href="/contact" className="hover:text-[#5683A0]">
            Galería
          </a>
          <a href="/contact" className="hover:text-[#5683A0]">
            Contacto/Ubicaciones
          </a>
        </div>

        {/* --- Carrito + búsqueda (derecha en lg) --- */}
        {/* <div className="hidden lg:flex items-center space-x-4">
          <input
            type="text"
            placeholder="Buscar..."
            className="px-3 py-1 rounded-md text-black bg-blue-100"
          />
          <button className="relative ">
            <FaCartShopping className="text-2xl" />

            <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-1.5 py-0.5 rounded-full ">
              0
            </span>
          </button>
        </div> */}
      </div>

      {/* --- Mobile: menú desplegable --- */}

      <div
        className={`lg:hidden bg-black w-full px-4 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-60  py-3" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <a
          href="/sobre-mi"
          className="block text-amber-200 hover:text-white py-2"
        >
          ¿Quién soy?
        </a>
        <a href="/store" className="block text-amber-200 hover:text-white py-2">
          Servicios
        </a>
        <a
          href="/contact"
          className="block text-amber-200 hover:text-white py-2"
        >
          Galería
        </a>
        <a
          href="/contact"
          className="block text-amber-200 hover:text-white py-2"
        >
          Contacto
        </a>

        {/* <button className="relative mt-2">
          <FaCartShopping className="text-2xl" />
          <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-1.5 py-0.5 rounded-full">
            0
          </span>
        </button> */}
      </div>
    </nav>
  );
}
