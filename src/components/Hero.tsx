import React, { useState, useEffect } from 'react';
import { Play, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const heroSlides = [
    {
      headline: "Digital Transformation & Enterprise Modernization",
      subheadline: "helps unlock innovation potential locked in your legacy systems",
      description: "Application & Process Integration • API Management • Data Engineering • AI/MLOps • DevOps & SRE • Cloud Solutions",
      cta: "Explore Our Solutions",
      background: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920"
    },
    {
      headline: "Cloud Native Architecture",
      subheadline: "accelerates your journey to scalable microservices",
      description: "Kubernetes • OpenShift • Docker • AWS • Azure • Oracle Cloud • Microservices Migration",
      cta: "Learn About Cloud Solutions",
      background: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1920"
    },
    {
      headline: "AI-Powered Business Intelligence",
      subheadline: "transforms data into competitive advantage",
      description: "Machine Learning • Data Science • MLOps • Predictive Analytics • Business Intelligence",
      cta: "Discover AI Solutions",
      background: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1920"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const scrollToSolutions = () => {
    const element = document.querySelector('#solutions');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${heroSlides[currentSlide].background})`,
            transform: `scale(${isVisible ? 1.05 : 1.1})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          {/* Main Content */}
          <div className="text-white mb-12">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-4">
                  Global Technology Consulting
                </span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block text-gray-300">Our</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                  {heroSlides[currentSlide].headline.split(' ').slice(-2).join(' ')}
                </span>
                <span className="block text-gray-300 text-4xl lg:text-5xl mt-2">
                  {heroSlides[currentSlide].subheadline}
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl mb-8 text-gray-300 max-w-3xl leading-relaxed">
                {heroSlides[currentSlide].description}
              </p>
            </div>
            
            <div className={`flex flex-col sm:flex-row gap-6 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <button
                onClick={scrollToSolutions}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg flex items-center gap-3 shadow-2xl"
              >
                {heroSlides[currentSlide].cta}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              {/* 
              <button className="group border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-3">
                <Play size={20} className="group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </button> */}
            </div>
          </div>

          {/* Slide Navigation */}
          <div className="flex items-center justify-between max-w-md">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex space-x-3">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'w-8 bg-gradient-to-r from-blue-400 to-purple-400' 
                      : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Trending Now Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-3 overflow-hidden">
        <div className="flex items-center animate-marquee whitespace-nowrap">
          <span className="text-lg font-bold mr-8">Trending Now</span>
          <span className="mr-12">OptiValueTek - 500+ Global Projects Delivered</span>
          <span className="mr-12">15+ Countries Served with Digital Excellence</span>
          <span className="mr-12">200+ Technology Experts Driving Innovation</span>
          <span className="mr-12">BSS/OSS Transformation Leaders in Telecom</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;