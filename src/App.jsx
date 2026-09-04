import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Epoch from "./pages/Epoch";
import RecruiterDossierModal from "./components/RecruiterDossierModal";

export default function App() {
  const [isDossierOpen, setIsDossierOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsDossierOpen(true);
    const handleClose = () => setIsDossierOpen(false);

    window.addEventListener("open-dossier", handleOpen);
    window.addEventListener("close-dossier", handleClose);

    return () => {
      window.removeEventListener("open-dossier", handleOpen);
      window.removeEventListener("close-dossier", handleClose);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#c4a7e7]/30 overflow-x-hidden">
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

      {/* Global 30s Recruiter Speedrun Dossier Modal (Ctrl+K / ⌘K) */}
      <RecruiterDossierModal
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
      />
    </div>
  );
}
