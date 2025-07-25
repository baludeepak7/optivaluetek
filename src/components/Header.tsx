import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      name: 'What we do', 
      href: '#solutions',
      hasDropdown: true,
      dropdownItems: [
        'Application & Process Integration',
        'API Management',
        'Data Engineering',
        'AI/MLOps',
        'Cloud Solutions',
        'DevOps & SRE'
      ]
    },
    { 
      name: 'Who we are', 
      href: '#industries',
      hasDropdown: true,
      dropdownItems: [
        'Company Overview',
        'Global Locations',
        'Awards & Recognition',
        'Client Success Stories'
      ]
    },
    { 
      name: 'Insights', 
      href: '#insights',
      hasDropdown: true,
      dropdownItems: [
        'Case Studies',
        'White Papers',
        'Webinars',
        'Technology Blogs'
      ]
    },
    { name: 'Careers', href: '#careers' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl border-b border-gray-800/50' 
        : 'bg-gray-900/80 backdrop-blur-sm'
    }`}>
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">O</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl blur opacity-30 animate-pulse" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">
                OptiValueTek
              </h1>
              <p className="text-xs text-blue-400 leading-tight">
                Digital Transformation & Enterprise Modernization
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`flex items-center gap-1 text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm py-2 ${
                    item.name === 'What we do' ? 'text-orange-400' : ''
                  }`}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} 
                    />
                  )}
                </button>
                
                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-gray-800/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl py-2 animate-in slide-in-from-top-2 duration-200">
                    {item.dropdownItems?.map((dropdownItem, index) => (
                      <button
                        key={index}
                        className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors duration-200 text-sm"
                        onClick={() => scrollToSection(item.href)}
                      >
                        {dropdownItem}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <button
              onClick={() => scrollToSection('#contact')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium text-sm transform hover:scale-105 shadow-lg"
            >
              Contact us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-700/50">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-left text-sm"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#contact')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium w-fit text-sm"
              >
                Contact us
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;