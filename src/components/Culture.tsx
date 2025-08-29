import React, { useState } from 'react';
import { MapPin, Clock, Users, Heart, X, Send, ChevronDown, ChevronUp, Code, Database, Cloud, Cpu, Globe, Smartphone, Settings, Brain, ArrowRight, TrendingUp, Building2, Calendar, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import jobsData from '../config/jobs.json';

const Culture = () => {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    location: '',
    resume: '',
    coverLetter: '',
    gdprConsent: false
  });

  const handleApplyClick = (jobId: string, jobTitle: string) => {
    setSelectedJob(jobTitle);
    setShowApplicationForm(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Application for ${selectedJob} Position`;
    const body = `Dear OptiValueTek Team,

I am applying for the ${selectedJob} position. Please find my details below:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Experience: ${formData.experience}
Location: ${formData.location}

Cover Letter:
${formData.coverLetter}

Resume/Portfolio: ${formData.resume}

Best regards,
${formData.name}`;
    
    window.open(`mailto:contact@optivaluetek.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      experience: '',
      location: '',
      resume: '',
      coverLetter: '',
      gdprConsent: false
    });
    setShowApplicationForm(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  // Get icon component by name
  const getIconComponent = (iconName: string) => {
    const icons: { [key: string]: any } = {
      Code,
      Database,
      Globe,
      Brain,
      Settings,
      Smartphone,
      Building2
    };
    return icons[iconName] || Building2;
  };

  const values = [
    { name: 'Innovation', icon: Brain, description: 'Pushing boundaries with cutting-edge solutions' },
    { name: 'Ownership', icon: Users, description: 'Taking responsibility for exceptional outcomes' },
    { name: 'Empathy', icon: Heart, description: 'Understanding and caring for our clients and team' },
    { name: 'Quality', icon: Settings, description: 'Delivering excellence in every project' }
  ];

  const perks = [
    { name: 'Remote-first Culture', icon: Globe, description: 'Work from anywhere with flexible hours' },
    { name: 'Health & Wellness', icon: Heart, description: 'Comprehensive health coverage and wellness programs' },
    { name: 'Learning Budget', icon: Brain, description: '$2000 annual budget for courses and conferences' },
    { name: 'Team Offsites', icon: Users, description: 'Quarterly team building and company retreats' }
  ];
  
  const featuredJobs = jobsData.featuredJobs;
  const allJobs = jobsData.allJobs;

  return (
    <section id="careers" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%)`
        }} />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-600/20 backdrop-blur-sm border border-purple-400/30 rounded-full text-purple-300 text-sm font-medium mb-6">
            Join Our Team
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              Culture & Careers
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            "Build with empathy, engineer with excellence." Join our global team of technology innovators.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-16">
          {/* Values & Perks */}
          <div className="space-y-8">
            {/* Values */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Our Values
                </span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div
                      key={index}
                      className="group relative bg-gray-700/30 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-6 hover:border-gray-500/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                        {value.name}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Perks */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
                  Perks & Benefits
                </span>
              </h3>
              <div className="space-y-4">
                {perks.map((perk, index) => {
                  const IconComponent = perk.icon;
                  return (
                    <div
                      key={index}
                      className="group flex items-start gap-4 bg-gray-700/20 backdrop-blur-sm border border-gray-600/30 rounded-2xl p-6 hover:border-gray-500/50 transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-teal-400 transition-all duration-300">
                          {perk.name}
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {perk.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Open Positions */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                Featured Positions
              </span>
            </h3>
            
            <div className="grid gap-6">
              {featuredJobs.map((job, index) => {
                const IconComponent = getIconComponent(job.icon);
                return (
                  <div
                    key={index}
                    className="group relative bg-gray-700/30 backdrop-blur-sm border border-gray-600/50 rounded-2xl overflow-hidden hover:border-gray-500/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
                  >
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${job.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
                    
                    <div className="relative p-6">
                      <div className="flex items-start gap-6 mb-6">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${job.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent size={20} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                              {job.title}
                            </h4>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${job.gradient} text-white`}>
                              {job.type}
                            </span>
                          </div>
                          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                            {job.shortDescription}
                          </p>
                          
                          {/* Job Meta Info */}
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                              <MapPin size={14} />
                              {job.location}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                              <Clock size={14} />
                              {job.experience}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                              <Building2 size={14} />
                              {job.department}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                              <Calendar size={14} />
                              Apply by {new Date(job.applicationDeadline).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Skills */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {job.skills.slice(0, 4).map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-gray-600/50 text-gray-300 text-xs rounded-full border border-gray-500/50"
                            >
                              {skill}
                            </span>
                          ))}
                          {job.skills.length > 4 && (
                            <span className="px-3 py-1 bg-gray-600/50 text-gray-400 text-xs rounded-full border border-gray-500/50">
                              +{job.skills.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Link
                          to={`/job/${job.id}`}
                          className="flex-1 bg-gray-600/50 backdrop-blur-sm border border-gray-500/50 text-white px-4 py-3 rounded-xl hover:bg-gray-500/50 hover:border-gray-400/50 transition-all duration-300 font-semibold text-center flex items-center justify-center gap-2"
                        >
                          <Eye size={16} />
                          View Details
                        </Link>
                        <button 
                          onClick={() => handleApplyClick(job.id, job.title)}
                          className={`flex-1 bg-gradient-to-r ${job.gradient} text-white px-4 py-3 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold flex items-center justify-center gap-2`}
                        >
                          <Send size={16} />
                          Quick Apply
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* View All Jobs Link */}
            <div className="mt-8 text-center">
              <Link 
                to="/careers"
                className="inline-flex items-center gap-2 bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 text-white px-8 py-3 rounded-xl hover:bg-gray-600/50 hover:border-gray-500/50 transition-all duration-300 font-semibold"
              >
                View All {featuredJobs.length + allJobs.length} Open Positions
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* All Jobs Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              More Opportunities
            </span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {allJobs.map((job, index) => {
              const IconComponent = getIconComponent(job.icon);
              return (
                <div
                  key={index}
                  className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-gray-600/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${job.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
                  
                  <div className="relative p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${job.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent size={16} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300 leading-tight">
                          {job.title}
                        </h4>
                        <p className="text-gray-400 text-xs mb-3">
                          {job.department} • {job.type}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-2">
                      {job.shortDescription}
                    </p>
                    
                    {/* Job Details */}
                    <div className="grid grid-cols-2 gap-2 mb-4 text-xs text-gray-400">
                      <div className="flex items-center gap-1">
                        <MapPin size={12} />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={12} />
                        {job.experience}
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.skills.slice(0, 3).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-gray-600/50 text-gray-300 text-xs rounded-full border border-gray-500/50"
                        >
                          {skill}
                        </span>
                      ))}
                      {job.skills.length > 3 && (
                        <span className="px-2 py-1 bg-gray-600/50 text-gray-400 text-xs rounded-full border border-gray-500/50">
                          +{job.skills.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Link
                        to={`/job/${job.id}`}
                        className="flex-1 bg-gray-600/50 backdrop-blur-sm border border-gray-500/50 text-white px-3 py-2 rounded-lg hover:bg-gray-500/50 hover:border-gray-400/50 transition-all duration-300 font-medium text-center text-sm flex items-center justify-center gap-1"
                      >
                        <Eye size={14} />
                        Details
                      </Link>
                      <button 
                        onClick={() => handleApplyClick(job.id, job.title)}
                        className={`flex-1 bg-gradient-to-r ${job.gradient} text-white px-3 py-2 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-medium text-sm flex items-center justify-center gap-1`}
                      >
                        <Send size={14} />
                        Apply
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Application Form Modal */}
        {showApplicationForm && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800/90 backdrop-blur-md border border-gray-700/50 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                        Apply for Position
                      </span>
                    </h3>
                    <p className="text-gray-300">{selectedJob}</p>
                  </div>
                  <button
                    onClick={() => setShowApplicationForm(false)}
                    className="text-gray-400 hover:text-white transition-colors duration-300 p-2 hover:bg-gray-700/50 rounded-xl"
                  >
                    <X size={24} />
                  </button>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="experience" className="block text-sm font-semibold text-white mb-2">
                        Years of Experience *
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        required
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                      >
                        <option value="">Select experience</option>
                        <option value="0-1">0-1 years</option>
                        <option value="1-3">1-3 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5-8">5-8 years</option>
                        <option value="8+">8+ years</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-semibold text-white mb-2">
                      Current Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                      placeholder="City, Country"
                    />
                  </div>

                  <div>
                    <label htmlFor="resume" className="block text-sm font-semibold text-white mb-2">
                      Resume/Portfolio Link
                    </label>
                    <input
                      type="url"
                      id="resume"
                      name="resume"
                      value={formData.resume}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                      placeholder="https://linkedin.com/in/yourprofile or Google Drive link"
                    />
                  </div>

                  <div>
                    <label htmlFor="coverLetter" className="block text-sm font-semibold text-white mb-2">
                      Cover Letter / Why are you interested? *
                    </label>
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      required
                      rows={4}
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                      placeholder="Tell us about your relevant experience and why you're interested in this role..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="gdprConsent"
                      name="gdprConsent"
                      required
                      checked={formData.gdprConsent}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 text-blue-500 border-gray-600 rounded focus:ring-blue-500 bg-gray-700"
                    />
                    <label htmlFor="gdprConsent" className="text-sm text-gray-300">
                      I consent to OptiValueTek processing my personal data for recruitment purposes, in accordance with our Privacy Policy.
                    </label>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setShowApplicationForm(false)}
                      className="flex-1 bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 text-white px-6 py-3 rounded-xl hover:bg-gray-600/50 hover:border-gray-500/50 transition-all duration-300 font-semibold"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-semibold flex items-center justify-center gap-2 shadow-xl"
                    >
                      <Send size={20} />
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Culture;