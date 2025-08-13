import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlobityCursor from './components/BlobityCursor';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#0E1016] text-[#e4ded7] scroll-smooth">

      <Navbar />
      <Hero />
      <Work />
      <About />
      <Certificates />
      <Contact />
      <Footer />
      <BlobityCursor />
    </div>
  );
}
