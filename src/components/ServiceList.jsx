import React from "react";

const services = [
  "Corte en Seco “Lima Style”",
  "Balayage",
  "Keratina Peruana “Anti-Frizz Limeño”",
  "Olaplex Reconstructor “Lima Rescue”",
  "Detox Capilar “Lima Clean”",
  "Peinado “Costa Verde Waves”",
  "Peeling o Detox Capilar",
  "Tinte o Coloración Capilar",
  "Estilizado o Peinado para Eventos",
  "Corte de Cabello Personalizado",
];

export default function ServicesList() {
  return (
    <div className="w-full max-w-xl mx-auto lg:max-w-xl lg:w-full lg:flex-1 py-12">
      <h1 className="text-3xl text-amber-200 mb-6 text-center">
        Algunos de nuestros Servicios
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="group flex items-center space-x-3 px-4 py-2 
              rounded-md transition-all duration-300 hover:bg-amber-200/10 hover:border-amber-200/40 hover:shadow-lg hover:shadow-amber-200/10"
          >
            <div className="w-2 h-2 bg-amber-200 rounded-full group-hover:scale-150 transition-transform duration-300 shrink-0" />
            <span className="text-white font-light text-md  group-hover:text-white transition-colors">
              {service}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-6 text-md text-white text-center lg:text-left italic">
        Si no ves el que deseas solo consultanos, estaremos felices de ayudarte!
      </p>
    </div>
  );
}
