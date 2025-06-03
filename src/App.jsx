import React from 'react';
import NavBar from './components/NavBar';
import HeroCarousel from './components/HeroCarousel';
import TechPartners from './components/TechPartners';
import ProductCarousel from './components/ProductCarousel';
import Statistics from './components/Statistics';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials'; //dkomuna iactive to
import PartnerPortal from './components/PartnerPortal';
import BottomMenu from './components/BottomMenu'; 
import Footer from './components/Footer'; 
import './styles/global.css';

function App() {  return (
    <div className="app">
      <NavBar />      <main>
        <HeroCarousel />
        <TechPartners />
        <ProductCarousel />
        <Statistics />
        <Benefits />
        <PartnerPortal />
      </main>
      <BottomMenu />
      <Footer />
    </div>
  );
}

export default App;
