import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import "../styles/global.css";

const LayoutMain = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="">{children}</main>

      <Footer />
    </div>
  );
};

export default LayoutMain;
