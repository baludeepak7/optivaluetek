import React from 'react';
import { ArrowRight, Calendar, FileText } from 'lucide-react';

const Insights = () => {
  const insights = [
    {
      title: "MLOps vs AIOps: What's Right for You?",
      summary: "Understanding the core differences and choosing the right ops model for your AI initiatives.",
      cta: "Read Article",
      type: "article",
      readTime: "8 min read"
    },
    {
      title: "How to API-Enable Your Legacy System",
      summary: "A comprehensive roadmap to turn your monolith into APIs, step by step guide.",
      cta: "Download Guide",
      type: "guide",
      readTime: "15 min read"
    },
    {
      title: "AI Transformation Webinar",
      summary: "Join us for a 45-min session on AI strategy and implementation best practices.",
      cta: "Register Now",
      type: "event",
      date: "March 15, 2025"
    }
  ];

  return (
    <section id="insights" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl lg:text-5xl font-bold text-[#333333] mb-6"
            style={{ fontFamily: 'Poppins' }}
          >
            Latest Insights
          </h2>
          <p 
            className="text-xl text-[#666666] max-w-3xl mx-auto"
            style={{ fontFamily: 'Roboto' }}
          >
            Expert perspectives on digital transformation and emerging technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group"
            >
              <div className="aspect-video bg-gradient-to-br from-[#A47864]/20 to-[#D36A47]/20 flex items-center justify-center">
                {insight.type === 'article' && <FileText size={48} className="text-[#A47864]" />}
                {insight.type === 'guide' && <FileText size={48} className="text-[#A47864]" />}
                {insight.type === 'event' && <Calendar size={48} className="text-[#A47864]" />}
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    insight.type === 'event' 
                      ? 'bg-[#D36A47] text-white' 
                      : 'bg-[#F5EBDD] text-[#A47864]'
                  }`}>
                    {insight.type.charAt(0).toUpperCase() + insight.type.slice(1)}
                  </span>
                  {insight.readTime && (
                    <span className="text-xs text-[#666666]">{insight.readTime}</span>
                  )}
                  {insight.date && (
                    <span className="text-xs text-[#666666]">{insight.date}</span>
                  )}
                </div>

                <h3 
                  className="text-xl font-bold text-[#333333] mb-3 group-hover:text-[#A47864] transition-colors duration-300"
                  style={{ fontFamily: 'Poppins' }}
                >
                  {insight.title}
                </h3>
                
                <p 
                  className="text-[#666666] mb-6 leading-relaxed"
                  style={{ fontFamily: 'Inter' }}
                >
                  {insight.summary}
                </p>

                <button className="flex items-center gap-2 text-[#D36A47] font-semibold hover:text-[#B85A3D] transition-colors duration-300 group-hover:gap-3">
                  {insight.cta}
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;