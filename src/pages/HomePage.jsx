import React from "react";
// import Hero from "../components/Hero";
import ServicesGrid from "../components/ServicesGrid";
import Consulting from "../components/Consulting";
import Hero2 from "../components/Hero2";
import InfoWhy from "../components/InfoWhy";

const HomePage = () => {
  return (
    <div>
      {/* <Hero /> */}
      <Hero2 />
      <ServicesGrid />
      <Consulting />
      <InfoWhy />
    </div>
  );
};

export default HomePage;
