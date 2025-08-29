import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight, Building2, Smartphone, Heart, Truck, Cpu, Zap } from 'lucide-react';

const Industries = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedIndustry, setExpandedIndustry] = useState<number | null>(null);

  const industries = [
    {
      title: "Telecom & BSS/OSS",
      icon: Smartphone,
      shortDescription: "BSS/OSS stack implementations, Oracle BRM, OSM, UIM solutions, telecom application modernization.",
      fullDescription: "Comprehensive telecom transformation services including BSS/OSS stack implementations with Oracle BRM (Billing and Revenue Management), OSM (Order and Service Management), and UIM (User Interaction Management). We specialize in telecom application modernization, network function virtualization, and 5G-ready infrastructure. Our expertise covers end-to-end telecom solutions from customer management to billing systems, ensuring seamless digital transformation for telecom operators worldwide.",
      technologies: ["Oracle BRM", "Oracle OSM", "Oracle UIM", "5G Infrastructure"],
      gradient: "from-blue-600 to-cyan-500",
      clients: ["Vodafone", "MTN", "Leading Telecom Providers"]
    },
    {
      title: "Banking & FinTech",
      icon: Building2,
      shortDescription: "CRM-led transformations, centralized customer data management, automated sales pipelines.",
      fullDescription: "Digital banking transformation through CRM-led initiatives, implementing centralized customer data platforms, and automated sales pipeline optimization. We deliver core banking modernization, payment gateway integrations, regulatory compliance solutions, and AI-powered risk management systems. Our fintech expertise includes blockchain implementations, digital wallet solutions, and open banking API development for enhanced customer experiences.",
      technologies: ["Core Banking", "Payment Gateways", "Blockchain", "Open Banking APIs"],
      gradient: "from-green-600 to-emerald-500",
      clients: ["Standard Chartered", "Major Banks", "Fintech Startups"]
    },
    {
      title: "Healthcare & Life Sciences",
      icon: Heart,
      shortDescription: "Digital transformation initiatives, process automation, data integration solutions.",
      fullDescription: "Healthcare digital transformation through electronic health records (EHR) modernization, telemedicine platforms, and clinical data integration. We implement HIPAA-compliant solutions, medical device integrations, and AI-powered diagnostic tools. Our expertise includes patient portal development, healthcare analytics, pharmaceutical supply chain optimization, and regulatory compliance automation for improved patient outcomes.",
      technologies: ["EHR Systems", "FHIR Standards", "Medical IoT", "Healthcare Analytics"],
      gradient: "from-red-600 to-pink-500",
      clients: ["Healthcare Providers", "Medical Institutions", "Pharma Companies"]
    },
    {
      title: "Logistics & Supply Chain",
      icon: Truck,
      shortDescription: "CRM implementations like Dalko Logistics, process optimization, real-time tracking systems.",
      fullDescription: "End-to-end supply chain digitization including warehouse management systems, real-time tracking solutions, and logistics optimization platforms. We've successfully implemented solutions for clients like Dalko Logistics, focusing on inventory management, route optimization, and predictive analytics. Our expertise covers IoT-enabled fleet management, blockchain-based supply chain transparency, and AI-driven demand forecasting.",
      technologies: ["WMS", "IoT Tracking", "Route Optimization", "Predictive Analytics"],
      gradient: "from-orange-600 to-yellow-500",
      clients: ["Dalko Logistics", "Global Logistics Providers", "E-commerce Platforms"]
    },
    {
      title: "Legacy Modernization",
      icon: Cpu,
      shortDescription: "Monolith to microservices migration, application modernization, cloud workload migration.",
      fullDescription: "Comprehensive legacy system modernization including monolith-to-microservices transformation, mainframe migration, and cloud-native application development. We specialize in gradual migration strategies, API-first architectures, and containerization using Docker and Kubernetes. Our approach ensures minimal business disruption while maximizing scalability, performance, and maintainability of modernized systems.",
      technologies: ["Microservices", "Docker", "Kubernetes", "API Gateway"],
      gradient: "from-purple-600 to-indigo-500",
      clients: ["Enterprise Clients", "Government Agencies", "Fortune 500 Companies"]
    },
    {
      title: "Emerging Technologies",
      icon: Zap,
      shortDescription: "Drone Image Analytics, Industrial Inspection solutions, GIS implementations.",
      fullDescription: "Cutting-edge technology implementations including drone-based image analytics for industrial inspections, GIS solutions for spatial data management, and IoT-enabled smart city initiatives. We develop AI-powered computer vision systems, augmented reality applications, and edge computing solutions. Our expertise extends to blockchain implementations, quantum computing readiness assessments, and advanced robotics integration.",
      technologies: ["Computer Vision", "IoT", "AR/VR", "Blockchain"],
      gradient: "from-cyan-600 to-blue-500",
      clients: ["Industrial Companies", "Smart Cities", "Technology Innovators"]
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedIndustry(prev => prev === index ? null : index);
  };

  return (
    <section id="industries" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%)`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-600/20 backdrop-blur-sm border border-purple-400/30 rounded-full text-purple-300 text-sm font-medium mb-6">
            Industries We Serve
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              Industry Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Specialized domain knowledge across key verticals with proven track record of successful implementations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            const isExpanded = expandedIndustry === index;
            
            return (
              <div
                key={index}
                className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                        {industry.title}
                      </h3>
                    </div>
                  </div>

                  {/* Short Description */}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {industry.shortDescription}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {industry.technologies.slice(0, 2).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {industry.technologies.length > 2 && (
                      <span className="px-3 py-1 bg-gray-700/50 text-gray-400 text-sm rounded-full border border-gray-600/50">
                        +{industry.technologies.length - 2} more
                      </span>
                    )}
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="space-y-6 mb-6 animate-in slide-in-from-top-2 duration-300">
                      <div className="p-6 bg-gray-700/20 rounded-2xl border border-gray-600/30">
                        <h4 className="font-bold text-blue-400 mb-3 flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full" />
                          Detailed Overview
                        </h4>
                        <p className="text-gray-300 leading-relaxed">
                          {industry.fullDescription}
                        </p>
                      </div>
                      
                      <div className="p-6 bg-gray-700/20 rounded-2xl border border-gray-600/30">
                        <h4 className="font-bold text-green-400 mb-3 flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full" />
                          Technologies & Tools
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {industry.technologies.map((tech, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                              <div className="w-2 h-2 bg-green-400 rounded-full" />
                              <span className="text-gray-300 text-sm">{tech}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className={`p-6 bg-gradient-to-r ${industry.gradient} bg-opacity-10 rounded-2xl border border-gray-600/30`}>
                        <h4 className="font-bold text-white mb-3">Notable Clients</h4>
                        <div className="flex flex-wrap gap-2">
                          {industry.clients.map((client, idx) => (
                            <span key={idx} className="px-3 py-1 bg-white/10 text-white text-sm rounded-full">
                              {client}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Toggle Button */}
                  <button
                    onClick={() => toggleExpanded(index)}
                    className="group/btn flex items-center gap-3 text-blue-400 font-semibold hover:text-blue-300 transition-all duration-300 w-full justify-center py-3 px-6 bg-gray-700/20 rounded-xl border border-gray-600/30 hover:bg-gray-700/30"
                  >
                    {isExpanded ? (
                      <>
                        <span>Show Less</span>
                        <ChevronUp size={20} className="group-hover/btn:-translate-y-1 transition-transform duration-300" />
                      </>
                    ) : (
                      <>
                        <span>Learn More</span>
                        <ChevronDown size={20} className="group-hover/btn:translate-y-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
       {/* <div className="text-center mt-16">
          <button className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg flex items-center gap-3 mx-auto shadow-2xl">
            Explore All Industries
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Industries;