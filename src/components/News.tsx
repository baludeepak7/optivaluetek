import React, { useState, useEffect } from 'react';
import { FileText, Calendar, ExternalLink, Download, Twitter, Linkedin, Tag } from 'lucide-react';
import { supabase, NewsItem } from '../lib/supabaseClient';

const News = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .eq('status', 'published')
        .order('published_date', { ascending: false });

      if (error) throw error;
      setNewsItems(data || []);
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredNews = newsItems.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
    const typeMatch = selectedType === 'all' || item.type === selectedType;
    return categoryMatch && typeMatch;
  });

  const pressReleases = filteredNews.filter(item => item.type === 'press_release');
  const socialMediaUpdates = filteredNews.filter(item => item.type === 'social_media');
  const otherNews = filteredNews.filter(item => item.type !== 'press_release' && item.type !== 'social_media');

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'press_release':
        return <FileText size={20} />;
      case 'social_media':
        return <Twitter size={20} />;
      case 'blog':
        return <FileText size={20} />;
      default:
        return <FileText size={20} />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'press_release':
        return 'from-blue-600 to-cyan-500';
      case 'social_media':
        return 'from-green-600 to-teal-500';
      case 'blog':
        return 'from-orange-600 to-red-500';
      default:
        return 'from-gray-600 to-gray-500';
    }
  };

  const NewsCard = ({ item }: { item: NewsItem }) => (
    <div className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl">
      <div className={`absolute inset-0 bg-gradient-to-br ${getTypeColor(item.type)} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

      <div className="relative p-8">
        <div className="flex items-start justify-between mb-6">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${getTypeColor(item.type)} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            {getTypeIcon(item.type)}
          </div>

          {item.is_featured && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-600/20 text-yellow-300 border border-yellow-400/30">
              Featured
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 mb-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/20 text-blue-300 border border-blue-400/30`}>
            {item.type.replace('_', ' ').charAt(0).toUpperCase() + item.type.replace('_', ' ').slice(1)}
          </span>
          <span className="text-xs text-gray-400 flex items-center gap-1">
            <Calendar size={14} />
            {formatDate(item.published_date)}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
          {item.title}
        </h3>

        <p className="text-gray-300 mb-6 leading-relaxed">
          {item.summary}
        </p>

        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {item.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600/50 flex items-center gap-1"
              >
                <Tag size={12} />
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-3">
          {item.pdf_url && (
            <a
              href={item.pdf_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 text-blue-300 rounded-lg hover:bg-blue-600/30 transition-all duration-300 text-sm font-semibold border border-blue-400/30"
            >
              <Download size={16} />
              Download PDF
            </a>
          )}

          {item.external_url && (
            <a
              href={item.external_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-green-600/20 text-green-300 rounded-lg hover:bg-green-600/30 transition-all duration-300 text-sm font-semibold border border-green-400/30"
            >
              {item.external_url.includes('linkedin') ? <Linkedin size={16} /> : <ExternalLink size={16} />}
              View Post
            </a>
          )}
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="container mx-auto px-4 text-center">
          <div className="text-white text-xl">Loading news...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30% 70%, #3b82f6 0%, transparent 50%),
                           radial-gradient(circle at 70% 30%, #8b5cf6 0%, transparent 50%)`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-600/20 backdrop-blur-sm border border-green-400/30 rounded-full text-green-300 text-sm font-medium mb-6">
            In the News
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400">
              Latest Updates
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay informed with our latest press releases, announcements, and social media updates
          </p>
        </div>

        {pressReleases.length > 0 && (
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full" />
              Press Releases
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pressReleases.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}

        {socialMediaUpdates.length > 0 && (
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-green-400 to-teal-400 rounded-full" />
              Social Media Updates
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {socialMediaUpdates.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}

        {otherNews.length > 0 && (
          <div>
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-orange-400 to-red-400 rounded-full" />
              Company News
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherNews.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}

        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No news items available at this time.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default News;
