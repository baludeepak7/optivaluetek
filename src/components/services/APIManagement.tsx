import React, { useState } from 'react';
import { ArrowLeft, Globe, Shield, BarChart3, Settings, CheckCircle, ArrowRight, Play, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const APIManagement = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const services = [
    {
      title: "API Gateway Solutions",
      description: "Centralized API management with security, routing, and monitoring",
      icon: Globe,
      features: ["Traffic management", "Load balancing", "Rate limiting", "Protocol transformation"]
    },
    {
      title: "Developer Portal",
      description: "Self-service portal for API discovery and documentation",
      icon: Settings,
      features: ["API documentation", "Interactive testing", "SDK generation", "Developer onboarding"]
    },
    {
      title: "Security & Authentication",
      description: "Comprehensive API security with OAuth, JWT, and threat protection",
      icon: Shield,
      features: ["OAuth 2.0/OIDC", "JWT validation", "API key management", "Threat detection"]
    },
    {
      title: "Analytics & Monitoring",
      description: "Real-time API analytics and performance monitoring",
      icon: BarChart3,
      features: ["Usage analytics", "Performance metrics", "Error tracking", "Custom dashboards"]
    }
  ];

  const platforms = [
    {
      name: "Google APIGEE",
      description: "Full lifecycle API management platform",
      features: ["Edge gateway", "Analytics", "Developer portal", "Monetization"],
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      name: "Red Hat 3Scale",
      description: "Cloud-native API management solution",
      features: ["API gateway", "Access control", "Analytics", "Billing integration"],
      gradient: "from-red-600 to-orange-500"
    },
    {
      name: "webMethods API Gateway",
      description: "Enterprise-grade API management",
      features: ["Policy enforcement", "Threat protection", "Load balancing", "Monitoring"],
      gradient: "from-purple-600 to-pink-500"
    }
  ];

  const benefits = [
    { title: "50% Faster API Development", description: "Accelerated development with reusable components" },
    { title: "99.9% API Uptime", description: "High availability with load balancing and failover" },
    { title: "60% Reduction in Integration Time", description: "Standardized APIs and documentation" },
    { title: "Enhanced Security", description: "Comprehensive threat protection and access control" }
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  API Management & Microservices
                </span>
              </h1>
              <p className="text-gray-300">APIGEE, Red Hat 3Scale, webMethods API Gateway Solutions</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-600/20 backdrop-blur-sm border border-purple-400/30 rounded-full text-purple-300 text-sm font-medium mb-6">
            API Excellence
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              API-First Architecture
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Build scalable, secure, and well-documented APIs with comprehensive management platforms that enable digital transformation and ecosystem integration.
          </p>
          {/*<div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 font-semibold flex items-center gap-3 shadow-xl">
              <Play size={20} />
              View Demo
            </button>
            <button className="border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 font-semibold flex items-center gap-3">
              <Download size={20} />
              API Strategy Guide
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
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
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

        {/* Platforms */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
              API Management Platforms
            </span>
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
                
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${platform.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Globe size={24} className="text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {platform.name}
                  </h4>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {platform.description}
                  </p>
                  <ul className="space-y-2">
                    {platform.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-400 text-sm">
                        <CheckCircle size={16} className="text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              Business Benefits
            </span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-700/30 backdrop-blur-sm border border-gray-600/50 rounded-2xl hover:border-gray-500/50 transition-all duration-300 hover:shadow-lg"
              >
                <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Build Your API Strategy?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our API experts help you design, implement, and manage a comprehensive API ecosystem.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg flex items-center gap-3 mx-auto shadow-2xl">
            Start Your API Journey
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default APIManagement;