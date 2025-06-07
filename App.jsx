import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/success" element={<Success />} />
      <Route path="/cancel" element={<Cancel />} />
    </Routes>
  );
}
