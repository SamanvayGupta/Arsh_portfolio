import React from 'react';
import { Header } from './components/Header';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Portfolio } from './sections/Portfolio';
import { Resume } from './sections/Resume';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import BackgroundEffect from './components/BackgroundEffect';

function App() {
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 font-sans overflow-hidden">
      {/* Background effect */}
      <BackgroundEffect />

      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
