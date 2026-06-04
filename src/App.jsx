import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen selection:bg-brand-yellow selection:text-black bg-brand-bg">
      {/* 1. Navbar: Fixed (90px) */}
      <Navbar />

      {/* Main Container: Pt-90 to account for fixed navbar */}
      <div className="pt-[90px]">
        
        {/* 2. Hero Section: Exactly 100vh - 90px */}
        <Hero />
        
        {/* 3. About Section: Pixel-perfect row-based content */}
        <AboutSection />

        {/* 4. Services Section: Offer list and testimonials */}
        <ServicesSection />
        
        {/* 5. Footer Section: Newsletter & Grid */}
        <Footer />
        
      </div>
    </div>
  );
}

export default App;
