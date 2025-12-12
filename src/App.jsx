import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutmePage from "./pages/AboutmePage";
import ContactPage from "./pages/ContactPage";

import SchedulePage from "./pages/SchedulePage";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            fontSize: "19px",
            padding: "24px",
            borderRadius: "12px",
          },
        }}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre-mi" element={<AboutmePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/reservar" element={<SchedulePage />} />
      </Routes>
    </>
  );
}

export default App;
