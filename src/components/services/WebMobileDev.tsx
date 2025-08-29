import React, { useState } from 'react';
import { ArrowLeft, Smartphone, Globe, Code, Palette, CheckCircle, ArrowRight, Play, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebMobileDev = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      title: "Full Stack Development",
      description: "End-to-end web application development with modern frameworks",
      icon: Code,
      features: ["React/Angular frontend", "Node.js/Java backend", "Database design", "API development"]
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications",
      icon: Smartphone,
      features: ["iOS development", "Android development", "React Native", "Flutter apps"]
    },
    {
      title: "Progressive Web Apps",
      description: "Modern web applications with native app-like experience",
      icon: Globe,
      features: ["Offline functionality", "Push notifications", "App-like interface", "Cross-platform"]
    },
    {
      title: "UI/UX Design",
      description: "User-centered design for exceptional digital experiences",
      icon: Palette,
      features: ["User research", "Wireframing", "Prototyping", "Design systems"]
    }
  ];

  const technologies = [
    { name: "React", category: "Frontend", icon: "⚛️" },
    { name: "Angular", category: "Frontend", icon: "🅰️" },
    { name: "Vue.js", category: "Frontend", icon: "💚" },
    { name: "Node.js", category: "Backend", icon: "🟢" },
    { name: "Java Spring", category: "Backend", icon: "☕" },
    { name: ".NET", category: "Backend", icon: "🔷" },
    { name: "React Native", category: "Mobile", icon: "📱" },
    { name: "Flutter", category: "Mobile", icon: "🐦" }
  ];

  const platforms = [
    {
      name: "Salesforce Development",
      description: "Custom Salesforce solutions and integrations",
      features: ["Apex development", "Lightning components", "Salesforce integrations", "Custom objects"],
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      name: "Java Spring Boot",
      description: "Enterprise Java applications with Spring ecosystem",
      features: ["Microservices", "REST APIs", "Spring Security", "Spring Data"],
      gradient: "from-green-600 to-teal-500"
    },
    {
      name: "React Ecosystem",
      description: "Modern React applications with latest tools",
      features: ["React 18", "Next.js", "Redux Toolkit", "TypeScript"],
      gradient: "from-purple-600 to-pink-500"
    },
    {
      name: "Angular Framework",
      description: "Enterprise Angular applications with TypeScript",
      features: ["Angular 17", "RxJS", "Angular Material", "NgRx"],
      gradient: "from-red-600 to-orange-500"
    }
  ];

  const projectTypes = [
    {
      title: "E-commerce Platforms",
      description: "Full-featured online stores with payment integration",
      gradient: "from-blue-600 to-cyan-500",
      features: ["Shopping cart", "Payment gateway", "Inventory management", "Admin dashboard"],
      technologies: ["React", "Node.js", "Stripe", "MongoDB"]
    },
    {
      title: "Enterprise Dashboards",
      description: "Business intelligence and analytics dashboards",
      gradient: "from-purple-600 to-pink-500",
      features: ["Real-time data", "Interactive charts", "Role-based access", "Export functionality"],
      technologies: ["Angular", "D3.js", "Java", "PostgreSQL"]
    },
    {
      title: "Mobile Banking Apps",
      description: "Secure financial applications for mobile devices",
      gradient: "from-green-600 to-teal-500",
      features: ["Biometric auth", "Transaction history", "Bill payments", "Account management"],
      technologies: ["React Native", "Node.js", "JWT", "Encryption"]
    },
    {
      title: "Healthcare Portals",
      description: "Patient management and telemedicine platforms",
      gradient: "from-orange-600 to-red-500",
      features: ["Patient records", "Appointment booking", "Video consultations", "HIPAA compliance"],
      technologies: ["Vue.js", ".NET", "WebRTC", "SQL Server"]
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Web & Mobile Development
                </span>
              </h1>
              <p className="text-gray-300">Full Stack, Java Spring Boot, Salesforce, React, Angular, Mobile Apps</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-600/20 backdrop-blur-sm border border-cyan-400/30 rounded-full text-cyan-300 text-sm font-medium mb-6">
            Development Excellence
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Digital Experiences
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Create exceptional web and mobile applications with modern frameworks, responsive design, and user-centered development that delivers outstanding digital experiences across all platforms.
          </p>
          {/*<div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 font-semibold flex items-center gap-3 shadow-xl">
              <Play size={20} />
              View Portfolio
            </button>
            <button className="border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 font-semibold flex items-center gap-3">
              <Download size={20} />
              Development Guide
            </button>
          </div>*/}
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
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
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

        {/* Development Platforms */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
              Development Platforms
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
                    <Code size={24} className="text-white" />
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

        {/* Project Types */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              Project Showcase
            </span>
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projectTypes.map((project, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
                
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Smartphone size={24} className="text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-bold text-blue-400 mb-2">Key Features</h5>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle size={14} className="text-green-400" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-bold text-green-400 mb-2">Technologies</h5>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600/50">
                            {tech}
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
        <div className="text-center bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Build Your Next Application?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our development experts help you create exceptional web and mobile applications that engage users and drive business growth.
          </p>
          <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg flex items-center gap-3 mx-auto shadow-2xl">
            Start Your Project
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebMobileDev;