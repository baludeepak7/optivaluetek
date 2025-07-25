import React, { useState } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const videoSlides = [
    {
      headline: "Why Choose API-First Architecture",
      subtitle: "Build scalable digital backbones.",
      cta: "Learn More"
    },
    {
      headline: "Cloud Transformation In Action",
      subtitle: "Migrate legacy systems faster.",
      cta: "Explore Cloud Services"
    },
    {
      headline: "Deploying AI at Scale",
      subtitle: "Accelerate AI with MLOps.",
      cta: "See How"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % videoSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + videoSlides.length) % videoSlides.length);
  };

  const scrollToSolutions = () => {
    const element = document.querySelector('#solutions');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#D36A47]/80 to-[#F5EBDD]/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-white">
            <h1 
              className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ fontFamily: 'Poppins' }}
            >
              Accelerating Digital Modernization with Human-Centered Engineering
            </h1>
            <p 
              className="text-xl lg:text-2xl mb-8 opacity-90"
              style={{ fontFamily: 'Roboto' }}
            >
              Legacy transformation, API-first microservices, cloud-native apps, and intelligent operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToSolutions}
                className="bg-[#D36A47] text-white px-8 py-4 rounded-lg hover:bg-[#B85A3D] transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
              >
                Explore Solutions
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#D36A47] transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-2">
                <Play size={20} />
                Watch Video
              </button>
            </div>
          </div>

          {/* Right Column - Video Carousel */}
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6">
            <div className="relative">
              <div className="aspect-video bg-black/40 rounded-lg flex items-center justify-center mb-4">
                <Play size={64} className="text-white opacity-80" />
              </div>
              
              <div className="text-white text-center mb-4">
                <h3 
                  className="text-2xl font-bold mb-2"
                  style={{ fontFamily: 'Poppins' }}
                >
                  {videoSlides[currentSlide].headline}
                </h3>
                <p 
                  className="text-lg opacity-90 mb-4"
                  style={{ fontFamily: 'Roboto' }}
                >
                  {videoSlides[currentSlide].subtitle}
                </p>
                <button className="bg-[#D36A47] text-white px-6 py-2 rounded-lg hover:bg-[#B85A3D] transition-colors duration-300">
                  {videoSlides[currentSlide].cta}
                </button>
              </div>

              {/* Navigation Controls */}
              <div className="flex justify-between items-center">
                <button
                  onClick={prevSlide}
                  className="text-white hover:text-[#D36A47] transition-colors duration-300"
                >
                  <ChevronLeft size={32} />
                </button>
                
                <div className="flex space-x-2">
                  {videoSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                        index === currentSlide ? 'bg-[#D36A47]' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextSlide}
                  className="text-white hover:text-[#D36A47] transition-colors duration-300"
                >
                  <ChevronRight size={32} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;