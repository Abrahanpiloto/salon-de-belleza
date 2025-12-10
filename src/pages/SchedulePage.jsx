import React, { useState } from "react";
import LayoutMain from "../components/LayoutMain";
import Calendar from "../components/Calendar";
import BookingModal from "../components/BookingModal";

const SchedulePage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  return (
    <LayoutMain>
      <div className="px-4 py-28 lg:py-24 min-h-screen bg-gray-900">
        {/* contenedor principal */}
        <div className="max-w-7xl mx-auto flex gap-6">
          {/* columna izquierda: calendario */}
          <div className="w-full lg:w-2/3">
            <Calendar onDateSelect={handleDateClick} />
          </div>

          {/* columna derecha: modal */}
          <div className="hidden lg:block w-1/3 rounded-lg ">
            {/* aquí luego irá tu modal */}
            <BookingModal
              isOpen={isModalOpen}
              date={selectedDate}
              onClose={() => setIsModalOpen(false)}
            />
          </div>
        </div>
      </div>
    </LayoutMain>
  );
};

export default SchedulePage;
