import React from 'react';
import { Calendar, User, Clock, ArrowRight, BookOpen, Tag } from 'lucide-react';

const Insights: React.FC = () => {
  const articles = [
    {
      title: "The Future of API-First Architecture in Enterprise",
      excerpt: "Exploring how API-first approaches are revolutionizing enterprise software development and integration strategies for modern businesses.",
      author: "Tech Leadership Team",
      date: "January 15, 2025",
      readTime: "8 min read",
      category: "Architecture",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true
    },
    {
      title: "MLOps Best Practices for Production Deployment",
      excerpt: "Comprehensive guide to implementing machine learning operations that scale with your business requirements and deliver consistent results.",
      author: "Data Science Team",
      date: "January 10, 2025",
      readTime: "12 min read",
      category: "Data Science",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false
    },
    {
      title: "Cloud Migration Success Stories: Lessons Learned",
      excerpt: "Real-world insights from our recent enterprise cloud transformations and the strategies that delivered measurable results.",
      author: "Cloud Solutions Team",
      date: "January 5, 2025",
      readTime: "6 min read",
      category: "Cloud",
      image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false
    }
  ];

  const categoryColors = {
    "Architecture": "bg-[#1e40af] text-white",
    "Data Science": "bg-[#059669] text-white",
    "Cloud": "bg-[#dc2626] text-white"
  };

  const categories = ["All", "Architecture", "Data Science", "Cloud", "DevOps", "Case Studies"];

  return (
    <section id="insights" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#1e40af]/10 rounded-full text-[#1e40af] text-sm font-medium mb-6">
            <BookOpen size={16} className="mr-2" />
            🔥 Trending Insights & Resources
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1a202c] mb-6">
            What's Trending Now
          </h2>
          <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
            Discover the most popular insights, trending topics, and cutting-edge solutions 
            that are shaping the future of enterprise technology.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                index === 0 
                  ? 'bg-[#1e40af] text-white' 
                  : 'bg-slate-100 text-[#64748b] hover:bg-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#dc2626] text-white px-3 py-1 rounded-full text-sm font-medium">
                    🔥 Trending
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <Tag size={16} className="text-[#1e40af]" />
                  <span className="text-sm font-medium text-[#1e40af]">{articles[0].category}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-[#1a202c] mb-4">
                  {articles[0].title}
                </h3>
                <p className="text-[#4a5568] leading-relaxed mb-6 text-lg">
                  {articles[0].excerpt}
                </p>
                <div className="flex items-center text-sm text-[#4a5568] mb-6 space-x-4">
                  <div className="flex items-center gap-1">
                    <User size={16} />
                    <span>{articles[0].author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{articles[0].date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{articles[0].readTime}</span>
                  </div>
                </div>
                <button className="text-[#0052cc] hover:text-[#f5a623] font-semibold transition-colors duration-200 flex items-center gap-2 group">
                  Read Full Article
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {articles.slice(1).map((article, index) => (
            <article 
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#0052cc]/20 transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[article.category as keyof typeof categoryColors]}`}>
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1a202c] mb-3 group-hover:text-[#0052cc] transition-colors duration-200">
                  {article.title}
                </h3>
                
                <p className="text-[#4a5568] mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex items-center text-sm text-[#4a5568] mb-4 space-x-4">
                  <div className="flex items-center gap-1">
                    <User size={16} />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <button className="text-[#0052cc] hover:text-[#f5a623] font-semibold transition-colors duration-200 flex items-center gap-2 group">
                  Read More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-12 border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-[#1a202c] mb-4">
              🚀 Get Trending Insights First
            </h3>
            <p className="text-lg text-[#4a5568] max-w-2xl mx-auto">
              Be the first to know about trending topics, breakthrough insights, and exclusive content
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e40af] focus:border-transparent"
              />
              <button className="bg-[#1e40af] hover:bg-[#1d4ed8] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
            <p className="text-sm text-[#4a5568] mt-3 text-center">
              No spam, unsubscribe anytime. Read our privacy policy.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-[#1e40af] hover:bg-[#1d4ed8] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
            Read All Insights
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Insights;