import React from 'react';
import { ArrowLeft, Building2, Globe, Users, Award, TrendingUp, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const CompanyOverview = () => {
  const highlights = [
    {
      title: "Founded",
      value: "2011",
      icon: Calendar,
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      title: "Global Projects",
      value: "500+",
      icon: TrendingUp,
      gradient: "from-green-600 to-teal-500"
    },
    {
      title: "Countries Served",
      value: "15+",
      icon: Globe,
      gradient: "from-purple-600 to-pink-500"
    },
    {
      title: "Technology Experts",
      value: "200+",
      icon: Users,
      gradient: "from-orange-600 to-red-500"
    }
  ];

  const offices = [
    {
      country: "India",
      city: "New Delhi",
      address: "607, Surya Kiran Building, KG Marg, Connaught Place, New Delhi - 110001",
      flag: "🇮🇳",
      type: "Headquarters"
    },
    {
      country: "USA",
      city: "Operations",
      address: "Global delivery and client engagement",
      flag: "🇺🇸",
      type: "Operations"
    },
    {
      country: "Australia",
      city: "Operations",
      address: "Regional delivery and partnerships",
      flag: "🇦🇺",
      type: "Operations"
    }
  ];

  const deliveryModel = [
    {
      title: "Onsite-Offshore Model",
      description: "Optimized for cost efficiency and global scalability with seamless collaboration",
      benefits: ["Cost optimization", "24/7 delivery", "Global talent access", "Risk mitigation"]
    },
    {
      title: "Automation Frameworks",
      description: "Accelerated delivery across all phases of the software development lifecycle",
      benefits: ["Faster time-to-market", "Consistent quality", "Reduced manual effort", "Scalable processes"]
    },
    {
      title: "Lean Teams",
      description: "Highly skilled consultants ensuring quality with minimal overhead",
      benefits: ["Expert knowledge", "Agile delivery", "Cost efficiency", "Direct communication"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-20">
      {/* Header */}
      <div className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-2 hover:bg-gray-700/50 rounded-xl transition-colors duration-300">
              <ArrowLeft size={24} className="text-white" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Company Overview
                </span>
              </h1>
              <p className="text-gray-300">Global technology consulting firm since 2011</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-6">
            About OptiValue Tek
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
              Digital Innovation Leaders
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            OptiValue Tek Consulting Limited is a global technology consulting firm, founded in 2011 and headquartered in India, with offices in the USA and Australia. We specialize in digital transformation, enterprise modernization, and cloud adoption.
          </p>
        </div>

        {/* Company Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div
                key={index}
                className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
                
                <div className="relative text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${highlight.gradient} flex items-center justify-center shadow-lg mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <div className={`text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${highlight.gradient}`}>
                    {highlight.value}
                  </div>
                  <div className="text-lg text-gray-300 font-medium">
                    {highlight.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12 mb-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <Award size={32} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Our Mission
              </span>
            </h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our onsite–offshore delivery model, combined with automation frameworks and lean teams, ensures cost efficiency, quick turnaround, and measurable business outcomes. Since inception, we have successfully delivered multi-million-dollar global projects with enviable professionalism.
            </p>
          </div>
        </div>

        {/* Global Offices */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
              Global Presence
            </span>
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">{office.flag}</div>
                  <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {office.country}
                  </h4>
                  <div className="inline-block px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full border border-blue-400/30 mb-4">
                    {office.type}
                  </div>
                  <p className="text-gray-300 mb-4 font-semibold">{office.city}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{office.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Model */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Our Delivery Excellence
            </span>
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {deliveryModel.map((model, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Building2 size={24} className="text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {model.title}
                </h4>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {model.description}
                </p>
                <div className="space-y-2">
                  {model.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Delivery Regions */}
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                Project Delivery Regions
              </span>
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We deliver high-quality solutions across multiple continents with local expertise and global standards
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['🇲🇾 Malaysia', '🇰🇷 South Korea', '🇪🇺 Europe', '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Middle East', '🇬🇧 UK', '🇺🇸 US', '🇮🇳 India', '🇦🇺 ANZ'].map((region, index) => (
                <span key={index} className="px-6 py-3 bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50 hover:bg-gray-600/50 hover:border-gray-500/50 transition-all duration-300 font-medium">
                  {region}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;