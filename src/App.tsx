import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import CursorTrail from './components/CursorTrail';
import AIMascot from './components/AIMascot';
import HomePage from './pages/HomePage';
import DeepfakeDetectionPage from './pages/DeepfakeDetectionPage';
import SteganographyPage from './pages/SteganographyPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
        <ParticleBackground />
        <CursorTrail />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/deepfake-detection" element={<DeepfakeDetectionPage />} />
          <Route path="/steganography" element={<SteganographyPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        
        <AIMascot />
      </div>
    </Router>
  );
}

export default App;