import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black shadow-md z-50 opacity-70">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 lg:py-4">
        {/* --- Mobile: hamburguesa (izquierda) --- */}
        <button
          className="lg:hidden cursor-pointer  transition-transform duration-300"
          onClick={() => {
            console.log("👉 Click detectado, estado previo:", isOpen);
            setIsOpen(!isOpen);
          }}
        >
          <GiHamburgerMenu
            className={`text-2xl transition-transform duration-300 ${
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
          <a href="/about" className="hover:text-[#5683A0]">
            Nosotros
          </a>
          <a href="/store" className="hover:text-[#5683A0]">
            Servicios
          </a>
          <a href="/contact" className="hover:text-[#5683A0]">
            Galería
          </a>
          <a href="/contact" className="hover:text-[#5683A0]">
            Contacto
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
        className={`lg:hidden bg-[#e2a555] w-full px-4 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-60 opacity-100 py-3" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <a href="/about" className="block hover:text-[#5683A0] py-2">
          Nosotros
        </a>
        <a href="/store" className="block hover:text-[#5683A0] py-2">
          Tienda
        </a>
        <a href="/contact" className="block hover:text-[#5683A0] py-2">
          Contacto
        </a>

        <button className="relative mt-2">
          <FaCartShopping className="text-2xl" />
          <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-1.5 py-0.5 rounded-full">
            0
          </span>
        </button>
      </div>
    </nav>
  );
}
