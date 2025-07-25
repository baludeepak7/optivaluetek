import React, { useState } from 'react';
import { Linkedin, Twitter, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [gdprConsent, setGdprConsent] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', { email, gdprConsent });
    setEmail('');
    setGdprConsent(false);
  };

  const offices = ['Bengaluru, India', 'Texas, USA', 'NSW, Australia'];
  const links = ['Privacy Policy', 'Terms of Service', 'Sitemap'];

  return (
    <footer className="bg-[#333333] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-[#A47864] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">O</span>
              </div>
              <div>
                <h3 
                  className="text-xl font-bold"
                  style={{ fontFamily: 'Poppins' }}
                >
                  OptiValueTek
                </h3>
                <p className="text-sm text-gray-400">Data & API-Driven Enterprise Modernization</p>
              </div>
            </div>
          </div>

          {/* Offices */}
          <div>
            <h4 
              className="text-lg font-bold mb-6"
              style={{ fontFamily: 'Poppins' }}
            >
              Offices
            </h4>
            <ul className="space-y-3">
              {offices.map((office, index) => (
                <li 
                  key={index} 
                  className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                  style={{ fontFamily: 'Inter' }}
                >
                  {office}
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 
              className="text-lg font-bold mb-6"
              style={{ fontFamily: 'Poppins' }}
            >
              Links
            </h4>
            <ul className="space-y-3">
              {links.map((link, index) => (
                <li key={index}>
                  <button 
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                    style={{ fontFamily: 'Inter' }}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 
              className="text-lg font-bold mb-6"
              style={{ fontFamily: 'Poppins' }}
            >
              Newsletter
            </h4>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-l-lg border border-gray-600 focus:outline-none focus:border-[#A47864]"
                  style={{ fontFamily: 'Inter' }}
                />
                <button
                  type="submit"
                  className="bg-[#A47864] px-4 py-2 rounded-r-lg hover:bg-[#8B6551] transition-colors duration-300"
                >
                  <Mail size={20} />
                </button>
              </div>
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="newsletterGdpr"
                  checked={gdprConsent}
                  onChange={(e) => setGdprConsent(e.target.checked)}
                  required
                  className="mt-1 w-4 h-4 text-[#A47864] border-gray-600 rounded focus:ring-[#A47864] bg-gray-700"
                />
                <label 
                  htmlFor="newsletterGdpr" 
                  className="text-xs text-gray-400"
                  style={{ fontFamily: 'Inter' }}
                >
                  I consent to receive marketing emails
                </label>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p 
              className="text-gray-400"
              style={{ fontFamily: 'Inter' }}
            >
              ©2025 OptiValueTek. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6">
              <button className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin size={24} />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter size={24} />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-300">
                <Youtube size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;