import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Books from './components/Books';
import Schedule from './components/Schedule';
import Workshops from './components/Workshops';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <Header />
      <Hero />
      <About />
      <Books />
      <Schedule />
      <Workshops />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;

