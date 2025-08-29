import React, { useState } from 'react';
import { ArrowLeft, Settings, GitBranch, Shield, BarChart3, CheckCircle, ArrowRight, Play, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const DevOpsSRE = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      title: "CI/CD Pipeline Automation",
      description: "Automated build, test, and deployment pipelines for faster delivery",
      icon: GitBranch,
      features: ["Pipeline orchestration", "Automated testing", "Deployment automation", "Release management"]
    },
    {
      title: "Container Orchestration",
      description: "Kubernetes and OpenShift management for scalable applications",
      icon: Settings,
      features: ["Kubernetes clusters", "OpenShift deployment", "Container security", "Auto-scaling"]
    },
    {
      title: "Infrastructure as Code",
      description: "Automated infrastructure provisioning and management",
      icon: Shield,
      features: ["Terraform", "Ansible", "CloudFormation", "Configuration management"]
    },
    {
      title: "Monitoring & Observability",
      description: "Comprehensive monitoring and alerting for system reliability",
      icon: BarChart3,
      features: ["Prometheus", "Grafana", "ELK Stack", "APM tools"]
    }
  ];

  const technologies = [
    { name: "Kubernetes", category: "Orchestration", icon: "☸️" },
    { name: "Docker", category: "Containerization", icon: "🐳" },
    { name: "Jenkins", category: "CI/CD", icon: "🔧" },
    { name: "Terraform", category: "IaC", icon: "🏗️" },
    { name: "Prometheus", category: "Monitoring", icon: "📊" },
    { name: "Grafana", category: "Visualization", icon: "📈" },
    { name: "Ansible", category: "Automation", icon: "⚙️" },
    { name: "GitLab", category: "DevOps Platform", icon: "🦊" }
  ];

  const practices = [
    {
      title: "Continuous Integration",
      description: "Automated code integration and testing",
      gradient: "from-blue-600 to-cyan-500",
      metrics: ["50% faster builds", "90% test coverage", "Zero integration issues"]
    },
    {
      title: "Continuous Deployment",
      description: "Automated deployment to production",
      gradient: "from-green-600 to-teal-500",
      metrics: ["10x deployment frequency", "99.9% success rate", "5min rollback time"]
    },
    {
      title: "Site Reliability Engineering",
      description: "Proactive system reliability and performance",
      gradient: "from-purple-600 to-pink-500",
      metrics: ["99.99% uptime", "MTTR < 15min", "Zero data loss"]
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                  DevOps & Site Reliability Engineering
                </span>
              </h1>
              <p className="text-gray-300">Kubernetes, OpenShift, Docker, CI/CD, Infrastructure Automation</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-yellow-600/20 backdrop-blur-sm border border-yellow-400/30 rounded-full text-yellow-300 text-sm font-medium mb-6">
            DevOps Excellence
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
              Accelerate Delivery
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Transform your software delivery with modern DevOps practices, container orchestration, and site reliability engineering that ensures fast, reliable, and scalable deployments.
          </p>
          {/*<div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-8 py-4 rounded-xl hover:from-yellow-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 font-semibold flex items-center gap-3 shadow-xl">
              <Play size={20} />
              DevOps Assessment
            </button>
            <button className="border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 font-semibold flex items-center gap-3">
              <Download size={20} />
              DevOps Playbook
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
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-400 transition-all duration-300">
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              DevOps Technology Stack
            </span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-700/30 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-6 hover:border-gray-500/50 transition-all duration-300 hover:shadow-lg text-center"
              >
                <div className="text-4xl mb-3">{tech.icon}</div>
                <h4 className="font-bold text-white mb-1">{tech.name}</h4>
                <p className="text-gray-400 text-sm">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* DevOps Practices */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
              DevOps Best Practices
            </span>
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {practices.map((practice, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${practice.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
                
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${practice.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Settings size={24} className="text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {practice.title}
                  </h4>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {practice.description}
                  </p>
                  <div className="space-y-2">
                    {practice.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-400" />
                        <span className="text-gray-300 text-sm">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-yellow-600/20 to-orange-600/20 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Development Process?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our DevOps experts help you implement modern practices that accelerate delivery and improve reliability.
          </p>
          <button className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-8 py-4 rounded-xl hover:from-yellow-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg flex items-center gap-3 mx-auto shadow-2xl">
            Start DevOps Transformation
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DevOpsSRE;