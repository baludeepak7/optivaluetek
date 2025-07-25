import React from 'react';
import { Target, Users, Award, TrendingUp, MapPin, Calendar } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Target className="text-[#1e40af]" size={24} />,
      title: "Innovation",
      description: "Cutting-edge solutions that drive digital transformation"
    },
    {
      icon: <Users className="text-[#3b82f6]" size={24} />,
      title: "Collaboration", 
      description: "Partnership-focused approach with transparent communication"
    },
    {
      icon: <Award className="text-[#dc2626]" size={24} />,
      title: "Quality",
      description: "Excellence in every project with rigorous testing standards"
    },
    {
      icon: <TrendingUp className="text-[#059669]" size={24} />,
      title: "Growth",
      description: "Continuous learning and improvement for sustainable success"
    }
  ];

  const milestones = [
    { year: "2011", event: "Founded in Bengaluru", icon: <Calendar className="text-[#1e40af]" size={20} /> },
    { year: "2015", event: "Expanded to Texas, USA", icon: <MapPin className="text-[#3b82f6]" size={20} /> },
    { year: "2018", event: "Opened NSW, Australia office", icon: <MapPin className="text-[#dc2626]" size={20} /> },
    { year: "2025", event: "500+ employees globally", icon: <Users className="text-[#059669]" size={20} /> }
  ];

  return (
    <section id="about-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#1e40af]/10 rounded-full text-[#1e40af] text-sm font-medium mb-6">
            About OptiValueTek
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1a202c] mb-6">
            Transforming Enterprises Since 2011
          </h2>
          <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
            We partner with enterprises to modernize critical systems through API‑first microservices, 
            cloud transformation, DevOps/SRE practices, and advanced data science.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-[#1a202c] mb-6">Our Mission</h3>
              <div className="space-y-4 text-lg text-[#4a5568] leading-relaxed">
                <p>
                  Founded in 2011, OptiValueTek has grown from a vision to become a trusted 
                  data-driven enterprise modernization partner. With offices in Bengaluru, Texas, 
                  and NSW, we serve clients globally with localized expertise.
                </p>
                <p>
                  Our team of 201-500 skilled professionals specializes in transforming legacy 
                  systems into modern, scalable, and efficient digital platforms that drive 
                  business value and competitive advantage.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h4 className="text-xl font-bold text-[#1a202c] mb-6">Our Journey</h4>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-sm">
                      {milestone.icon}
                    </div>
                    <div>
                      <div className="font-bold text-[#1e40af]">{milestone.year}</div>
                      <div className="text-[#4a5568]">{milestone.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Team collaboration"
              className="w-full rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0052cc]/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Values Grid */}
        <div>
          <h3 className="text-3xl font-bold text-[#1a202c] text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl border border-slate-200 hover:border-[#1e40af]/20 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-50 rounded-lg mb-4 group-hover:bg-[#1e40af]/10 transition-colors">
                  {value.icon}
                </div>
                <h4 className="text-lg font-bold text-[#1a202c] mb-3">{value.title}</h4>
                <p className="text-[#4a5568] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-[#0052cc] to-[#00a3e0] rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Enterprise?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join 50+ enterprise clients who trust OptiValueTek for their digital transformation journey
          </p>
          <button className="bg-[#dc2626] hover:bg-[#b91c1c] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;