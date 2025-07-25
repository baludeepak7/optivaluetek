import React from 'react';
import { Database, Globe, Cloud, Settings, Brain, Smartphone } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      title: "Data Engineering & Analytics",
      icon: Database,
      description: "Ingest, transform and activate data with real-time pipelines."
    },
    {
      title: "API Management & Microservices",
      icon: Globe,
      description: "Design and govern robust API ecosystems and service meshes."
    },
    {
      title: "Cloud-Native Platforms",
      icon: Cloud,
      description: "Deploy scalable infrastructure across AWS, Azure, GCP."
    },
    {
      title: "DevOps & SRE",
      icon: Settings,
      description: "CI/CD pipelines, observability, and SLOs that scale."
    },
    {
      title: "MLOps & AI Engineering",
      icon: Brain,
      description: "Automate ML lifecycle—from model training to monitoring."
    },
    {
      title: "Web & Mobile Development",
      icon: Smartphone,
      description: "Cross-platform apps built with speed and scalability."
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-[#F5EBDD]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl lg:text-5xl font-bold text-[#333333] mb-6"
            style={{ fontFamily: 'Poppins' }}
          >
            Our Solutions
          </h2>
          <p 
            className="text-xl text-[#666666] max-w-3xl mx-auto"
            style={{ fontFamily: 'Roboto' }}
          >
            End-to-end digital transformation services that modernize your enterprise infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-16 h-16 bg-[#A47864]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#A47864] transition-colors duration-300">
                  <IconComponent 
                    size={32} 
                    className="text-[#A47864] group-hover:text-white transition-colors duration-300" 
                  />
                </div>
                <h3 
                  className="text-2xl font-bold text-[#333333] mb-4"
                  style={{ fontFamily: 'Poppins' }}
                >
                  {solution.title}
                </h3>
                <p 
                  className="text-[#666666] leading-relaxed"
                  style={{ fontFamily: 'Inter' }}
                >
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;