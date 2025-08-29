import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight, TrendingUp, Users, Clock } from 'lucide-react';

const CaseStudies = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const caseStudies = [
    {
      title: "Transforming Telecom: Monolith to Modular",
      subtitle: "30% improvement in response time with scalable microservices",
      client: "Leading Telecom Provider",
      industry: "Telecommunications",
      problem: "Legacy monolithic architecture was difficult to scale and maintain, causing performance degradation, frequent service disruptions, and complex integration flows across 40+ customer-facing channels.",
      solution: "Deployed 70+ experts to re-architect the system into scalable microservices using Oracle BRM, modernized CRM, implemented service isolation for fault-tolerant APIs, and shifted to token-based security with OpenShift, AWS, Kafka, Red Hat SSO, and Dynatrace.",
      results: [
        "🚀 30% improvement in response time",
        "🔒 Robust, token-secured architecture", 
        "📊 Real-time monitoring with Prometheus & ELK",
        "⚙️ Future-ready DevOps pipelines at maturity level 4"
      ],
      quote: "OptiValue Tek's transformation not only addressed our immediate challenges but set us up for future growth.",
      author: "Client CTO",
      metrics: { improvement: "30%", timeline: "8 months", team: "70+ experts" },
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      title: "Building Versatile API Gateway from Scratch",
      subtitle: "50% faster API responses with enterprise-ready gateway",
      client: "Telecom Infrastructure Firm",
      industry: "API Management / Telecommunications",
      problem: "Growing API traffic and integration demands required a flexible, secure, high-performance API gateway capable of unifying microservices access, load balancing, caching, and supporting cloud, on-prem, and hybrid setups.",
      solution: "Built an open-source, enterprise-ready API Gateway with unified entry points, advanced traffic routing and load distribution, layered caching and real-time monitoring, plus seamless compatibility with Kubernetes, OpenShift, and Docker.",
      results: [
        "⏱️ 50% faster API responses via caching and load balancing",
        "🔐 Centralized security with advanced access control",
        "💸 Reduced infra costs through optimized routing",
        "🛠️ Open-source flexibility with no vendor lock-in"
      ],
      quote: "This gateway empowered our internal teams and enhanced partner integration while saving licensing costs.",
      author: "Infrastructure Team Lead",
      metrics: { improvement: "50%", timeline: "6 months", team: "25+ experts" },
      gradient: "from-purple-600 to-pink-500"
    },
    {
      title: "Agile Telecom Transformation with Microservices",
      subtitle: "3x faster time-to-market with 20% cost reduction",
      client: "Tier-1 Telecom Operator",
      industry: "Telecommunications",
      problem: "Sluggish feature rollout due to monolithic dependencies, inability to scale individual components independently, and high operational expenses were limiting business agility.",
      solution: "Restructured system into microservices using Docker + Kubernetes for orchestration, implemented CI/CD pipelines for faster deployments, and deployed distributed data management with fail-safe patterns.",
      results: [
        "🚀 3x faster time-to-market for new features",
        "💡 20% reduction in operational costs",
        "🤝 Enhanced cross-team collaboration",
        "🔄 Independent component scaling capability"
      ],
      quote: "From rigid to responsive — a foundational shift in our software delivery.",
      author: "Engineering Director",
      metrics: { improvement: "3x", timeline: "10 months", team: "45+ experts" },
      gradient: "from-green-600 to-teal-500"
    },
    {
      title: "Cloud Migration & DevOps Modernization",
      subtitle: "40% cost savings with 60% faster release cycles",
      client: "Global Telecom Provider",
      industry: "Telecommunications / Cloud",
      problem: "Traditional IT setup led to high infrastructure costs, limited agility, delayed deployments, and compliance and security issues during digital transformation.",
      solution: "Orchestrated seamless migration to AWS Cloud with full-stack DevOps and CI/CD pipelines, enabled auto-scaling and hybrid cloud capabilities, and introduced advanced logging, monitoring, and governance.",
      results: [
        "☁️ 40% cost savings in infrastructure",
        "🔁 60% faster release cycles",
        "🔐 Full compliance with telecom data regulations",
        "📈 Auto-scaling and hybrid cloud capabilities"
      ],
      quote: "A pivotal step into a cloud-first, agile future.",
      author: "Cloud Operations Lead",
      metrics: { improvement: "40%", timeline: "12 months", team: "35+ experts" },
      gradient: "from-orange-600 to-red-500"
    }
  ];

  const toggleCard = (index: number) => {
    setExpandedCard(prev => prev === index ? null : index);
  };

  return (
    <section id="case-studies" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, #3b82f6 0%, transparent 50%), 
                           radial-gradient(circle at 80% 20%, #8b5cf6 0%, transparent 50%),
                           radial-gradient(circle at 40% 40%, #06b6d4 0%, transparent 50%)`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-600/20 backdrop-blur-sm border border-green-400/30 rounded-full text-green-300 text-sm font-medium mb-6">
            Success Stories
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400">
              Client Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real results from our digital transformation partnerships across industries
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                      {study.title}
                    </h3>
                    <p className="text-lg text-blue-400 font-semibold mb-4">
                      {study.subtitle}
                    </p>
                  </div>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${study.gradient} flex items-center justify-center shadow-lg`}>
                    <TrendingUp size={24} className="text-white" />
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-700/30 rounded-xl border border-gray-600/30">
                    <div className="text-2xl font-bold text-green-400">{study.metrics.improvement}</div>
                    <div className="text-xs text-gray-400">Improvement</div>
                  </div>
                  <div className="text-center p-3 bg-gray-700/30 rounded-xl border border-gray-600/30">
                    <div className="text-2xl font-bold text-blue-400">{study.metrics.timeline}</div>
                    <div className="text-xs text-gray-400">Timeline</div>
                  </div>
                  <div className="text-center p-3 bg-gray-700/30 rounded-xl border border-gray-600/30">
                    <div className="text-2xl font-bold text-purple-400">{study.metrics.team}</div>
                    <div className="text-xs text-gray-400">Team Size</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex gap-3 mb-6">
                  <span className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600/50">
                    {study.client}
                  </span>
                  <span className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600/50">
                    {study.industry}
                  </span>
                </div>

                {/* Expanded Content */}
                {expandedCard === index && (
                  <div className="space-y-6 mb-6 animate-in slide-in-from-top-2 duration-300">
                    <div className="p-6 bg-gray-700/20 rounded-2xl border border-gray-600/30">
                      <h4 className="font-bold text-red-400 mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full" />
                        Challenge
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {study.problem}
                      </p>
                    </div>
                    
                    <div className="p-6 bg-gray-700/20 rounded-2xl border border-gray-600/30">
                      <h4 className="font-bold text-blue-400 mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full" />
                        Solution
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                    
                    <div className="p-6 bg-gray-700/20 rounded-2xl border border-gray-600/30">
                      <h4 className="font-bold text-green-400 mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full" />
                        Results
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                            <div className="text-gray-300 text-sm">
                              {result}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className={`p-6 bg-gradient-to-r ${study.gradient} bg-opacity-10 rounded-2xl border border-gray-600/30`}>
                      <p className="text-white italic mb-3 text-lg">
                        "{study.quote}"
                      </p>
                      <p className="text-gray-300 font-semibold">— {study.author}</p>
                    </div>
                  </div>
                )}

                {/* Toggle Button */}
                <button
                  onClick={() => toggleCard(index)}
                  className="group/btn flex items-center gap-3 text-blue-400 font-semibold hover:text-blue-300 transition-all duration-300 w-full justify-center py-3 px-6 bg-gray-700/20 rounded-xl border border-gray-600/30 hover:bg-gray-700/30"
                >
                  {expandedCard === index ? (
                    <>
                      <span>Show Less</span>
                      <ChevronUp size={20} className="group-hover/btn:-translate-y-1 transition-transform duration-300" />
                    </>
                  ) : (
                    <>
                      <span>Read Full Case Study</span>
                      <ChevronDown size={20} className="group-hover/btn:translate-y-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/*<div className="text-center mt-16">
          <button className="group bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg flex items-center gap-3 mx-auto shadow-2xl">
            View All Success Stories
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>*/}
      </div>
    </section>
  );
};

export default CaseStudies;