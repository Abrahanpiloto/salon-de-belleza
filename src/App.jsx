import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutmePage from "./pages/AboutmePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sobre-mi" element={<AboutmePage />} />
    </Routes>
  );
}

export default App;
