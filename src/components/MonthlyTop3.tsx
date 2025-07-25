import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Trophy, BookOpen, Users, Calendar } from 'lucide-react';

const MonthlyTop3: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const tabs = [
    { 
      title: "Projects", 
      icon: <Trophy size={20} />,
      color: "text-[#1e40af]",
      items: [
        {
          title: "Global Banking Platform Migration",
          description: "Successfully migrated legacy banking system to cloud-native architecture with zero downtime",
          client: "Major International Bank",
          impact: "40% performance improvement, 60% cost reduction",
          date: "January 2025",
          status: "Completed"
        },
        {
          title: "Telecom 5G Network Optimization",
          description: "Implemented AI-driven network optimization for 5G infrastructure across multiple regions",
          client: "Leading Telecom Provider",
          impact: "25% network efficiency increase, improved customer satisfaction",
          date: "January 2025",
          status: "Completed"
        },
        {
          title: "Healthcare Data Analytics Platform",
          description: "Built HIPAA-compliant analytics platform for patient data insights and operational efficiency",
          client: "Regional Healthcare System",
          impact: "Improved patient outcomes, streamlined operations",
          date: "January 2025",
          status: "Completed"
        }
      ]
    },
    { 
      title: "Insights", 
      icon: <BookOpen size={20} />,
      color: "text-[#3b82f6]",
      items: [
        {
          title: "The Future of API-First Architecture",
          description: "Comprehensive guide to building scalable microservices ecosystems for enterprise applications",
          author: "Tech Leadership Team",
          readTime: "8 min read",
          date: "January 15, 2025",
          category: "Architecture"
        },
        {
          title: "MLOps Best Practices for Enterprise",
          description: "How to implement production-ready machine learning operations that scale with business needs",
          author: "Data Science Team",
          readTime: "12 min read",
          date: "January 10, 2025",
          category: "Data Science"
        },
        {
          title: "Cloud Migration Success Stories",
          description: "Lessons learned from our recent enterprise cloud transformations and key success factors",
          author: "Cloud Solutions Team",
          readTime: "6 min read",
          date: "January 5, 2025",
          category: "Cloud"
        }
      ]
    },
    { 
      title: "Team Spotlights", 
      icon: <Users size={20} />,
      color: "text-[#dc2626]",
      items: [
        {
          title: "Priya Sharma - Lead Data Architect",
          description: "Recognized for innovative data pipeline design that reduced processing time by 50% for major client",
          achievement: "AWS Certified Solutions Architect Professional",
          team: "Data Engineering",
          date: "January 2025",
          experience: "8+ years"
        },
        {
          title: "Rajesh Kumar - Senior DevOps Engineer",
          description: "Led the automation initiative that streamlined deployment processes across multiple client projects",
          achievement: "Kubernetes Certified Administrator",
          team: "DevOps & SRE",
          date: "January 2025",
          experience: "6+ years"
        },
        {
          title: "Sarah Chen - ML Engineering Manager",
          description: "Spearheaded the development of our predictive analytics modules used by 15+ enterprise clients",
          achievement: "Published research in IEEE Conference",
          team: "Data Science",
          date: "January 2025",
          experience: "10+ years"
        }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % tabs[activeTab].items.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [activeTab, tabs]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % tabs[activeTab].items.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + tabs[activeTab].items.length) % tabs[activeTab].items.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#1e40af]/10 rounded-full text-[#1e40af] text-sm font-medium mb-6">
            <Calendar size={16} className="mr-2" />
            Monthly Highlights
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1a202c] mb-6">
            Top 3 This Month
          </h2>
          <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
            Stay updated with our latest achievements, insights, and team accomplishments
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-xl p-1 flex space-x-1">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveTab(index);
                  setCurrentSlide(0);
                }}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-white text-[#1e40af] shadow-sm'
                    : 'text-[#4a5568] hover:text-[#0052cc]'
                }`}
              >
                <span className={activeTab === index ? tab.color : 'text-[#4a5568]'}>
                  {tab.icon}
                </span>
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-[#1a202c]">
                Top 3 {tabs[activeTab].title}
              </h3>
              <div className="flex space-x-2">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-lg border border-slate-200 hover:border-[#1e40af] hover:text-[#1e40af] transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-lg border border-slate-200 hover:border-[#1e40af] hover:text-[#1e40af] transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="min-h-[300px]">
              <div className="flex justify-between items-start mb-6">
                <h4 className="text-xl font-bold text-[#1a202c] max-w-2xl">
                  {tabs[activeTab].items[currentSlide].title}
                </h4>
                <span className="text-sm text-[#4a5568] bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap ml-4">
                  {tabs[activeTab].items[currentSlide].date}
                </span>
              </div>

              <p className="text-[#4a5568] mb-8 leading-relaxed text-lg">
                {tabs[activeTab].items[currentSlide].description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeTab === 0 && (
                  <>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-sm font-semibold text-[#1e40af] mb-1">Client</div>
                      <div className="text-[#1a202c]">{tabs[activeTab].items[currentSlide].client}</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-sm font-semibold text-[#1e40af] mb-1">Impact</div>
                      <div className="text-[#1a202c]">{tabs[activeTab].items[currentSlide].impact}</div>
                    </div>
                  </>
                )}
                {activeTab === 1 && (
                  <>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-sm font-semibold text-[#1e40af] mb-1">Author</div>
                      <div className="text-[#1a202c]">{tabs[activeTab].items[currentSlide].author}</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-sm font-semibold text-[#1e40af] mb-1">Read Time</div>
                      <div className="text-[#1a202c]">{tabs[activeTab].items[currentSlide].readTime}</div>
                    </div>
                  </>
                )}
                {activeTab === 2 && (
                  <>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-sm font-semibold text-[#1e40af] mb-1">Team</div>
                      <div className="text-[#1a202c]">{tabs[activeTab].items[currentSlide].team}</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-sm font-semibold text-[#1e40af] mb-1">Achievement</div>
                      <div className="text-[#1a202c]">{tabs[activeTab].items[currentSlide].achievement}</div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {tabs[activeTab].items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-[#1e40af] w-8' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonthlyTop3;