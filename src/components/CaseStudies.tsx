import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

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
      author: "Client CTO"
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
      author: "Infrastructure Team Lead"
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
      author: "Engineering Director"
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
      author: "Cloud Operations Lead"
    },
    {
      title: "CRM-Led Transformation for Banking & Logistics",
      subtitle: "25% increase in conversion rates with AI-powered insights",
      client: "Major Bank and Dalko Logistics",
      industry: "Banking, Logistics",
      problem: "Fragmented customer data, duplicate records, scattered communications, and poor visibility into leads and transactions were hampering sales effectiveness and customer experience.",
      solution: "Implemented comprehensive CRM platform with centralized customer data and deduplication, automated sales pipelines with intelligent lead scoring, and AI-powered campaign and sales prediction modules.",
      results: [
        "📈 25% increase in conversion rates",
        "💬 Personalized outreach through real-time customer signals",
        "📊 15% revenue growth from accurate sales forecasts",
        "🎯 Intelligent lead scoring and automated pipelines"
      ],
      quote: "Our teams now operate with clarity, speed, and precision — thanks to a data-first CRM strategy.",
      author: "Sales Operations Director"
    }
  ];

  const toggleCard = (index: number) => {
    setExpandedCard(prev => prev === index ? null : index);
  };

  return (
    <section id="case-studies" className="py-20 bg-[#F5EBDD]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl lg:text-5xl font-bold text-[#333333] mb-6"
            style={{ fontFamily: 'Poppins' }}
          >
            Success Stories
          </h2>
          <p 
            className="text-xl text-[#666666] max-w-3xl mx-auto"
            style={{ fontFamily: 'Roboto' }}
          >
            Real results from our digital transformation partnerships across industries
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                <h3 
                  className="text-2xl font-bold text-[#333333] mb-2"
                  style={{ fontFamily: 'Poppins' }}
                >
                  {study.title}
                </h3>
                <p 
                  className="text-lg text-[#D36A47] font-semibold mb-3"
                  style={{ fontFamily: 'Roboto' }}
                >
                  {study.subtitle}
                </p>
                <div className="flex gap-4 mb-6 text-sm text-[#666666]">
                  <span className="bg-[#F5EBDD] px-3 py-1 rounded-full">{study.client}</span>
                  <span className="bg-[#F5EBDD] px-3 py-1 rounded-full">{study.industry}</span>
                </div>

                {expandedCard === index && (
                  <div className="space-y-6 mb-6">
                    <div>
                      <h4 className="font-bold text-[#333333] mb-2">Challenge:</h4>
                      <p className="text-[#666666]" style={{ fontFamily: 'Inter' }}>
                        {study.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#333333] mb-2">Solution:</h4>
                      <p className="text-[#666666]" style={{ fontFamily: 'Inter' }}>
                        {study.solution}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#333333] mb-2">Results:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="text-[#666666]" style={{ fontFamily: 'Inter' }}>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-[#F5EBDD] p-4 rounded-lg">
                      <p 
                        className="text-[#333333] italic mb-2"
                        style={{ fontFamily: 'Inter' }}
                      >
                        "{study.quote}"
                      </p>
                      <p className="text-[#A47864] font-semibold">— {study.author}</p>
                    </div>
                  </div>
                )}

                <button
                  onClick={() => toggleCard(index)}
                  className="flex items-center gap-2 text-[#D36A47] font-semibold hover:text-[#B85A3D] transition-colors duration-300"
                >
                  {expandedCard === index ? (
                    <>
                      Show Less <ChevronUp size={20} />
                    </>
                  ) : (
                    <>
                      Read Full Case Study <ChevronDown size={20} />
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;