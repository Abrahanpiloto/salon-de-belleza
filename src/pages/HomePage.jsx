import React from "react";
// import Hero from "../components/Hero";
import ServicesGrid from "../components/ServicesGrid";
import Consulting from "../components/Consulting";
import Hero3 from "../components/Hero3";
import InfoWhy2 from "../components/InfoWhy2";
import LayoutMain from "../components/LayoutMain";
import Galery from "../components/Galery";
import Contact from "../components/Contact";

const HomePage = () => {
  return (
    <div>
      <LayoutMain>
        <Hero3 />
        <ServicesGrid />
        <Consulting />
        <InfoWhy2 />
        <Galery />
        <Contact />
      </LayoutMain>
    </div>
  );
};

export default HomePage;
