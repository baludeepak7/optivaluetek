import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimerRef = useRef<number | null>(null);

  const open = (name: string) => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setActiveDropdown(name);
  };

  const scheduleClose = () => {
    closeTimerRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
      closeTimerRef.current = null;
    }, 120);
  };

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      name: 'What we do',
      href: '#solutions',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Application & Process Integration', href: '/services/application-integration' },
        { name: 'API Management & Microservices', href: '/services/api-management' },
        { name: 'Data Engineering & Science', href: '/services/data-engineering' },
        { name: 'AI/MLOps & Machine Learning', href: '/services/ai-mlops' },
        { name: 'Cloud Solutions & Infrastructure', href: '/services/cloud-solutions' },
        { name: 'DevOps & SRE', href: '/services/devops-sre' },
        { name: 'Enterprise Solutions', href: '/services/enterprise-solutions' },
        { name: 'Web & Mobile Development', href: '/services/web-mobile-dev' }
      ]
    },
    {
      name: 'Who we are',
      href: '#industries',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Company Overview', href: '#industries' },
        { name: 'About us', href: '#industries' },
        { name: 'Industry Expertise', href: '#industries' }
      ]
    },
    {
      name: 'Insights',
      href: '#insights',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Case Studies', href: '#case-studies' },
        { name: 'White Papers', href: '#insights' }
      ]
    },
    { name: 'Careers', href: '#careers' },
    { name: 'Investor Corner', href: '/investor-corner' }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        window.location.href = '/' + href;
      } else {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleNavigation = (href: string) => {
    if (href.startsWith('/')) {
      navigate(href);
    } else {
      scrollToSection(href);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl border-b border-gray-800/50'
          : 'bg-gray-900/80 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div>
              <Link to="/">
                <h1 className="text-xl font-bold text-white">
                  <img src="/logo/optivaluetek.webp" alt="OptiValueTek Logo" className="h-12" />
                </h1>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div
            className="hidden lg:flex items-center space-x-8 relative"
            onMouseLeave={scheduleClose}
          >
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && open(item.name)}
              >
                <button
                  onClick={() => {
                    if (item.hasDropdown) {
                      activeDropdown === item.name ? setActiveDropdown(null) : open(item.name);
                    } else {
                      handleNavigation(item.href);
                    }
                  }}
                  className={`relative flex items-center gap-1 text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm py-2 ${
                    item.name === 'What we do' ? 'text-orange-400' : ''
                  }`}
                  aria-haspopup={item.hasDropdown ? 'menu' : undefined}
                  aria-expanded={
                    item.hasDropdown && activeDropdown === item.name ? true : false
                  }
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

                {/* Hover bridge */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <span className="pointer-events-none absolute left-0 right-0 h-3 top-full" />
                )}

                {/* Dropdown */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div
                    className="absolute top-full left-0 w-64 translate-y-2 bg-gray-800/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl py-2 z-[999] pointer-events-auto"
                    onMouseEnter={() => open(item.name)}
                    role="menu"
                  >
                    {item.dropdownItems?.map((dropdownItem, index) =>
                      dropdownItem.href?.startsWith('/') ? (
                        <Link
                          key={index}
                          to={dropdownItem.href}
                          className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors duration-200 text-sm"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setActiveDropdown(null);
                          }}
                          role="menuitem"
                        >
                          {dropdownItem.name}
                        </Link>
                      ) : (
                        <button
                          key={index}
                          className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors duration-200 text-sm"
                          onClick={() => {
                            scrollToSection(dropdownItem.href);
                            setActiveDropdown(null);
                          }}
                          role="menuitem"
                        >
                          {dropdownItem.name}
                        </button>
                      )
                    )}
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
                <div key={item.name}>
                  <button
                    onClick={() => handleNavigation(item.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-left text-sm w-full"
                  >
                    {item.name}
                  </button>
                  {item.hasDropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdownItems?.map((dropdownItem, index) =>
                        dropdownItem.href?.startsWith('/') ? (
                          <Link
                            key={index}
                            to={dropdownItem.href}
                            className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ) : (
                          <button
                            key={index}
                            className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm text-left"
                            onClick={() => scrollToSection(dropdownItem.href)}
                          >
                            {dropdownItem.name}
                          </button>
                        )
                      )}
                    </div>
                  )}
                </div>
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
