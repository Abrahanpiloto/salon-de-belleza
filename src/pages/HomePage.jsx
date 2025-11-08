import React from "react";
// import Hero from "../components/Hero";
import ServicesGrid from "../components/ServicesGrid";
import Consulting from "../components/Consulting";
import Hero2 from "../components/Hero2";

const HomePage = () => {
  return (
    <div>
      {/* <Hero /> */}
      <Hero2 />
      <ServicesGrid />
      <Consulting />
    </div>
  );
};

export default HomePage;
