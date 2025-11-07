import React from "react";
import Hero from "../components/Hero";
import ServicesGrid from "../components/ServicesGrid";
import Consulting from "../components/Consulting";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <ServicesGrid />
      <Consulting />
    </div>
  );
};

export default HomePage;
