import React from 'react';
import { ArrowRight, Calendar, FileText } from 'lucide-react';

const Insights = () => {
  const handleInsightClick = (type: string, title: string) => {
    if (type === 'event') {
      // For events, you could integrate with a calendar system or registration form
      window.open('mailto:contact@optivaluetek.com?subject=Webinar Registration: ' + encodeURIComponent(title), '_blank');
    } else {
      // For articles and guides, you could link to actual content or contact form
      window.open('mailto:contact@optivaluetek.com?subject=Request for: ' + encodeURIComponent(title), '_blank');
    }
  };

  const insights = [
    {
      title: "Red Hat Fuse: Building Cloud-Native Microservices",
      summary: "Learn how Red Hat Fuse integration platform built on Apache Camel enhances enterprise-grade integrations and microservices.",
      cta: "Read Article",
      type: "article",
      readTime: "10 min read"
    },
    {
      title: "Camunda BPM in Cloud-Native Architecture",
      summary: "Discover how Camunda BPM provides powerful business process management capabilities in microservices environments.",
      cta: "Download Guide",
      type: "guide",
      readTime: "12 min read"
    },
    {
      title: "BSS/OSS Transformation Webinar",
      summary: "Join our experts for insights on telecom BSS/OSS modernization and Oracle BRM implementation strategies.",
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

                <button 
                  onClick={() => handleInsightClick(insight.type, insight.title)}
                  className="flex items-center gap-2 text-[#D36A47] font-semibold hover:text-[#B85A3D] transition-colors duration-300 group-hover:gap-3"
                >
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