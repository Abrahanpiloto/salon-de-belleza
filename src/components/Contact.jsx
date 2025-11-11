// ContactSection.jsx
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  function AddressCard({ district, address, phone }) {
    return (
      <div className="bg-black p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-white lg:backdrop-blur-sm opacity-80">
        <h3 className="text-xl font-semibold text-amber-200 mb-2">
          {district}
        </h3>
        <p className="text-white text-sm mb-1">{address}</p>
        <p className="text-white font-medium">{phone}</p>
      </div>
    );
  }

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Fondo SOLO en desktop */}
      <div className="hidden lg:block absolute inset-0 -z-10">
        <img
          src="/3-chicas.jpg"
          alt="Equipo profesional en oficinas modernas de Lima - Sedes en La Molina, Miraflores, San Miguel, Jesús María y San Isidro"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        {/* Overlay con 60% de opacidad para ver la imagen */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Fondo para móvil/tablet */}
      <div className="lg:hidden bg-gray-500 absolute inset-0 -z-20"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white lg:text-white flex items-baseline justify-center gap-2">
            Contáctanos <FaMapMarkerAlt />
          </h2>
          <p className="mt-3 text-md text-amber-200 ">
            Encuentra nuestra sede más cercana
          </p>
        </div>

        {/* Grid de direcciones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AddressCard
            district="La Molina"
            address="Av. La Molina 123, La Molina"
            phone="+51 987 654 321"
          />
          <AddressCard
            district="Miraflores"
            address="Calle Berlín 456, Miraflores"
            phone="+51 987 654 322"
          />
          <AddressCard
            district="San Miguel"
            address="Av. La Mar 789, San Miguel"
            phone="+51 987 654 323"
          />
          <AddressCard
            district="Jesús María"
            address="Av. Brasil 101, Jesús María"
            phone="+51 987 654 324"
          />
          <AddressCard
            district="San Isidro"
            address="Av. Rivera Navarrete 501, San Isidro"
            phone="+51 987 654 325"
          />
        </div>
      </div>
    </section>
  );
}
