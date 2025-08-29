import React, { useState } from 'react';
import { ArrowRight, Calendar, FileText, Play, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const Insights = () => {
  const [expandedInsight, setExpandedInsight] = useState<number | null>(null);

  const handleInsightClick = (type: string, title: string) => {
    if (type === 'event') {
      window.open('mailto:contact@optivaluetek.com?subject=Webinar Registration: ' + encodeURIComponent(title), '_blank');
    } else {
      window.open('mailto:contact@optivaluetek.com?subject=Request for: ' + encodeURIComponent(title), '_blank');
    }
  };

  const toggleExpanded = (index: number) => {
    setExpandedInsight(prev => prev === index ? null : index);
  };

  const insights = [
    {
      title: "Red Hat Fuse: Building Cloud-Native Microservices",
      summary: "Learn how Red Hat Fuse integration platform built on Apache Camel enhances enterprise-grade integrations and microservices.",
      fullContent: "Red Hat Fuse is an integration platform that is built upon Apache Camel, a versatile framework that can be used in various integration scenarios, including building cloud-native microservices. It provides additional tools, components, and features to enhance the capabilities of Apache Camel for building and deploying enterprise-grade integrations and microservices. OptiValue Tek has rich experience in designing and developing Integration solutions using the Red Hat Fuse Integration Platform. Our expertise includes SOA implementations, microservices architecture, API management, and cloud-native deployments using containerization technologies.",
      cta: "Read Full Article",
      type: "article",
      readTime: "10 min read",
      technologies: ["Red Hat Fuse", "Apache Camel", "Micro services", "Cloud-Native"],
      gradient: "from-red-600 to-orange-500"
    },
    {
      title: "Camunda BPM in Cloud-Native Architecture",
      summary: "Discover how Camunda BPM provides powerful business process management capabilities in microservices environments.",
      fullContent: "Camunda BPM, a part of the Camunda platform, can be effectively utilized in a cloud-native architecture to provide powerful and flexible business process management capabilities. Key features include: 1) Microservices Integration - seamless integration with distributed systems, 2) Containerization - Docker and Kubernetes support, 3) Orchestration - complex workflow management, 4) Event-Driven Architecture - reactive process execution, 5) Dynamic Scaling - auto-scaling based on workload, 6) Monitoring and Observability - comprehensive process analytics. OptiValueTek helps organizations optimize their business processes, leverage technology effectively, and achieve greater operational efficiency and competitiveness in the market.",
      cta: "Download Guide",
      type: "guide",
      readTime: "12 min read",
      technologies: ["BPM", "Cloud-Native", "Micro services"],
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      title: "BSS/OSS Transformation Webinar",
      summary: "Join our experts for insights on telecom BSS/OSS modernization and Oracle BRM implementation strategies.",
      fullContent: "Join our comprehensive webinar on BSS/OSS transformation strategies for modern telecom operators. Our experts will cover Oracle BRM (Billing and Revenue Management), OSM (Order and Service Management), and UIM (User Interaction Management) implementations. Topics include legacy system modernization, cloud migration strategies, API-first architectures, and 5G-ready infrastructure. Learn from real-world case studies and best practices from our extensive telecom project portfolio. This session is ideal for telecom executives, IT architects, and digital transformation leaders looking to modernize their BSS/OSS stack.",
      cta: "Register Now",
      type: "event",
      date: "March 15, 2025",
      technologies: ["Oracle BRM", "BSS","OSS", "Telecom"],
      gradient: "from-purple-600 to-pink-500"
    },
    {
      title: "Red Hat Process Automation Manager & jBPM",
      summary: "Comprehensive guide to business process automation using Red Hat PAM and jBPM platforms.",
      fullContent: "Red Hat Process Automation Manager and jBPM are powerful tools for business process automation and management. While jBPM is more focused on providing the core BPM engine and execution capabilities, Red Hat PAM offers a broader set of features including business rules management, decision management, case management, and more. OptiValue Tek has rich experience in designing and developing BPM solutions using the Red Hat PAM & jBPM Platform. Our implementations include workflow automation, decision management, case management, and integration with enterprise systems for complete business process digitization.",
      cta: "Read Article",
      type: "article",
      readTime: "8 min read",
      technologies: ["Red Hat PAM", "jBPM", "Business Process"],
      gradient: "from-green-600 to-teal-500"
    },
    {
      title: "AI/ML Solutions for Enterprise Use Cases",
      summary: "Explore how artificial intelligence and machine learning can transform your business operations.",
      fullContent: "Discover the transformative power of AI and ML in enterprise environments. Our comprehensive approach covers data engineering, model development, MLOps implementation, and production deployment. We specialize in predictive analytics, computer vision, natural language processing, and recommendation systems. Learn about our proprietary accelerators for machine learning use cases, automated model training pipelines, and real-time inference systems. Case studies include fraud detection, customer churn prediction, supply chain optimization, and intelligent document processing across various industries.",
      cta: "Download Whitepaper",
      type: "guide",
      readTime: "15 min read",
      technologies: ["AI/ML", "Data Science", "MLOps"],
      gradient: "from-indigo-600 to-purple-500"
    },
    {
      title: "Cloud Migration Strategies Webinar",
      summary: "Best practices for migrating legacy applications to cloud-native architectures.",
      fullContent: "Join our cloud migration experts for an in-depth discussion on successful cloud transformation strategies. Topics include assessment methodologies, migration patterns, containerization strategies, and cloud-native architecture design. We'll cover AWS, Azure, Oracle Cloud, and Google Cloud platforms, discussing the pros and cons of each for different use cases. Real-world case studies will demonstrate successful migrations from monolithic to microservices architectures, including cost optimization strategies and performance improvements achieved through cloud adoption.",
      cta: "Register for Webinar",
      type: "event",
      date: "April 20, 2025",
      technologies: ["AWS", "Azure", "Micro services"],
      gradient: "from-cyan-600 to-blue-500"
    }
  ];

  return (
    <section id="insights" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30% 70%, #3b82f6 0%, transparent 50%), 
                           radial-gradient(circle at 70% 30%, #8b5cf6 0%, transparent 50%)`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-600/20 backdrop-blur-sm border border-cyan-400/30 rounded-full text-cyan-300 text-sm font-medium mb-6">
            Latest Insights
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Expert Insights
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Expert perspectives on digital transformation, emerging technologies, and industry best practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {insights.map((insight, index) => {
            const isExpanded = expandedInsight === index;
            
            return (
              <div
                key={index}
                className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${insight.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${insight.gradient} flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        {insight.type === 'article' && <FileText size={24} className="text-white" />}
                        {insight.type === 'guide' && <FileText size={24} className="text-white" />}
                        {insight.type === 'event' && <Calendar size={24} className="text-white" />}
                      </div>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          insight.type === 'event' 
                            ? 'bg-purple-600/20 text-purple-300 border border-purple-400/30' 
                            : 'bg-blue-600/20 text-blue-300 border border-blue-400/30'
                        }`}>
                          {insight.type.charAt(0).toUpperCase() + insight.type.slice(1)}
                        </span>
                        {insight.readTime && (
                          <span className="text-xs text-gray-400">{insight.readTime}</span>
                        )}
                        {insight.date && (
                          <span className="text-xs text-gray-400">{insight.date}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {insight.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {insight.summary}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {insight.technologies.slice(0, 2).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {insight.technologies.length > 2 && (
                      <span className="px-3 py-1 bg-gray-700/50 text-gray-400 text-sm rounded-full border border-gray-600/50">
                        +{insight.technologies.length - 2} more
                      </span>
                    )}
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="space-y-6 mb-6 animate-in slide-in-from-top-2 duration-300">
                      <div className="p-6 bg-gray-700/20 rounded-2xl border border-gray-600/30">
                        <h4 className="font-bold text-blue-400 mb-3 flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full" />
                          Full Content
                        </h4>
                        <p className="text-gray-300 leading-relaxed">
                          {insight.fullContent}
                        </p>
                      </div>
                      
                      <div className="p-6 bg-gray-700/20 rounded-2xl border border-gray-600/30">
                        <h4 className="font-bold text-green-400 mb-3 flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full" />
                          Technologies Covered
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {insight.technologies.map((tech, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                              <div className="w-2 h-2 bg-green-400 rounded-full" />
                              <span className="text-gray-300 text-sm">{tech}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                     {/* <div className={`p-6 bg-gradient-to-r ${insight.gradient} bg-opacity-10 rounded-2xl border border-gray-600/30`}>
                        <button 
                          onClick={() => handleInsightClick(insight.type, insight.title)}
                          className="flex items-center gap-3 text-white font-semibold hover:text-gray-200 transition-colors duration-300 w-full justify-center py-3 px-6 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20"
                        >
                          <ExternalLink size={20} />
                          {insight.cta}
                        </button>
                      </div> */}
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
                        <span>Read More</span>
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
        {/*<div className="text-center mt-16">
          <button className="group bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg flex items-center gap-3 mx-auto shadow-2xl">
            View All Insights
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>*/}
      </div>
    </section>
  );
};

export default Insights;