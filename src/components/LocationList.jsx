import React from "react";

const Locations = [
  {
    id: 1,
    district: "Miraflores",
    address: "Calle Berlín 456, Miraflores",
    schedules: "Lunes a sabados desde 08:00 am hasta 09:00 pm",
    phone: "999 999 999",
  },
  {
    id: 2,
    district: "La Molina",
    address: "Av. La Molina 123, La Molina",
    schedules: "Lunes a sabados desde 08:00 am hasta 09:00 pm",

    phone: "999 999 999",
  },
  {
    id: 3,
    district: "San Miguel",
    address: "Av. La Paz 123, San Miguel",
    schedules: "Lunes a sabados desde 08:00 am hasta 09:00 pm",

    phone: "999 999 999",
  },
  {
    id: 4,
    district: "San Isidro",
    address: "Av. Belén 123, San Isidro",
    schedules: "Lunes a sabados desde 08:00 am hasta 09:00 pm",

    phone: "999 999 999",
  },
  {
    id: 5,
    district: "Jesús María",
    address: "Av. La Gracia 123, Jesús María",
    schedules: "Lunes a sabados desde 08:00 am hasta 09:00 pm",
    phone: "999 999 999",
  },
];

const LocationList = () => {
  return (
    <div className="lg:max-w-3xl  max-w-xs">
      <h1 className="text-white text-3xl mb-4 lg:mt-12">Ubícanos en:</h1>
      <ul className="grid  lg:grid-cols-3 gap-6">
        {Locations.map((loc) => (
          <li key={loc.id} className="flex flex-col lg:max-w-3xl">
            <h2 className="text-amber-200 text-2xl">{loc.district}</h2>
            <p className="text-white text-sm lg:text-sm">{loc.address}</p>
            <p className="text-white text-sm lg:text-sm">Cel: {loc.phone}</p>
            <p className="text-white text-sm lg:text-sm">
              Horario de atención: {loc.schedules}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationList;
