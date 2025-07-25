import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Industries from './components/Industries';
import CaseStudies from './components/CaseStudies';
import Insights from './components/Insights';
import Culture from './components/Culture';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Solutions />
      <Industries />
      <CaseStudies />
      <Insights />
      <Culture />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;