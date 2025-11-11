import React from "react";
import Carousel from "./Carousel";
import ServiceList from "./ServiceList";

const Galery = () => {
  return (
    <div className="bg-gray-800 min-h-screen">
      <header className="bg-black flex items-center justify-center py-4">
        <h1 className="text-amber-200 text-3xl">Galería</h1>
      </header>

      {/* <p className="flex justify-center items-center text-3xl mt-28 text-gray-700">
        Proximamente...
      </p> */}
      <div className="flex flex-col md:flex-row lg:gap-2 items-center justify-center py-14 px-4">
        <div className="w-full md:w-auto flex justify-center">
          <div style={{ height: "600px", position: "relative" }}>
            <Carousel
              baseWidth={400}
              autoplay={true}
              autoplayDelay={3000}
              pauseOnHover={true}
              loop={true}
              round={false}
            />
          </div>
        </div>

        <div className="w-full md:w-auto flex justify-center h-[600px]">
          <ServiceList />
        </div>
      </div>
    </div>
  );
};

export default Galery;
