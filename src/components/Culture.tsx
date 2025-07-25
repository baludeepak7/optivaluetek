import React from 'react';
import { MapPin, Clock, Users, Heart } from 'lucide-react';

const Culture = () => {
  const handleApplyClick = (jobTitle: string) => {
    const subject = `Application for ${jobTitle} Position`;
    const body = `Dear OptiValueTek Team,\n\nI am interested in applying for the ${jobTitle} position. Please find my details below:\n\nName: \nExperience: \nLocation: \nContact: \n\nI look forward to hearing from you.\n\nBest regards,`;
    
    window.open(`mailto:contact@optivaluetek.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
  };

  const handleViewAllRoles = () => {
    const subject = 'Inquiry about Available Positions';
    const body = 'Dear OptiValueTek Team,\n\nI would like to learn more about all available positions at your company. Please share the complete list of current openings.\n\nThank you.';
    
    window.open(`mailto:contact@optivaluetek.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
  };

  const values = ['Innovation', 'Ownership', 'Empathy', 'Quality'];
  const perks = ['Remote-first', 'Health coverage', 'Training budget', 'Offsites'];
  
  const careers = [
    {
      title: "Java Spring Boot Microservices Developer",
      location: "Remote",
      experience: "5+ years",
      type: "Full-time"
    },
    {
      title: "BSS/OSS Telecom Consultant",
      location: "Bangalore",
      experience: "6+ years",
      type: "Full-time"
    },
    {
      title: "API Management Specialist (APIGEE/3Scale)",
      location: "Remote",
      experience: "4+ years",
      type: "Full-time"
    },
    {
      title: "DevOps Engineer (Kubernetes/OpenShift)",
      location: "Remote/Hybrid",
      experience: "4+ years",
      type: "Full-time"
    },
    {
      title: "Oracle Integration Cloud Consultant",
      location: "India/Remote",
      experience: "5+ years",
      type: "Full-time"
    },
    {
      title: "Data Science/AI-ML Engineer",
      location: "Global",
      experience: "3+ years",
      type: "Full-time"
    }
  ];

  return (
    <section id="careers" className="py-20 bg-[#F5EBDD]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl lg:text-5xl font-bold text-[#333333] mb-6"
            style={{ fontFamily: 'Poppins' }}
          >
            Culture & Careers
          </h2>
          <p 
            className="text-2xl text-[#A47864] font-semibold mb-4"
            style={{ fontFamily: 'Roboto' }}
          >
            "Build with empathy, engineer with excellence."
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {/* Values & Perks */}
          <div className="space-y-8">
            <div>
              <h3 
                className="text-2xl font-bold text-[#333333] mb-6"
                style={{ fontFamily: 'Poppins' }}
              >
                Our Values
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="w-12 h-12 bg-[#A47864]/10 rounded-lg flex items-center justify-center mb-3">
                      <Heart size={24} className="text-[#A47864]" />
                    </div>
                    <h4 
                      className="font-semibold text-[#333333]"
                      style={{ fontFamily: 'Roboto' }}
                    >
                      {value}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 
                className="text-2xl font-bold text-[#333333] mb-6"
                style={{ fontFamily: 'Poppins' }}
              >
                Perks & Benefits
              </h3>
              <div className="space-y-3">
                {perks.map((perk, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md"
                  >
                    <div className="w-8 h-8 bg-[#D36A47]/10 rounded-lg flex items-center justify-center">
                      <Users size={16} className="text-[#D36A47]" />
                    </div>
                    <span 
                      className="font-medium text-[#333333]"
                      style={{ fontFamily: 'Inter' }}
                    >
                      {perk}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Open Positions */}
          <div>
            <h3 
              className="text-2xl font-bold text-[#333333] mb-6"
              style={{ fontFamily: 'Poppins' }}
            >
              Open Positions
            </h3>
            <div className="space-y-4">
              {careers.map((job, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <h4 
                    className="text-xl font-bold text-[#333333] mb-3"
                    style={{ fontFamily: 'Poppins' }}
                  >
                    {job.title}
                  </h4>
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-[#666666]">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      {job.experience}
                    </div>
                    <span className="bg-[#F5EBDD] text-[#A47864] px-3 py-1 rounded-full">
                      {job.type}
                    </span>
                  </div>
                  <button 
                    onClick={() => handleApplyClick(job.title)}
                    className="text-[#D36A47] font-semibold hover:text-[#B85A3D] transition-colors duration-300"
                  >
                    Apply Now →
                  </button>
                </div>
              ))}
            </div>
            
            <button 
              onClick={handleViewAllRoles}
              className="mt-6 bg-[#A47864] text-white px-8 py-3 rounded-lg hover:bg-[#8B6551] transition-colors duration-300 font-semibold"
            >
              View All Roles
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;