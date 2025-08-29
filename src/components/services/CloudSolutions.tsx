import React, { useState } from 'react';
import { ArrowLeft, Cloud, Server, Shield, Database, CheckCircle, ArrowRight, Play, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const CloudSolutions = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      title: "Cloud Migration & Modernization",
      description: "Seamless migration from on-premises to cloud-native architectures",
      icon: Cloud,
      features: ["Assessment & planning", "Migration strategies", "Application modernization", "Performance optimization"]
    },
    {
      title: "Multi-Cloud Management",
      description: "Unified management across AWS, Azure, GCP, and Oracle Cloud",
      icon: Server,
      features: ["Multi-cloud strategy", "Workload distribution", "Cost optimization", "Vendor management"]
    },
    {
      title: "Cloud Security & Compliance",
      description: "Enterprise-grade security and regulatory compliance in the cloud",
      icon: Shield,
      features: ["Identity management", "Data encryption", "Compliance frameworks", "Security monitoring"]
    },
    {
      title: "Cloud-Native Development",
      description: "Build scalable applications designed for cloud environments",
      icon: Database,
      features: ["Microservices architecture", "Serverless computing", "Container orchestration", "API-first design"]
    }
  ];

  const platforms = [
    {
      name: "Amazon Web Services (AWS)",
      description: "Comprehensive cloud platform with 200+ services",
      features: ["EC2 & Lambda", "RDS & DynamoDB", "S3 & CloudFront", "EKS & ECS"],
      gradient: "from-orange-600 to-yellow-500"
    },
    {
      name: "Microsoft Azure",
      description: "Enterprise-focused cloud platform with hybrid capabilities",
      features: ["Azure VMs", "Azure SQL", "Azure DevOps", "Azure Kubernetes"],
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      name: "Google Cloud Platform",
      description: "AI/ML-focused cloud with advanced analytics capabilities",
      features: ["Compute Engine", "BigQuery", "Cloud AI", "Google Kubernetes"],
      gradient: "from-green-600 to-teal-500"
    },
    {
      name: "Oracle Cloud Infrastructure",
      description: "Enterprise-grade cloud for mission-critical workloads",
      features: ["Oracle Database", "Autonomous Services", "Cloud Applications", "Integration Cloud"],
      gradient: "from-red-600 to-orange-500"
    }
  ];

  const benefits = [
    { title: "60% Cost Reduction", description: "Optimized cloud spending through right-sizing and automation" },
    { title: "99.99% Uptime", description: "High availability with multi-region deployments" },
    { title: "3x Faster Deployment", description: "Automated CI/CD pipelines and infrastructure as code" },
    { title: "Enhanced Security", description: "Enterprise-grade security with compliance certifications" }
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
                  Cloud Solutions & Infrastructure
                </span>
              </h1>
              <p className="text-gray-300">AWS, Azure, OCI, GCP, Cloud Migration, Infrastructure as Code</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-indigo-600/20 backdrop-blur-sm border border-indigo-400/30 rounded-full text-indigo-300 text-sm font-medium mb-6">
            Cloud Excellence
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400">
              Cloud-First Future
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Accelerate your digital transformation with comprehensive cloud solutions that deliver scalability, security, and cost optimization across all major cloud platforms.
          </p>
          {/*<div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-4 rounded-xl hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 font-semibold flex items-center gap-3 shadow-xl">
              <Play size={20} />
              Cloud Assessment
            </button>
            <button className="border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 font-semibold flex items-center gap-3">
              <Download size={20} />
              Migration Guide
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
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-blue-400 transition-all duration-300">
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

        {/* Cloud Platforms */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
              Multi-Cloud Expertise
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
                    <Cloud size={24} className="text-white" />
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

        {/* Benefits */}
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              Cloud Transformation Benefits
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
        <div className="text-center bg-gradient-to-r from-indigo-600/20 to-blue-600/20 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Accelerate Your Cloud Journey?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our cloud experts help you design and implement a comprehensive cloud strategy tailored to your business needs.
          </p>
          <button className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-4 rounded-xl hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg flex items-center gap-3 mx-auto shadow-2xl">
            Start Cloud Transformation
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CloudSolutions;