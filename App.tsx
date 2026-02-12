import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Pricing } from './components/Pricing';
import { HowItWorks } from './components/HowItWorks';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { RobloxLogin } from './components/RobloxLogin';
import { Ranking } from './components/Ranking';
import { CartProvider } from './contexts/CartContext';
import { CartDrawer } from './components/CartDrawer';

type Page = 'landing' | 'login' | 'ranking';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');

  // Used by the Cart Drawer "Finalizar Compra" button
  const handleCheckout = () => {
    setCurrentPage('login');
    window.scrollTo(0, 0);
  };

  const navigateToRanking = () => {
    setCurrentPage('ranking');
    window.scrollTo(0, 0);
  };

  const navigateHome = () => {
    setCurrentPage('landing');
    window.scrollTo(0, 0);
  };

  if (currentPage === 'login') {
    return <RobloxLogin />;
  }

  return (
    <CartProvider>
      <div className="min-h-screen bg-galaxy-bg text-white relative selection:bg-purple-500 selection:text-white overflow-x-hidden">
        {/* 
           BACKGROUND PERFORMANCE OPTIMIZATION LAYER
        */}
        <div className="fixed inset-0 z-0 pointer-events-none w-full h-full bg-[#030308]">
          <img 
            src="https://i.pinimg.com/originals/dc/23/2c/dc232c2a3fbdb1f0d4d21a2447403bd3.gif" 
            alt="Galaxy Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            style={{ transform: 'translate3d(0,0,0)' }}
          />
          
          {/* Simple darken layer using opacity instead of blend modes */}
          <div className="absolute inset-0 bg-[#030308]" style={{ opacity: 0.7 }}></div>
          
          {/* Gradient Fade to seamless black at bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030308]/20 to-[#030308]"></div>
          
          {/* Static Noise Texture */}
          <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>

          {/* Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030308_120%)] opacity-90"></div>
        </div>

        {/* Global Cart UI */}
        <CartDrawer onCheckout={handleCheckout} />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center w-full transform-gpu">
          <Header onRankingClick={navigateToRanking} onHomeClick={navigateHome} />
          
          {currentPage === 'ranking' ? (
             <Ranking onBack={navigateHome} />
          ) : (
            <main className="w-full max-w-[1280px] px-4 md:px-6 flex flex-col gap-32 pb-24 pt-10">
              <Hero onOpenRanking={navigateToRanking} />
              {/* Pricing now handles cart adding internally, no need to pass login nav here anymore */}
              <Pricing />
              <HowItWorks />
              <Reviews />
              <FAQ />
            </main>
          )}
          
          <Footer />
        </div>
      </div>
    </CartProvider>
  );
}