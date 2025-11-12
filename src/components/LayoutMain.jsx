import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "./WhatsAppButton";
// import "../styles/global.css";

const LayoutMain = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="">{children}</main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default LayoutMain;
