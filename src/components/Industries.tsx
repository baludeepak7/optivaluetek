import React from 'react';
import { Phone, CreditCard, Heart, Package, UploadCloud as CloudUpload, ArrowRight } from 'lucide-react';

const Industries: React.FC = () => {
  const industries = [
    {
      icon: <Phone className="text-[#1e40af]" size={32} />,
      title: "Telecommunications",
      description: "Next-gen telecom solutions with 5G readiness, network optimization, and customer experience platforms.",
      stats: "15+ Projects",
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: <CreditCard className="text-[#3b82f6]" size={32} />,
      title: "Banking / FinTech",
      description: "Secure financial platforms, digital banking solutions, and regulatory compliance systems.",
      stats: "20+ Projects",
      image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: <Heart className="text-[#dc2626]" size={32} />,
      title: "Healthcare",
      description: "HIPAA-compliant healthcare systems, telemedicine platforms, and medical data analytics.",
      stats: "12+ Projects",
      image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: <Package className="text-[#059669]" size={32} />,
      title: "Product Development",
      description: "End-to-end product development lifecycle with agile methodologies and rapid prototyping.",
      stats: "25+ Projects",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: <CloudUpload className="text-[#7c3aed]" size={32} />,
      title: "Legacy-to-Cloud Migrations",
      description: "Seamless migration strategies that minimize downtime and maximize business continuity.",
      stats: "30+ Migrations",
      image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#1e40af]/10 rounded-full text-[#1e40af] text-sm font-medium mb-6">
            Industries We Serve
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1a202c] mb-6">
            Deep Industry Expertise
          </h2>
          <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
            Specialized solutions across multiple sectors, delivering tailored approaches 
            that address specific business challenges and regulatory requirements.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg hover:border-[#1e40af]/20 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white rounded-lg p-2 shadow-sm">
                  {industry.icon}
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium opacity-90">{industry.stats}</div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1a202c] mb-3">
                  {industry.title}
                </h3>
                <p className="text-[#4a5568] leading-relaxed mb-4">
                  {industry.description}
                </p>
                <button className="text-[#0052cc] hover:text-[#f5a623] font-semibold transition-colors duration-200 flex items-center gap-2 group">
                  Learn More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global Presence */}
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-12 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-[#1a202c] mb-6">
                Global Reach, Local Expertise
              </h3>
              <p className="text-lg text-[#4a5568] leading-relaxed mb-8">
                With offices in Bengaluru, Texas, and NSW, we combine global best practices 
                with local market understanding to deliver solutions that truly fit your business needs.
              </p>
              
              <div className="grid grid-cols-3 gap-6">
                {[
                  { location: "Bengaluru", country: "India", flag: "🇮🇳" },
                  { location: "Texas", country: "USA", flag: "🇺🇸" },
                  { location: "NSW", country: "Australia", flag: "🇦🇺" }
                ].map((office, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl mb-2">{office.flag}</div>
                    <div className="font-semibold text-[#1a202c]">{office.location}</div>
                    <div className="text-sm text-[#4a5568]">{office.country}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Global reach"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;