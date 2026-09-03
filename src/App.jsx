import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Epoch from "./pages/Epoch";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#c4a7e7]/30">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/epoch" element={<Epoch />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
