import React, { useState } from 'react';

const Industries = () => {
  const [activeTab, setActiveTab] = useState(0);

  const industries = [
    {
      title: "Telecom",
      description: "Automate provisioning, billing, and partner onboarding with modern API-first solutions that reduce complexity and accelerate time-to-market."
    },
    {
      title: "Banking & FinTech",
      description: "Open banking APIs, fraud detection, and credit intelligence systems that ensure compliance while driving innovation in financial services."
    },
    {
      title: "Healthcare",
      description: "FHIR-compliant systems, claims automation, and digital front door applications that improve patient outcomes and operational efficiency."
    },
    {
      title: "Product Engineering",
      description: "Co-create and launch B2B/B2C SaaS tools faster with modern development practices and scalable architecture patterns."
    },
    {
      title: "Legacy Modernization",
      description: "Reverse engineer & refactor monoliths with confidence using proven methodologies that minimize risk and maximize ROI."
    }
  ];

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl lg:text-5xl font-bold text-[#333333] mb-6"
            style={{ fontFamily: 'Poppins' }}
          >
            Industries We Serve
          </h2>
          <p 
            className="text-xl text-[#666666] max-w-3xl mx-auto"
            style={{ fontFamily: 'Roboto' }}
          >
            Specialized expertise across key verticals with deep domain knowledge
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {industries.map((industry, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-[#A47864] text-white shadow-lg'
                    : 'bg-[#F5EBDD] text-[#A47864] hover:bg-[#A47864]/10'
                }`}
                style={{ fontFamily: 'Roboto' }}
              >
                {industry.title}
              </button>
            ))}
          </div>

          <div className="bg-[#F5EBDD] rounded-2xl p-8 lg:p-12 min-h-[300px] flex items-center justify-center">
            <div className="text-center max-w-4xl">
              <h3 
                className="text-3xl lg:text-4xl font-bold text-[#333333] mb-6"
                style={{ fontFamily: 'Poppins' }}
              >
                {industries[activeTab].title}
              </h3>
              <p 
                className="text-xl text-[#666666] leading-relaxed"
                style={{ fontFamily: 'Inter' }}
              >
                {industries[activeTab].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;