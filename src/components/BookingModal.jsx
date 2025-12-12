import { useEffect, useState } from "react";
import { saveAppointment } from "../services/appointmentsService";
import toast from "react-hot-toast";

export default function BookingModal({ isOpen, date, onClose }) {
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
  });

  // 1️⃣ Generar bloques de 1 hora (08:00 - 21:00)
  useEffect(() => {
    if (!isOpen) return;

    const slots = [];
    for (let hour = 8; hour < 21; hour++) {
      const start = `${hour.toString().padStart(2, "0")}:00`;
      const end = `${(hour + 1).toString().padStart(2, "0")}:00`;

      slots.push({
        id: `${start}-${end}`,
        start,
        end,
        status: "available", // luego vendrá Firebase
      });
    }

    setTimeSlots(slots);
    setSelectedSlot(null);
    setForm({
      name: "",
      lastName: "",
      phone: "",
      email: "",
    });
  }, [isOpen]);

  if (!isOpen) return null;

  const handleConfirm = async () => {
    try {
      const appointmentData = {
        date,
        time: selectedSlot.start,
        name: form.name,
        lastName: form.lastName,
        phone: form.phone,
        email: form.email,
      };

      await toast.promise(saveAppointment(appointmentData), {
        loading: "Guardando cita...",
        success: "¡Cita guardada exitosamente!",
        error: "No se pudo guardar la cita. Intenta nuevamente.",
      });
      onClose();
    } catch (error) {
      console.error("Error al confirmar la cita:", error);
      alert("No se pudo guardar la cita. Intenta otra vez.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="relative ml-auto h-full w-full max-w-md bg-white shadow-xl flex flex-col">
        {/* Header */}
        <div className="p-4 border-b flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Agendar cita</h2>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* 2️⃣ Selector de horas */}
          <div>
            <h3 className="text-sm font-medium mb-3">Selecciona una hora</h3>

            <div className="grid grid-cols-2 gap-2">
              {timeSlots.map((slot) => {
                const isSelected = selectedSlot?.id === slot.id;
                const isDisabled = slot.status === "occupied";

                return (
                  <button
                    key={slot.id}
                    disabled={isDisabled}
                    onClick={() => setSelectedSlot(slot)}
                    className={`
                      border rounded-2xl py-2 text-sm transition
                      ${
                        isDisabled
                          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                          : isSelected
                          ? "bg-blue-600 text-white"
                          : "bg-white hover:bg-blue-50"
                      }
                    `}
                  >
                    {slot.start} - {slot.end}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3️⃣ Formulario (solo si hay hora seleccionada) */}
          {selectedSlot && (
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Datos del cliente</h3>

              <input
                required
                type="text"
                placeholder="Nombre"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border rounded-md px-3 py-2 text-sm"
              />

              <input
                required
                type="text"
                placeholder="Apellido"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                className="w-full border rounded-md px-3 py-2 text-sm"
              />

              <input
                required
                type="tel"
                placeholder="Teléfono"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full border rounded-md px-3 py-2 text-sm"
              />

              <input
                type="email"
                placeholder="Email (opcional)"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border rounded-md px-3 py-2 text-sm"
              />
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t">
          <button
            onClick={handleConfirm}
            disabled={
              !selectedSlot || !form.name || !form.phone || !form.lastName
            }
            className="w-full rounded-4xl bg-gray-900 text-white py-2 disabled:opacity-50 cursor-pointer"
          >
            Confirmar cita
          </button>
        </div>
      </div>
    </div>
  );
}
