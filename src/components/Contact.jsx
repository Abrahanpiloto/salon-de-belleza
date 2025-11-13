import { FaMapMarkerAlt } from "react-icons/fa";
import LocationList from "./LocationList";

export default function Contact() {
  return (
    <section id="contacto" className="min-h-screen relative overflow-hidden">
      {/* Fondo SOLO en desktop */}
      <div className=" absolute inset-0 -z-10">
        <img
          src="/3-chicas.jpg"
          alt="Equipo profesional en oficinas modernas de Lima - Sedes en La Molina, Miraflores, San Miguel, Jesús María y San Isidro"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        {/* Overlay con 60% de opacidad para ver la imagen */}
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center ">
        <header className="bg-black flex py-4 justify-center w-full">
          <h1 className="text-white text-3xl ">Nuestras Sedes</h1>
        </header>
        <LocationList />
      </div>
    </section>
  );
}
