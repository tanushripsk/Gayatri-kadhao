import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ParticlesBackground from "./components/ParticlesBackground";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';


const App = () => {
  return (
    <Router>
      <div className="relative z-0">
        <ParticlesBackground />
        <Navbar />
        <main className="relative z-0">
          <Routes>
            <Route path="/" element={<HeroSection />} />
           
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
  );
};

export default App;
