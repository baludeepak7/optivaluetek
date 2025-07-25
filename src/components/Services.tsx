import React from 'react';
import { Database, Share2, Cloud, Settings, Brain, Smartphone, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Database className="text-[#1e40af]" size={32} />,
      title: "Data Integration & Engineering",
      description: "Transform raw data into actionable insights with advanced ETL pipelines and data warehousing solutions.",
      features: ["ETL Pipeline Development", "Data Warehousing", "Real-time Analytics", "Data Quality Management"]
    },
    {
      icon: <Share2 className="text-[#3b82f6]" size={32} />,
      title: "API Management & Microservices",
      description: "Build scalable, API-first architectures that enable seamless integration and rapid development.",
      features: ["API Gateway Design", "Microservices Architecture", "Service Mesh", "API Security"]
    },
    {
      icon: <Cloud className="text-[#dc2626]" size={32} />,
      title: "Cloud Solutions",
      description: "Comprehensive AWS, Azure, and GCP services for migration, optimization, and cloud-native development.",
      features: ["Cloud Migration", "Infrastructure as Code", "Multi-cloud Strategy", "Cost Optimization"]
    },
    {
      icon: <Settings className="text-[#059669]" size={32} />,
      title: "DevOps & SRE",
      description: "Automate deployment pipelines and ensure system reliability with modern DevOps and SRE practices.",
      features: ["CI/CD Pipelines", "Infrastructure Automation", "Monitoring & Alerting", "Incident Response"]
    },
    {
      icon: <Brain className="text-[#7c3aed]" size={32} />,
      title: "Data Science & MLOps",
      description: "Implement machine learning solutions with robust MLOps frameworks for production-ready AI systems.",
      features: ["ML Model Development", "MLOps Pipelines", "Predictive Analytics", "AI Strategy Consulting"]
    },
    {
      icon: <Smartphone className="text-[#ea580c]" size={32} />,
      title: "Web & Mobile Development",
      description: "Create engaging user experiences with modern web and mobile applications built for performance.",
      features: ["Progressive Web Apps", "Mobile App Development", "UI/UX Design", "Performance Optimization"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#1e40af]/10 rounded-full text-[#1e40af] text-sm font-medium mb-6">
            Our Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1a202c] mb-6">
            Comprehensive Technology Solutions
          </h2>
          <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
            End-to-end services designed to accelerate your digital transformation journey 
            with proven methodologies and cutting-edge technologies.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-lg hover:border-[#1e40af]/20 transition-all duration-300 group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-slate-50 rounded-xl mb-6 group-hover:bg-[#1e40af]/10 transition-colors">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-[#1a202c] mb-4">
                {service.title}
              </h3>
              
              <p className="text-[#4a5568] leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-[#4a5568]">
                    <div className="w-1.5 h-1.5 bg-[#1e40af] rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>

              <button className="text-[#0052cc] hover:text-[#f5a623] font-semibold transition-colors duration-200 flex items-center gap-2 group">
                Learn More
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1a202c] mb-4">Our Proven Process</h3>
            <p className="text-lg text-[#4a5568] max-w-2xl mx-auto">
              A systematic approach that ensures successful project delivery and long-term value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your business needs and technical requirements" },
              { step: "02", title: "Strategy", desc: "Developing a comprehensive roadmap and architecture plan" },
              { step: "03", title: "Implementation", desc: "Agile development with continuous integration and testing" },
              { step: "04", title: "Optimization", desc: "Performance tuning, monitoring, and ongoing support" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1e40af] text-white rounded-full text-xl font-bold mb-4">
                  {phase.step}
                </div>
                <h4 className="text-lg font-bold text-[#1a202c] mb-2">{phase.title}</h4>
                <p className="text-[#4a5568] text-sm leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-[#1e40af] hover:bg-[#1d4ed8] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
            Explore All Services
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;