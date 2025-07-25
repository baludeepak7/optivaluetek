import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import ApplicationIntegration from './components/services/ApplicationIntegration';
import APIManagement from './components/services/APIManagement';
import DataEngineering from './components/services/DataEngineering';
import CloudSolutions from './components/services/CloudSolutions';
import DevOpsSRE from './components/services/DevOpsSRE';
import AIMLOps from './components/services/AIMLOps';
import EnterpriseSolutions from './components/services/EnterpriseSolutions';
import WebMobileDev from './components/services/WebMobileDev';

const HomePage = () => (
  <>
    <Hero />
    <Solutions />
    <Industries />
    <CaseStudies />
    <Insights />
    <Culture />
    <Testimonials />
    <ContactForm />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/application-integration" element={<ApplicationIntegration />} />
          <Route path="/services/api-management" element={<APIManagement />} />
          <Route path="/services/data-engineering" element={<DataEngineering />} />
          <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
          <Route path="/services/devops-sre" element={<DevOpsSRE />} />
          <Route path="/services/ai-mlops" element={<AIMLOps />} />
          <Route path="/services/enterprise-solutions" element={<EnterpriseSolutions />} />
          <Route path="/services/web-mobile-dev" element={<WebMobileDev />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;