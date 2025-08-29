import React, { useState } from 'react';
import { ArrowLeft, Server, Database, Building2, Users, CheckCircle, ArrowRight, Play, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const EnterpriseSolutions = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      title: "Oracle Fusion & EBS",
      description: "Complete Oracle enterprise application implementation and modernization",
      icon: Database,
      features: ["Fusion Cloud Apps", "EBS upgrades", "Custom extensions", "Integration services"]
    },
    {
      title: "BSS/OSS Transformation",
      description: "Telecom billing and operational support system modernization",
      icon: Server,
      features: ["Oracle BRM", "Oracle OSM", "Oracle UIM", "Revenue management"]
    },
    {
      title: "Siebel CRM Solutions",
      description: "Customer relationship management with Siebel platform expertise",
      icon: Users,
      features: ["Siebel implementation", "CRM customization", "Mobile solutions", "Analytics integration"]
    },
    {
      title: "Enterprise Architecture",
      description: "Comprehensive enterprise solution design and implementation",
      icon: Building2,
      features: ["Solution architecture", "System integration", "Legacy modernization", "Cloud migration"]
    }
  ];

  const platforms = [
    {
      name: "Oracle BRM (Billing & Revenue Management)",
      description: "Complete billing and revenue management for telecom operators",
      features: ["Real-time billing", "Revenue assurance", "Customer management", "Rating & charging"],
      gradient: "from-red-600 to-orange-500"
    },
    {
      name: "Oracle OSM (Order & Service Management)",
      description: "End-to-end order orchestration and service fulfillment",
      features: ["Order orchestration", "Service fulfillment", "Workflow automation", "Partner integration"],
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      name: "Oracle UIM (User Interaction Management)",
      description: "Customer interaction and self-service portal solutions",
      features: ["Customer portals", "Self-service", "Mobile apps", "API management"],
      gradient: "from-purple-600 to-pink-500"
    },
    {
      name: "Oracle Fusion Cloud Applications",
      description: "Modern cloud-based enterprise resource planning",
      features: ["ERP Cloud", "HCM Cloud", "SCM Cloud", "CX Cloud"],
      gradient: "from-green-600 to-teal-500"
    }
  ];

  const industries = [
    {
      title: "Telecommunications",
      description: "BSS/OSS solutions for telecom operators worldwide",
      gradient: "from-blue-600 to-cyan-500",
      solutions: ["Billing systems", "Order management", "Customer portals", "Revenue assurance"],
      clients: ["Vodafone", "MTN", "Leading operators"]
    },
    {
      title: "Financial Services",
      description: "Enterprise solutions for banking and financial institutions",
      gradient: "from-green-600 to-teal-500",
      solutions: ["Core banking", "Risk management", "Compliance", "Customer onboarding"],
      clients: ["Standard Chartered", "Major banks", "Fintech companies"]
    },
    {
      title: "Manufacturing",
      description: "ERP and supply chain solutions for manufacturers",
      gradient: "from-orange-600 to-red-500",
      solutions: ["ERP systems", "Supply chain", "Quality management", "IoT integration"],
      clients: ["Industrial companies", "Manufacturing leaders", "Global enterprises"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-20">
      {/* Header */}
      <div className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-2 hover:bg-gray-700/50 rounded-xl transition-colors duration-300">
              <ArrowLeft size={24} className="text-white" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">
                  Enterprise Solutions
                </span>
              </h1>
              <p className="text-gray-300">Oracle Fusion/EBS, Siebel, Oracle BRM, OSM, UIM, BSS/OSS</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-pink-600/20 backdrop-blur-sm border border-pink-400/30 rounded-full text-pink-300 text-sm font-medium mb-6">
            Enterprise Excellence
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-red-400">
              Enterprise Transformation
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Modernize your enterprise with comprehensive Oracle solutions, BSS/OSS transformations, and enterprise architecture that scales with your business growth and digital transformation needs.
          </p>
          {/*<div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-4 rounded-xl hover:from-pink-700 hover:to-rose-700 transition-all duration-300 transform hover:scale-105 font-semibold flex items-center gap-3 shadow-xl">
              <Play size={20} />
              Enterprise Demo
            </button>
            <button className="border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 font-semibold flex items-center gap-3">
              <Download size={20} />
              Solution Guide
            </button>
          </div> */}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-rose-400 transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-gray-400 text-sm">
                      <CheckCircle size={16} className="text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Oracle Platforms */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Oracle Enterprise Platforms
            </span>
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
                
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${platform.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Database size={24} className="text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {platform.name}
                  </h4>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {platform.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {platform.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-gray-400 text-sm">
                        <CheckCircle size={14} className="text-green-400" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Solutions */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
              Industry-Specific Solutions
            </span>
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
                
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${industry.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Building2 size={24} className="text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {industry.title}
                  </h4>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {industry.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-bold text-blue-400 mb-2">Key Solutions</h5>
                      <div className="space-y-2">
                        {industry.solutions.map((solution, solutionIndex) => (
                          <div key={solutionIndex} className="flex items-center gap-2">
                            <CheckCircle size={14} className="text-green-400" />
                            <span className="text-gray-300 text-sm">{solution}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-bold text-green-400 mb-2">Notable Clients</h5>
                      <div className="flex flex-wrap gap-2">
                        {industry.clients.map((client, clientIndex) => (
                          <span key={clientIndex} className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600/50">
                            {client}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-pink-600/20 to-rose-600/20 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Enterprise?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our enterprise solution experts help you modernize your systems and accelerate your digital transformation journey.
          </p>
          <button className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-4 rounded-xl hover:from-pink-700 hover:to-rose-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg flex items-center gap-3 mx-auto shadow-2xl">
            Start Enterprise Transformation
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseSolutions;