import React from "react";

const Aboutme = () => {
  return (
    <section className="min-h-screen relative flex items-center py-12 px-26 overflow-hidden">
      <img
        src="/propietaria-desktop2.jpg"
        alt="Sandra Haro, fundadora de Sandra Haro, en uno de sus salones"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <div className="relative z-10 max-w-md bg-black opacity-90 p-8 rounded-lg">
        <h1 className="text-3xl md:text-4xl font-light text-amber-200 leading-tight">
          ¡Conoce a Sandra, la visión detrás de Sandra Haro!{" "}
        </h1>
        {/* Párrafo 1 */}
        <p className="text-lg leading-relaxed text-gray-100">
          A los 25 años, Sandra inició su sueño con una maleta de herramientas
          de belleza y un corazón lleno de pasión, visitando hogares en Lima
          para realzar la belleza natural de cada mujer. Con dedicación y un
          toque personal, transformaba rutinas en momentos de empoderamiento.
        </p>

        {/* Párrafo 2 */}
        <p className="text-lg leading-relaxed text-gray-100">
          Hoy, a sus 35 años, esa chispa ha crecido en 5 salones exclusivos en
          Miraflores, San Isidro, Surco, La Molina y San Borja. Cada espacio es
          un refugio de lujo, donde técnicas innovadoras se unen a productos
          premium para resultados impecables.
        </p>

        {/* Párrafo 3 */}
        <p className="text-lg leading-relaxed text-gray-100">
          Sandra no solo crea looks; inspira confianza y autoestima.
          <span className="block mt-2 italic text-amber-200">
            "Tu belleza es única, y nosotras la celebramos", dice ella.
          </span>
        </p>

        {/* Párrafo final */}
        <p className="text-lg leading-relaxed text-gray-100 font-medium">
          Lo que empezó como un servicio a domicilio se convirtió en una
          comunidad de mujeres empoderadas. Miles de clientas confían en
          nosotras porque sabemos escuchar, innovar y hacerte sentir reina.
          <span className="block mt-3 text-amber-200 ">
            Ven, únete a esta historia de éxito. ¡Tu transformación empieza
            aquí!
          </span>
        </p>
      </div>
    </section>
  );
};

export default Aboutme;
