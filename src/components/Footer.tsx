import React, { useState } from 'react';
import { Linkedin, Twitter, Youtube, Mail, Send, MapPin, Phone, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [gdprConsent, setGdprConsent] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = 'Newsletter Subscription Request';
    const body = `Email: ${email}\nGDPR Consent: ${gdprConsent ? 'Yes' : 'No'}`;
    window.open(`mailto:contact@optivaluetek.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
    setEmail('');
    setGdprConsent(false);
  };

  const services: Array<{ name: string; href: string }> = [
    { name: 'Application & Process Integration', href: '/services/application-integration' },
    { name: 'API Management & Microservices', href: '/services/api-management' },
    { name: 'Data Engineering & Science', href: '/services/data-engineering' },
    { name: 'AI/MLOps & Machine Learning', href: '/services/ai-mlops' },
    { name: 'Cloud Solutions & Infrastructure', href: '/services/cloud-solutions' },
    { name: 'DevOps & SRE', href: '/services/devops-sre' },
    { name: 'Enterprise Solutions', href: '/services/enterprise-solutions' },
    { name: 'Web & Mobile Development', href: '/services/web-mobile-dev' }
  ];

  const industries: Array<{ name: string; href: string }> = [
    { name: 'Company Overview', href: '/company-overview' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Industry Expertise', href: '#industries' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%)`
        }} />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div>
                <Link to="/">
                  <h1 className="text-xl font-bold text-white">
                    <img src="/logo/optivaluetek.webp" alt="OptiValueTek Logo" className="h-12" />
                  </h1>
                </Link>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Global technology consulting company specializing in digital transformation and enterprise modernization across 15+ countries.
            </p>

            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-blue-400" />
                <span>contact@optivaluetek.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-green-400" />
                <span>WhatsApp: +91 90355 10431</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">
              What we do
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-left text-sm"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">
              Who we are
            </h4>
            <ul className="space-y-3">
              {industries.map((industry, index) => (
                <li key={index}>
                  <a
                    href={industry.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-left text-sm"
                  >
                    {industry.name}
                  </a>
                </li>

              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">
              Stay Connected
            </h4>

            <form onSubmit={handleNewsletterSubmit} className="space-y-4 mb-6">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="flex-1 px-4 py-2 bg-gray-700/50 text-white rounded-l-xl border border-gray-600/50 focus:outline-none focus:border-blue-500 placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-r-xl hover:from-blue-700 hover:to-purple-700 transition-colors duration-300"
                >
                  <Send size={20} className="text-white" />
                </button>
              </div>
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="newsletterGdpr"
                  checked={gdprConsent}
                  onChange={(e) => setGdprConsent(e.target.checked)}
                  required
                  className="mt-1 w-4 h-4 text-blue-500 border-gray-600 rounded focus:ring-blue-500 bg-gray-700"
                />
                <label htmlFor="newsletterGdpr" className="text-xs text-gray-400">
                  I consent to receive marketing emails
                </label>
              </div>
            </form>

            <div className="space-y-4">
              <h5 className="font-semibold text-white text-sm">Global Offices</h5>
              <div className="space-y-2 text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin size={12} />
                  <span>🇮🇳 Delhi, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Presence */}
        <div className="border-t border-gray-700/50 pt-8 mb-8">
          <div className="text-center">
            <h5 className="font-semibold text-white mb-4 flex items-center justify-center gap-2">
              <Globe size={20} className="text-blue-400" />
              Project Delivery Regions
            </h5>
            <div className="flex flex-wrap justify-center gap-3">
              {['Malaysia', 'South Korea', 'Europe', 'Middle East', 'UK', 'US', 'India', 'ANZ'].map((region, index) => (
                <span key={index} className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600/50">
                  {region}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              ©2025 OptiValueTek. All rights reserved.
            </p>

            <div className="flex items-center space-x-6">
              <a
                href="https://www.linkedin.com/company/optivaluetek/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-gray-400 hover:text-white transition-colors duration-300">
                  <Linkedin size={24} />
                </button>
              </a>
            </div>
          </div>

          <div className="mt-4 text-center">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <Link to="/privacy-policy" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors duration-300">Terms of Service</Link>
              <Link to="/sitemap" className="hover:text-white transition-colors duration-300">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;