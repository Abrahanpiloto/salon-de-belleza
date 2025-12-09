import React from "react";
import LayoutMain from "../components/LayoutMain";
import Calendar from "../components/Calendar";

const SchedulePage = () => {
  return (
    <LayoutMain>
      <div className="px-4 py-28 lg:py-24 min-h-screen bg-gray-900">
        <Calendar />
      </div>
    </LayoutMain>
  );
};

export default SchedulePage;
