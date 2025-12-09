import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutmePage from "./pages/AboutmePage";
import ContactPage from "./pages/ContactPage";
import Calendar from "./components/Calendar";
import SchedulePage from "./pages/SchedulePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sobre-mi" element={<AboutmePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/reservar" element={<SchedulePage />} />
    </Routes>
  );
}

export default App;
