import esLocale from "@fullcalendar/core/locales/es";

import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function Calendar({ onDateSelect }) {
  return (
    <div className="bg-white w-full rounded-xl overflow-hidden">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        dateClick={(info) => {
          onDateSelect(info.dateStr);
        }}
        selectable={true}
        height={500}
        expandRows={false}
        locale={esLocale}

        // ...otras props
      />
    </div>
  );
}
