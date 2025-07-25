import React from 'react';
import { Star, TrendingUp, Users, Globe, Award } from 'lucide-react';

const Testimonials = () => {
  const stats = [
    { 
      label: "Global Projects", 
      value: "500+", 
      icon: TrendingUp,
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      label: "Countries Served", 
      value: "15+", 
      icon: Globe,
      gradient: "from-green-500 to-teal-500"
    },
    { 
      label: "Technology Experts", 
      value: "200+", 
      icon: Users,
      gradient: "from-purple-500 to-pink-500"
    },
    { 
      label: "Years of Excellence", 
      value: "10+", 
      icon: Award,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const clients = [
    { name: 'Vodafone', industry: 'Telecom' },
    { name: 'Standard Chartered', industry: 'Banking' },
    { name: 'MTN', industry: 'Telecom' },
    { name: 'Altech', industry: 'Technology' },
    { name: 'Aditya Birla', industry: 'Conglomerate' },
    { name: 'Dalko Logistics', industry: 'Logistics' }
  ];
  
  const testimonials = [
    {
      quote: "OptiValue Tek's transformation not only addressed our immediate challenges but set us up for future growth with scalable microservices architecture.",
      name: "CTO, Leading Telecom Provider",
      company: "Global Telecom Operator",
      rating: 5,
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      quote: "Our teams now operate with clarity, speed, and precision — thanks to a data-first CRM strategy and automated sales pipelines.",
      name: "Sales Operations Director, Major Bank",
      company: "International Banking Group",
      rating: 5,
      gradient: "from-green-600 to-teal-500"
    },
    {
      quote: "This API gateway empowered our internal teams and enhanced partner integration while saving significant licensing costs.",
      name: "Infrastructure Team Lead, Telecom Firm",
      company: "Regional Telecom Provider",
      rating: 5,
      gradient: "from-purple-600 to-pink-500"
    },
    {
      quote: "The BSS/OSS transformation delivered by OptiValueTek has revolutionized our billing and customer management processes.",
      name: "Digital Transformation Head",
      company: "Tier-1 Telecom Operator",
      rating: 5,
      gradient: "from-orange-600 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, #3b82f6 0%, transparent 50%), 
                           radial-gradient(circle at 80% 20%, #8b5cf6 0%, transparent 50%),
                           radial-gradient(circle at 40% 40%, #06b6d4 0%, transparent 50%)`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-600/20 backdrop-blur-sm border border-green-400/30 rounded-full text-green-300 text-sm font-medium mb-6">
            Our Impact
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400">
              Global Excellence
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
                
                <div className="relative text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <div className={`text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient}`}>
                    {stat.value}
                  </div>
                  <div className="text-lg text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Client Logos */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-white mb-8">
            Trusted by Industry Leaders
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-center">
                  <div className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {client.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {client.industry}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
              
              <div className="relative">
                {/* Rating Stars */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className={`text-transparent bg-clip-text bg-gradient-to-r ${testimonial.gradient} fill-current`} />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-xl text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                
                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Presence */}
        <div className="text-center mt-16">
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Global Delivery Excellence</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              With offices in India, USA, Australia, and UAE, we deliver projects across Malaysia, South Korea, Europe, Middle East, UK, and ANZ regions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['🇮🇳 India', '🇺🇸 USA', '🇦🇺 Australia', '🇦🇪 UAE', '🇲🇾 Malaysia', '🇰🇷 South Korea', '🇪🇺 Europe', '🇬🇧 UK'].map((region, index) => (
                <span key={index} className="px-4 py-2 bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50 hover:bg-gray-600/50 transition-colors duration-300">
                  {region}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;