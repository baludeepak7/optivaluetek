import React from 'react';
import { Star, Quote } from 'lucide-react';

const Metrics: React.FC = () => {
  const metrics = [
    { number: "100+", label: "Projects Delivered", color: "text-[#1e40af]" },
    { number: "50+", label: "Enterprise Clients", color: "text-[#3b82f6]" },
    { number: "20%", label: "YoY Growth", color: "text-[#dc2626]" },
    { number: "95%", label: "Client Satisfaction", color: "text-[#059669]" }
  ];

  const clients = [
    { name: "TechCorp Global", logo: "TC" },
    { name: "DataFlow Systems", logo: "DF" },
    { name: "CloudFirst Industries", logo: "CF" },
    { name: "NextGen Solutions", logo: "NG" },
    { name: "Innovation Labs", logo: "IL" },
    { name: "Digital Transform", logo: "DT" }
  ];

  const testimonials = [
    {
      quote: "OptiValueTek transformed our legacy systems with exceptional expertise. Their API-first approach reduced our integration time by 60% and improved system reliability significantly.",
      author: "Sarah Johnson",
      position: "CTO",
      company: "TechCorp Global",
      avatar: "SJ"
    },
    {
      quote: "The team's deep understanding of cloud architecture and data engineering helped us achieve a seamless migration to AWS. Outstanding technical delivery and project management.",
      author: "Michael Chen",
      position: "VP of Engineering",
      company: "DataFlow Systems",
      avatar: "MC"
    },
    {
      quote: "Working with OptiValueTek on our ML platform was a game-changer. Their MLOps expertise and predictive modules accelerated our AI initiatives by months.",
      author: "Priya Patel",
      position: "Head of Data Science",
      company: "Innovation Labs",
      avatar: "PP"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl lg:text-5xl font-bold ${metric.color} mb-2`}>
                {metric.number}
              </div>
              <div className="text-[#4a5568] font-medium">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-[#1a202c] text-center mb-12">
            Trusted by Leading Enterprises
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center text-[#1e40af] font-bold text-lg hover:shadow-md hover:border-[#1e40af]/20 transition-all duration-300">
                  {client.logo}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1a202c] mb-4">
              What Our Clients Say
            </h3>
            <p className="text-lg text-[#4a5568] max-w-2xl mx-auto">
              Real feedback from enterprise leaders who've transformed their businesses with us
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-lg hover:border-[#1e40af]/20 transition-all duration-300 relative"
              >
                <div className="absolute top-6 right-6">
                  <Quote size={24} className="text-[#1e40af]/20" />
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star key={starIndex} size={16} className="text-[#ea580c] fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-[#4a5568] mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#0052cc] rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-[#1a202c]">{testimonial.author}</div>
                    <div className="text-[#4a5568] text-sm">{testimonial.position}</div>
                    <div className="text-[#0052cc] font-medium text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-[#0052cc] to-[#00a3e0] rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how we can accelerate your digital transformation journey
          </p>
          <button className="bg-[#dc2626] hover:bg-[#b91c1c] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Metrics;