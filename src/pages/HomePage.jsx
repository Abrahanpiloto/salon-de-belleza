import React from "react";
// import Hero from "../components/Hero";
import ServicesGrid from "../components/ServicesGrid";
import Consulting from "../components/Consulting";
import Hero3 from "../components/Hero3";
import InfoWhy from "../components/InfoWhy";
import LayoutMain from "../components/LayoutMain";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div>
      <LayoutMain>
        <Hero3 />
        <ServicesGrid />
        <Consulting />
        <InfoWhy />
      </LayoutMain>
    </div>
  );
};

export default HomePage;
