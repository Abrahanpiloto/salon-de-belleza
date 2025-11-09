import React from "react";
// import Hero from "../components/Hero";
import ServicesGrid from "../components/ServicesGrid";
import Consulting from "../components/Consulting";
import Hero3 from "../components/Hero3";
import InfoWhy from "../components/InfoWhy";

const HomePage = () => {
  return (
    <div>
      {/* <Hero /> */}
      <Hero3 />
      <ServicesGrid />
      <Consulting />
      <InfoWhy />
    </div>
  );
};

export default HomePage;
