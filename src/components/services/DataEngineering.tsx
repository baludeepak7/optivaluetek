import React, { useState } from 'react';
import { ArrowLeft, Database, BarChart3, Brain, Cloud, CheckCircle, ArrowRight, Play, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const DataEngineering = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      title: "Big Data Platforms",
      description: "Scalable data processing with modern big data technologies",
      icon: Database,
      features: ["Hadoop ecosystem", "Spark processing", "Real-time streaming", "Data lake architecture"]
    },
    {
      title: "Data Science & Analytics",
      description: "Advanced analytics and machine learning solutions",
      icon: Brain,
      features: ["Predictive modeling", "Statistical analysis", "ML pipelines", "Business intelligence"]
    },
    {
      title: "Cloud Data Solutions",
      description: "Cloud-native data platforms and migration services",
      icon: Cloud,
      features: ["Snowflake implementation", "AWS data services", "Azure data factory", "GCP BigQuery"]
    },
    {
      title: "Data Visualization",
      description: "Interactive dashboards and reporting solutions",
      icon: BarChart3,
      features: ["Tableau dashboards", "Power BI reports", "Custom visualizations", "Real-time monitoring"]
    }
  ];

  const technologies = [
    { name: "Python", category: "Programming", icon: "🐍" },
    { name: "Apache Spark", category: "Big Data", icon: "⚡" },
    { name: "Snowflake", category: "Data Warehouse", icon: "❄️" },
    { name: "Kafka", category: "Streaming", icon: "🌊" },
    { name: "Airflow", category: "Orchestration", icon: "🌪️" },
    { name: "Tableau", category: "Visualization", icon: "📊" },
    { name: "TensorFlow", category: "ML Framework", icon: "🧠" },
    { name: "AWS", category: "Cloud Platform", icon: "☁️" }
  ];

  const useCases = [
    {
      title: "Real-time Analytics",
      description: "Stream processing for instant insights",
      gradient: "from-blue-600 to-cyan-500",
      metrics: ["<100ms latency", "1M+ events/sec", "99.9% uptime"]
    },
    {
      title: "Predictive Maintenance",
      description: "AI-powered equipment monitoring",
      gradient: "from-green-600 to-teal-500",
      metrics: ["30% cost reduction", "95% accuracy", "Zero downtime"]
    },
    {
      title: "Customer 360",
      description: "Unified customer data platform",
      gradient: "from-purple-600 to-pink-500",
      metrics: ["360° view", "Real-time updates", "GDPR compliant"]
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
                  Data Engineering & Science
                </span>
              </h1>
              <p className="text-gray-300">Big Data, Data Science, Python, AI/ML, Snowflake, Data Lakes</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-600/20 backdrop-blur-sm border border-green-400/30 rounded-full text-green-300 text-sm font-medium mb-6">
            Data-Driven Excellence
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400">
              Unlock Data Value
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Transform raw data into actionable insights with modern data engineering, advanced analytics, and machine learning solutions that drive business growth.
          </p>
          {/*<div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-xl hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 font-semibold flex items-center gap-3 shadow-xl">
              <Play size={20} />
              See Data in Action
            </button>
            <button className="border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 font-semibold flex items-center gap-3">
              <Download size={20} />
              Data Strategy Guide
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
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-teal-400 transition-all duration-300">
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
              Technology Stack
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              Real-World Applications
            </span>
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
                
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${useCase.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <BarChart3 size={24} className="text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {useCase.title}
                  </h4>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="space-y-2">
                    {useCase.metrics.map((metric, metricIndex) => (
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
        <div className="text-center bg-gradient-to-r from-green-600/20 to-teal-600/20 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Harness Your Data?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our data experts help you build a comprehensive data strategy and implementation roadmap.
          </p>
          <button className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-xl hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg flex items-center gap-3 mx-auto shadow-2xl">
            Start Your Data Journey
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataEngineering;