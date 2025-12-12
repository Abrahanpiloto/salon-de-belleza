import Calendar from "./Calendar";
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

      <div className="relative z-10 flex flex-col justify-center items-center">
        <header className="bg-black flex py-4 justify-center w-full">
          <h1 className="text-white text-3xl ">Nuestras Sedes</h1>
        </header>

        {/* CONTENEDOR PRINCIPAL: MOBILE = columna, DESKTOP = fila */}
        <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto p-6 gap-18">
          {/* COLUMN 1 - LocationList (izquierda en desktop, abajo en mobile) */}
          <div className="flex-1 order-2 lg:order-1">
            <LocationList />
          </div>

          {/* COLUMN 2  */}
          <div className="flex-1 order-1 lg:order-2 flex flex-col items-end justify-center gap-8">
            <h2 className="text-4xl text-amber-200 text-end">
              Reserva una cita aquí
            </h2>
            <a
              href="/reservar"
              className="px-16 py-3 bg-[#7BF1A8] text-black text-2xl rounded-4xl 
               hover:bg-white transition shadow-lg cursor-pointer btn-shine "
            >
              Agenda aquí
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
