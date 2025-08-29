import React, { useState } from 'react';
import { ArrowLeft, Code, Database, Globe, Settings, CheckCircle, ArrowRight, Play, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const ApplicationIntegration = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      title: "SOA & Microservices Architecture",
      description: "Transform monolithic applications into scalable, maintainable microservices",
      icon: Code,
      features: ["Service decomposition", "API design", "Container orchestration", "Service mesh implementation"]
    },
    {
      title: "Apache Camel Integration",
      description: "Enterprise integration patterns with Apache Camel framework",
      icon: Settings,
      features: ["Route configuration", "Message transformation", "Protocol bridging", "Error handling"]
    },
    {
      title: "Red Hat Fuse Platform",
      description: "Cloud-native integration platform built on Apache Camel",
      icon: Database,
      features: ["Fuse Online", "Fuse on OpenShift", "Integration tooling", "Monitoring & analytics"]
    },
    {
      title: "Enterprise Service Bus",
      description: "Centralized integration hub for enterprise applications",
      icon: Globe,
      features: ["Message routing", "Protocol transformation", "Service orchestration", "Security integration"]
    }
  ];

  const technologies = [
    { name: "Apache Camel", category: "Integration Framework" },
    { name: "Red Hat Fuse", category: "Integration Platform" },
    { name: "webMethods", category: "Integration Suite" },
    { name: "Tibco", category: "Integration Platform" },
    { name: "Mulesoft", category: "Integration Platform" },
    { name: "Oracle AIA", category: "Application Integration" },
    { name: "Spring Boot", category: "Microservices Framework" },
    { name: "Docker", category: "Containerization" },
    { name: "Kubernetes", category: "Orchestration" },
    { name: "OpenShift", category: "Container Platform" }
  ];

  const caseStudies = [
    {
      title: "Telecom BSS/OSS Integration",
      client: "Leading Telecom Provider",
      challenge: "Integrate 40+ legacy systems with modern cloud-native architecture",
      solution: "Implemented microservices architecture using Red Hat Fuse and Apache Camel",
      results: ["50% reduction in integration time", "30% improvement in system performance", "90% decrease in maintenance costs"]
    },
    {
      title: "Banking System Modernization",
      client: "Major Financial Institution",
      challenge: "Replace monolithic core banking system with microservices",
      solution: "Gradual migration using strangler fig pattern with Spring Boot microservices",
      results: ["Zero downtime migration", "3x faster feature delivery", "60% cost reduction"]
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Application & Process Integration
                </span>
              </h1>
              <p className="text-gray-300">SOA, Microservices, Apache Camel, Red Hat Fuse/PAM, Enterprise Integration</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-6">
            Integration Excellence
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
              Seamless Integration
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Transform your enterprise architecture with modern integration patterns, microservices, and cloud-native solutions that scale with your business needs.
          </p>
          {/*<div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-semibold flex items-center gap-3 shadow-xl">
              <Play size={20} />
              Watch Demo
            </button>
            <button className="border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 font-semibold flex items-center gap-3">
              <Download size={20} />
              Download Brochure
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
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
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

        {/* Technologies */}
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
              Technologies & Platforms
            </span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-700/30 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-4 hover:border-gray-500/50 transition-all duration-300 hover:shadow-lg"
              >
                <h4 className="font-bold text-white mb-1">{tech.name}</h4>
                <p className="text-gray-400 text-sm">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              Success Stories
            </span>
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl"
              >
                <h4 className="text-2xl font-bold text-white mb-2">{study.title}</h4>
                <p className="text-blue-400 font-semibold mb-4">{study.client}</p>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold text-red-400 mb-2">Challenge</h5>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h5 className="font-bold text-blue-400 mb-2">Solution</h5>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h5 className="font-bold text-green-400 mb-2">Results</h5>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center gap-2 text-gray-300 text-sm">
                          <CheckCircle size={14} className="text-green-400" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Integration Architecture?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our experts help you design and implement a modern, scalable integration solution.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg flex items-center gap-3 mx-auto shadow-2xl">
            Get Started Today
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationIntegration;