import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const offices = [
    {
      location: "Bengaluru, India",
      address: "Electronic City, Bengaluru, Karnataka 560100",
      phone: "+91 80 1234 5678",
      email: "india@optivaluetek.com"
    },
    {
      location: "Texas, USA",
      address: "Austin, TX 78701, United States",
      phone: "+1 512 555 0123",
      email: "usa@optivaluetek.com"
    },
    {
      location: "NSW, Australia",
      address: "Sydney, NSW 2000, Australia",
      phone: "+61 2 9876 5432",
      email: "australia@optivaluetek.com"
    }
  ];

  const quickLinks = [
    { title: "Services", href: "#services" },
    { title: "Industries", href: "#industries" },
    { title: "Solutions & Tools", href: "#solutions-and-tools" },
    { title: "Insights", href: "#insights" },
    { title: "Careers", href: "#careers" },
    { title: "About Us", href: "#about-us" }
  ];

  const services = [
    "Data Integration & Engineering",
    "API Management & Microservices",
    "Cloud Solutions",
    "DevOps & SRE",
    "Data Science & MLOps",
    "Web & Mobile Development"
  ];

  return (
    <footer id="contact" className="bg-[#1a202c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0052cc] to-[#00a3e0] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">O</span>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">OptiValueTek</div>
                  <div className="text-xs text-gray-400">Data‑Driven Enterprise Modernization</div>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Transforming businesses through innovative technology solutions since 2011. 
                Your trusted partner for enterprise modernization.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#f5a623] transition-colors p-2 bg-gray-800 rounded-lg hover:bg-gray-700">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#f5a623] transition-colors p-2 bg-gray-800 rounded-lg hover:bg-gray-700">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#f5a623] transition-colors p-2 bg-gray-800 rounded-lg hover:bg-gray-700">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-[#f5a623] transition-colors flex items-center group"
                    >
                      <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-300 text-sm leading-relaxed">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Stay Connected</h4>
              <p className="text-gray-300 mb-4 text-sm">
                Get monthly insights & industry trends delivered to your inbox
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0052cc] text-white placeholder-gray-400"
                />
                <button className="w-full bg-[#0052cc] hover:bg-[#003d99] text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Office Locations */}
          <div className="border-t border-gray-800 pt-12 mb-12">
            <h4 className="text-lg font-semibold text-white mb-8 text-center">Our Global Offices</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors">
                  <h5 className="font-semibold text-[#f5a623] mb-4">{office.location}</h5>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-center justify-center gap-2">
                      <MapPin size={16} />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Phone size={16} />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Mail size={16} />
                      <span>{office.email}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 OptiValueTek. All rights reserved. | 
              <a href="#" className="hover:text-[#dc2626] transition-colors ml-1">Privacy Policy</a> | 
              <a href="#" className="hover:text-[#dc2626] transition-colors ml-1">Terms of Service</a>
            </div>
            <div className="text-gray-400 text-sm">
              Built with excellence in Bengaluru, Texas & NSW
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;