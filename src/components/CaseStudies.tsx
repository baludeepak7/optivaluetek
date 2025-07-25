import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const CaseStudies = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const caseStudies = [
    {
      title: "Modernizing Telecom API Gateway",
      subtitle: "Reduced partner onboarding from 4 weeks to 4 days",
      problem: "Manual onboarding of partners delayed launch cycles and created operational bottlenecks.",
      solution: "Built an API Gateway using Kong and implemented CI/CD for partner configuration management.",
      result: "80% reduction in onboarding time, enabling faster go-to-market strategies.",
      quote: "OptiValueTek helped us redefine agility in our partner ecosystem.",
      author: "CIO, Global Telecom Provider"
    },
    {
      title: "Predictive Analytics in Fintech",
      subtitle: "Detected loan defaults 30% earlier",
      problem: "Late-stage risk detection hurt financial health and customer relationships.",
      solution: "Created a real-time risk scoring engine using ML models and streaming data pipelines.",
      result: "Default risk detection improved by 30%, saving millions in potential losses.",
      quote: "The predictive insights have transformed our risk management approach.",
      author: "Risk Director, Leading Fintech"
    }
  ];

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
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
            Real results from our digital transformation partnerships
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                <h3 
                  className="text-2xl font-bold text-[#333333] mb-3"
                  style={{ fontFamily: 'Poppins' }}
                >
                  {study.title}
                </h3>
                <p 
                  className="text-lg text-[#D36A47] font-semibold mb-6"
                  style={{ fontFamily: 'Roboto' }}
                >
                  {study.subtitle}
                </p>

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
                      <h4 className="font-bold text-[#333333] mb-2">Result:</h4>
                      <p className="text-[#666666]" style={{ fontFamily: 'Inter' }}>
                        {study.result}
                      </p>
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