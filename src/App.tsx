import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Industries from './components/Industries';
import Solutions from './components/Solutions';
import MonthlyTop3 from './components/MonthlyTop3';
import Careers from './components/Careers';
import Insights from './components/Insights';
import Metrics from './components/Metrics';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Insights />
      <About />
      <Services />
      <Industries />
      <Solutions />
      <MonthlyTop3 />
      <Careers />
      <Metrics />
      <Footer />
    </div>
  );
}

export default App;