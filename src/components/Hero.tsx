import React from 'react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const highlights = [
    "API-First Architecture",
    "Cloud-Native Solutions", 
    "Data Science & MLOps",
    "Enterprise Security"
  ];

  return (
    <section id="home" className="relative pt-20 pb-16 lg:pb-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8fafc] to-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23e2e8f0%22 fill-opacity=%220.3%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-[#1e40af]/10 rounded-full text-[#1e40af] text-sm font-medium">
                <span className="w-2 h-2 bg-[#1e40af] rounded-full mr-2"></span>
                Trusted by 50+ Enterprise Clients
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-[#1a202c] leading-tight">
                Accelerating Enterprise
                <span className="text-[#1e40af]"> Modernization</span> with
                <span className="text-[#dc2626]"> Data‑Driven Engineering</span>
              </h1>
              
              <p className="text-xl text-[#4a5568] leading-relaxed max-w-xl">
                Partner with OptiValueTek to transform your critical systems through API‑first microservices, 
                cloud transformation, and advanced data science solutions.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="text-[#059669] flex-shrink-0" size={20} />
                  <span className="text-[#64748b] font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#1e40af] hover:bg-[#1d4ed8] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group">
                Explore Our Services
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              
              <button className="border-2 border-[#1e40af] text-[#1e40af] hover:bg-[#1e40af] hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2">
                <Play size={20} />
                Schedule a Demo
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-[#1e40af]">100+</div>
                <div className="text-sm text-[#64748b]">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#1e40af]">50+</div>
                <div className="text-sm text-[#64748b]">Enterprise Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#1e40af]">14+</div>
                <div className="text-sm text-[#64748b]">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Enterprise Technology Solutions"
                className="w-full rounded-2xl shadow-2xl"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-lg shadow-lg p-4 border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-[#333333]">Systems Online</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 border border-gray-100">
                <div className="text-2xl font-bold text-[#0052cc]">99.9%</div>
                <div className="text-sm text-[#666666]">Uptime</div>
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute top-8 right-8 w-72 h-72 bg-gradient-to-br from-[#0052cc]/10 to-[#00a3e0]/10 rounded-full -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-br from-[#f5a623]/10 to-[#0052cc]/10 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;