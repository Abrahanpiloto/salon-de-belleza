import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutmePage from "./pages/AboutmePage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sobre-mi" element={<AboutmePage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
