import React from 'react';
import { Zap, Shield, Cpu, ArrowRight, CheckCircle } from 'lucide-react';

const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: <Zap className="text-[#dc2626]" size={32} />,
      title: "Test Automation Suite",
      description: "Comprehensive testing framework that reduces testing time by 70% while improving code quality and reliability.",
      features: ["Cross-browser Testing", "API Testing", "Performance Testing", "CI/CD Integration"],
      benefits: "70% faster testing cycles",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: <Shield className="text-[#1e40af]" size={32} />,
      title: "API Manager Toolkit",
      description: "Enterprise-grade API management platform with security, monitoring, and documentation capabilities.",
      features: ["API Gateway", "Rate Limiting", "Authentication", "Analytics Dashboard"],
      benefits: "60% reduction in integration time",
      image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: <Cpu className="text-[#7c3aed]" size={32} />,
      title: "ML-Powered Predictive Modules",
      description: "Pre-built machine learning components for demand forecasting, anomaly detection, and predictive maintenance.",
      features: ["Real-time Predictions", "Custom Model Training", "Scalable Deployment", "Performance Monitoring"],
      benefits: "85% accuracy in predictions",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section id="solutions-and-tools" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#1e40af]/10 rounded-full text-[#1e40af] text-sm font-medium mb-6">
            Solutions & Tools
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1a202c] mb-6">
            In-House Accelerators & Tools
          </h2>
          <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
            Proprietary solutions developed to accelerate your digital transformation 
            and provide competitive advantages in the marketplace.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg hover:border-[#1e40af]/20 transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white rounded-lg p-2 shadow-sm">
                  {solution.icon}
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium">{solution.benefits}</div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1a202c] mb-3">
                  {solution.title}
                </h3>
                
                <p className="text-[#4a5568] leading-relaxed mb-6">
                  {solution.description}
                </p>

                <div className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-[#4a5568]">
                      <CheckCircle size={16} className="text-[#059669] mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <button className="w-full bg-[#0052cc] hover:bg-[#003d99] text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group">
                  Learn More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ROI Section */}
        <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1a202c] mb-4">
              Proven ROI with Our Accelerators
            </h3>
            <p className="text-lg text-[#4a5568] max-w-2xl mx-auto">
              Our tools and accelerators have consistently delivered measurable business value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { metric: "60%", label: "Faster Time-to-Market", icon: "⚡", color: "text-[#dc2626]" },
              { metric: "40%", label: "Reduced Development Costs", icon: "💰", color: "text-[#059669]" },
              { metric: "85%", label: "Improved Code Quality", icon: "🎯", color: "text-[#1e40af]" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-slate-50 rounded-xl">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.metric}</div>
                <div className="text-[#4a5568] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-[#dc2626] hover:bg-[#b91c1c] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;