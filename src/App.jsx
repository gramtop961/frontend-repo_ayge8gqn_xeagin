import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import ContactCTA from './components/ContactCTA';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-black tracking-[0.3em] text-white">
            RETROFUTURA
          </a>
          <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#process" className="hover:text-white">Process</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/90 hover:border-white/40 hover:bg-white/10">
            Get in touch
          </a>
        </div>
      </header>

      <main id="top">
        <Hero />
        <div id="services"><Services /></div>
        <div id="process"><Process /></div>
        <ContactCTA />
      </main>
    </div>
  );
};

export default App;
