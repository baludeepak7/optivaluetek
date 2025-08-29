import React, { useState } from 'react';
import { ArrowLeft, Brain, Database, BarChart3, Cpu, CheckCircle, ArrowRight, Play, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIMLOps = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      title: "Machine Learning Solutions",
      description: "Custom ML models for predictive analytics and business intelligence",
      icon: Brain,
      features: ["Predictive modeling", "Classification algorithms", "Regression analysis", "Deep learning"]
    },
    {
      title: "MLOps Pipeline Development",
      description: "End-to-end ML lifecycle management and automation",
      icon: Database,
      features: ["Model training", "Automated deployment", "Model monitoring", "Version control"]
    },
    {
      title: "AI-Powered Analytics",
      description: "Advanced analytics with artificial intelligence capabilities",
      icon: BarChart3,
      features: ["Real-time insights", "Anomaly detection", "Pattern recognition", "Business intelligence"]
    },
    {
      title: "Generative AI Solutions",
      description: "Large language models and generative AI implementations",
      icon: Cpu,
      features: ["LLM integration", "Content generation", "Conversational AI", "Document processing"]
    }
  ];

  const technologies = [
    { name: "TensorFlow", category: "ML Framework", icon: "🧠" },
    { name: "PyTorch", category: "Deep Learning", icon: "🔥" },
    { name: "Scikit-learn", category: "ML Library", icon: "🔬" },
    { name: "MLflow", category: "MLOps", icon: "🚀" },
    { name: "Kubeflow", category: "ML Orchestration", icon: "☸️" },
    { name: "Apache Airflow", category: "Workflow", icon: "🌪️" },
    { name: "Jupyter", category: "Development", icon: "📓" },
    { name: "OpenAI", category: "Generative AI", icon: "🤖" }
  ];

  const useCases = [
    {
      title: "Predictive Maintenance",
      description: "AI-powered equipment monitoring and failure prediction",
      gradient: "from-blue-600 to-cyan-500",
      metrics: ["40% cost reduction", "95% accuracy", "Zero unplanned downtime"],
      industries: ["Manufacturing", "Energy", "Transportation"]
    },
    {
      title: "Fraud Detection",
      description: "Real-time fraud detection using machine learning",
      gradient: "from-red-600 to-orange-500",
      metrics: ["99.8% accuracy", "<100ms response", "90% false positive reduction"],
      industries: ["Banking", "Insurance", "E-commerce"]
    },
    {
      title: "Customer Analytics",
      description: "Advanced customer behavior analysis and segmentation",
      gradient: "from-purple-600 to-pink-500",
      metrics: ["25% revenue increase", "60% better targeting", "Real-time insights"],
      industries: ["Retail", "Marketing", "SaaS"]
    },
    {
      title: "Document Intelligence",
      description: "AI-powered document processing and information extraction",
      gradient: "from-green-600 to-teal-500",
      metrics: ["80% time savings", "99% accuracy", "Multi-format support"],
      industries: ["Legal", "Healthcare", "Finance"]
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                  AI/MLOps & Machine Learning
                </span>
              </h1>
              <p className="text-gray-300">Machine Learning, MLOps, Generative AI, Predictive Analytics</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-orange-600/20 backdrop-blur-sm border border-orange-400/30 rounded-full text-orange-300 text-sm font-medium mb-6">
            AI/ML Excellence
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-pink-400">
              Intelligent Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Harness the power of artificial intelligence and machine learning to drive innovation, automate processes, and unlock insights from your data with enterprise-grade AI solutions.
          </p>
          {/*<div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 font-semibold flex items-center gap-3 shadow-xl">
              <Play size={20} />
              AI Demo
            </button>
            <button className="border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 font-semibold flex items-center gap-3">
              <Download size={20} />
              AI Strategy Guide
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
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-400 transition-all duration-300">
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
              AI/ML Technology Stack
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

        {/* Use Cases */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
              AI/ML Use Cases
            </span>
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
                
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${useCase.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Brain size={24} className="text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {useCase.title}
                  </h4>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {useCase.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-bold text-green-400 mb-2">Key Metrics</h5>
                      <div className="space-y-2">
                        {useCase.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="flex items-center gap-2">
                            <CheckCircle size={16} className="text-green-400" />
                            <span className="text-gray-300 text-sm">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-bold text-blue-400 mb-2">Industries</h5>
                      <div className="flex flex-wrap gap-2">
                        {useCase.industries.map((industry, industryIndex) => (
                          <span key={industryIndex} className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600/50">
                            {industry}
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
        <div className="text-center bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Unlock AI's Potential?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our AI/ML experts help you identify opportunities and implement intelligent solutions that drive business value.
          </p>
          <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg flex items-center gap-3 mx-auto shadow-2xl">
            Start AI Journey
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIMLOps;