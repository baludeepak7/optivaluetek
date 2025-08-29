import React from 'react';
import { ArrowLeft, User, Award, Target, Lightbulb, Users, Building2, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const leadership = [
    {
      name: "Ashish Kumar",
      role: "Founder & Managing Director",
      din: "03511258",
      description: "Visionary leader driving digital transformation initiatives across global markets with expertise in enterprise architecture and strategic technology consulting.",
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      name: "Ragini Jha",
      role: "Founder & Director / Head of Operations",
      din: "05260531",
      description: "Operations excellence leader focusing on business growth, operational efficiency, and client success with proven track record in global delivery models.",
      gradient: "from-purple-600 to-pink-500"
    }
  ];

  const expertise = [
    {
      category: "API Management",
      technologies: ["Oracle", "Apigee", "WSO2", "Mulesoft", "Dell Boomi"],
      icon: "🔗"
    },
    {
      category: "BSS/OSS Transformation",
      technologies: ["Salesforce", "Oracle SOA/AIA", "Siebel", "OSM", "BRM"],
      icon: "📡"
    },
    {
      category: "SOA & Microservices",
      technologies: ["Oracle Fusion", "Apache Camel", "SAP PI", "TIBCO", "IBM Integration Broker"],
      icon: "🏗️"
    },
    {
      category: "Cloud Solutions",
      technologies: ["AWS", "Azure", "Oracle Cloud", "IaaS/PaaS/SaaS"],
      icon: "☁️"
    },
    {
      category: "DevOps & Automation",
      technologies: ["Kubernetes", "Docker", "Jenkins", "Terraform", "Ansible"],
      icon: "⚙️"
    },
    {
      category: "Data & Analytics",
      technologies: ["Kafka", "Splunk", "Grafana", "Informatica", "OBIEE"],
      icon: "📊"
    },
    {
      category: "Custom Development",
      technologies: ["MEAN", "Python", "Java/J2EE", "iOS & Android"],
      icon: "💻"
    },
    {
      category: "Emerging Technologies",
      technologies: ["IoT", "AI/ML", "RPA (UiPath, Blue Prism, Automation Anywhere)"],
      icon: "🚀"
    }
  ];

  const whyChooseUs = [
    {
      title: "Lean, Expert Teams",
      description: "Highly skilled consultants assure quality with minimal overhead",
      icon: Users,
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      title: "Onsite–Offshore Model",
      description: "Optimized for cost and global scalability",
      icon: Building2,
      gradient: "from-green-600 to-teal-500"
    },
    {
      title: "Automation & Frameworks",
      description: "Accelerated delivery across all phases of the SDLC",
      icon: Target,
      gradient: "from-purple-600 to-pink-500"
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  About Us
                </span>
              </h1>
              <p className="text-gray-300">Technology is the foundation of innovation and growth</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-600/20 backdrop-blur-sm border border-purple-400/30 rounded-full text-purple-300 text-sm font-medium mb-6">
            Our Story
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              Innovation Through Technology
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            At OptiValue Tek Consulting, technology is the foundation of innovation and growth. We partner with product and service companies worldwide to architect, design, and implement scalable enterprise solutions.
          </p>
        </div>

        {/* Leadership */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Leadership Team
            </span>
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${leader.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
                
                <div className="relative">
                  <div className={`w-20 h-20 bg-gradient-to-br ${leader.gradient} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <User size={32} className="text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {leader.name}
                  </h4>
                  <p className="text-blue-400 font-semibold mb-2">{leader.role}</p>
                  <p className="text-gray-400 text-sm mb-4">DIN: {leader.din}</p>
                  <p className="text-gray-300 leading-relaxed">
                    {leader.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
              Why Choose OptiValue Tek?
            </span>
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
                  
                  <div className="relative text-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center shadow-lg mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                      {reason.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Areas of Expertise */}
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              Areas of Expertise
            </span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((area, index) => (
              <div
                key={index}
                className="bg-gray-700/30 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-6 hover:border-gray-500/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{area.icon}</div>
                  <h4 className="font-bold text-white mb-3">{area.category}</h4>
                </div>
                <div className="space-y-2">
                  {area.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-green-400" />
                      <span className="text-gray-300 text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;