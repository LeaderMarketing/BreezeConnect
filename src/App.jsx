import React from 'react';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import ProductCarousel from './components/ProductCarousel';
import Statistics from './components/Statistics';
import Benefits from './components/Benefits';
import PartnerPortal from './components/PartnerPortal';
import './styles/global.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroCarousel />
        <ProductCarousel />
        <Statistics />
        <Benefits />
        <PartnerPortal />
      </main>
    </div>
  );
}

export default App;
