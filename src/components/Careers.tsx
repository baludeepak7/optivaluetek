import React from 'react';
import { Heart, Users, Award, TrendingUp, MapPin, Clock, BookOpen, ArrowRight, Briefcase } from 'lucide-react';

const Careers: React.FC = () => {
  const values = [
    {
      icon: <Heart className="text-[#dc2626]" size={24} />,
      title: "Innovation",
      description: "Cutting-edge solutions that drive digital transformation"
    },
    {
      icon: <Users className="text-[#3b82f6]" size={24} />,
      title: "Collaboration",
      description: "Partnership-focused approach with transparent communication"
    },
    {
      icon: <Award className="text-[#1e40af]" size={24} />,
      title: "Quality",
      description: "Excellence in every project with rigorous testing standards"
    },
    {
      icon: <TrendingUp className="text-[#059669]" size={24} />,
      title: "Growth",
      description: "Continuous learning and improvement for sustainable success"
    }
  ];

  const perks = [
    {
      icon: <Heart className="text-[#dc2626]" size={20} />,
      title: "Health Insurance",
      description: "Comprehensive medical coverage"
    },
    {
      icon: <Clock className="text-[#3b82f6]" size={20} />,
      title: "Flexible Hours",
      description: "Work-life balance options"
    },
    {
      icon: <BookOpen className="text-[#ea580c]" size={20} />,
      title: "Training Stipend",
      description: "Annual learning allowance"
    },
    {
      icon: <MapPin className="text-[#1e40af]" size={20} />,
      title: "Remote Friendly",
      description: "Hybrid work options"
    }
  ];

  const openRoles = [
    {
      title: "Angular Developer",
      experience: "8-10 years",
      location: "Bengaluru / Remote",
      type: "Full-time",
      department: "Frontend Development",
      description: "Lead frontend development with Angular, TypeScript, and modern web technologies."
    },
    {
      title: "UI/UX Engineer",
      experience: "5-7 years",
      location: "Bengaluru / Hybrid",
      type: "Full-time",
      department: "Design",
      description: "Design and implement user-centric interfaces for enterprise applications."
    },
    {
      title: "DevOps Engineer",
      experience: "6-8 years",
      location: "Multiple Locations",
      type: "Full-time",
      department: "Infrastructure",
      description: "Build and maintain CI/CD pipelines, cloud infrastructure, and automation tools."
    },
    {
      title: "ML Engineer",
      experience: "4-6 years",
      location: "Bengaluru / Remote",
      type: "Full-time",
      department: "Data Science",
      description: "Develop and deploy machine learning models for production environments."
    }
  ];

  return (
    <section id="careers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#1e40af]/10 rounded-full text-[#1e40af] text-sm font-medium mb-6">
            <Briefcase size={16} className="mr-2" />
            Careers at OptiValueTek
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1a202c] mb-6">
            Join Our Team of Innovators
          </h2>
          <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
            Be part of a passionate team that's shaping the future of enterprise technology 
            and making a real impact on digital transformation.
          </p>
        </div>

        {/* Culture Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-[#1a202c] mb-6">Our Culture</h3>
              <div className="space-y-4 text-lg text-[#4a5568] leading-relaxed">
                <p>
                  Remote-friendly environment with our primary hub in Bengaluru, fostering 
                  collaboration across global teams while maintaining work-life balance.
                </p>
                <p>
                  Regular team events, hackathons, and innovation sessions that encourage 
                  creative problem-solving and continuous learning.
                </p>
              </div>
            </div>

            {/* Perks Grid */}
            <div>
              <h4 className="text-xl font-bold text-[#1a202c] mb-6">Employee Benefits</h4>
              <div className="grid grid-cols-2 gap-4">
                {perks.map((perk, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        {perk.icon}
                      </div>
                      <div>
                        <h5 className="font-semibold text-[#1a202c] mb-1">{perk.title}</h5>
                        <p className="text-sm text-[#4a5568]">{perk.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Team collaboration"
              className="w-full rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0052cc]/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-[#1a202c] text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-[#1e40af]/20 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-50 rounded-lg mb-4">
                  {value.icon}
                </div>
                <h4 className="text-lg font-bold text-[#1a202c] mb-3">{value.title}</h4>
                <p className="text-[#4a5568] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <h3 className="text-3xl font-bold text-[#1a202c] mb-2">Open Positions</h3>
              <p className="text-[#4a5568]">Join our growing team of technology experts</p>
            </div>
            <button className="bg-[#1e40af] hover:bg-[#1d4ed8] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center gap-2">
              View All Careers
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {openRoles.map((role, index) => (
              <div key={index} className="border border-slate-200 rounded-xl p-6 hover:border-[#1e40af]/20 hover:shadow-sm transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-[#1a202c] mb-1">{role.title}</h4>
                    <div className="text-sm text-[#4a5568]">{role.department}</div>
                  </div>
                  <span className="bg-[#1e40af]/10 text-[#1e40af] px-3 py-1 rounded-full text-sm font-medium">
                    {role.type}
                  </span>
                </div>
                
                <div className="space-y-2 mb-4 text-sm text-[#4a5568]">
                  <div className="flex items-center gap-2">
                    <TrendingUp size={16} />
                    <span>{role.experience}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{role.location}</span>
                  </div>
                </div>
                
                <p className="text-[#4a5568] mb-4 leading-relaxed">{role.description}</p>
                
                <button className="text-[#0052cc] hover:text-[#f5a623] font-semibold transition-colors duration-200 flex items-center gap-2 group">
                  Apply Now
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-[#0052cc] to-[#00a3e0] rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Shape the Future?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our team of innovators and make a real impact in enterprise technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#dc2626] hover:bg-[#b91c1c] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Browse All Positions
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#1e40af] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Learn About Our Culture
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;