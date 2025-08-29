import React, { useState } from 'react';
import { MapPin, Clock, Users, Heart, X, Send, ChevronDown, ChevronUp, Code, Database, Cloud, Cpu, Globe, Smartphone, Settings, Brain } from 'lucide-react';

const Culture = () => {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string>('');
  const [showAllJobs, setShowAllJobs] = useState(false);
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

  const handleApplyClick = (jobTitle: string) => {
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
  
  const featuredCareers = [
    {
      title: "Java Spring Boot Microservices Developer",
      location: "Remote",
      experience: "5+ years",
      type: "Full-time",
      description: "Design and develop microservices using Java Spring Boot, work with cloud-native technologies.",
      icon: Code,
      gradient: "from-blue-600 to-cyan-500",
      skills: ["Java", "Spring Boot", "Microservices", "Docker"]
    },
    {
      title: "BSS/OSS Telecom Consultant",
      location: "Bangalore",
      experience: "6+ years",
      type: "Full-time",
      description: "Lead telecom BSS/OSS implementations, Oracle BRM, OSM, UIM expertise required.",
      icon: Smartphone,
      gradient: "from-purple-600 to-pink-500",
      skills: ["Oracle BRM", "BSS/OSS", "Telecom", "OSM"]
    },
    {
      title: "API Management Specialist (APIGEE/3Scale)",
      location: "Remote",
      experience: "4+ years",
      type: "Full-time",
      description: "Implement and manage API gateways, developer portals, and API lifecycle management.",
      icon: Globe,
      gradient: "from-green-600 to-teal-500",
      skills: ["APIGEE", "3Scale", "API Gateway", "OpenAPI"]
    }
  ];

  const allCareers = [
    ...featuredCareers,
    {
      title: "DevOps Engineer (Kubernetes/OpenShift)",
      location: "Remote/Hybrid",
      experience: "4+ years",
      type: "Full-time",
      description: "Manage container orchestration, CI/CD pipelines, and cloud infrastructure.",
      icon: Settings,
      gradient: "from-orange-600 to-red-500",
      skills: ["Kubernetes", "OpenShift", "CI/CD", "Docker"]
    },
    {
      title: "Oracle Integration Cloud Consultant",
      location: "India/Remote",
      experience: "5+ years",
      type: "Full-time",
      description: "Design and implement Oracle Integration Cloud solutions for enterprise clients.",
      icon: Database,
      gradient: "from-indigo-600 to-purple-500",
      skills: ["Oracle OIC", "Integration", "Cloud", "SOA"]
    },
    {
      title: "Data Science/AI-ML Engineer",
      location: "Global",
      experience: "3+ years",
      type: "Full-time",
      description: "Develop AI/ML models, implement MLOps pipelines, and create data-driven solutions.",
      icon: Brain,
      gradient: "from-pink-600 to-rose-500",
      skills: ["Python", "ML", "TensorFlow", "MLOps"]
    },
    {
      title: "Full Stack Developer (Java/.NET)",
      location: "Remote",
      experience: "3+ years",
      type: "Full-time",
      description: "Develop end-to-end applications using Java/.NET, Angular, React technologies.",
      icon: Code,
      gradient: "from-cyan-600 to-blue-500",
      skills: ["Java", ".NET", "React", "Angular"]
    },
    {
      title: "Cloud Solutions Architect (AWS/Azure)",
      location: "Global",
      experience: "6+ years",
      type: "Full-time",
      description: "Design cloud architectures, lead migration projects, and optimize cloud costs.",
      icon: Cloud,
      gradient: "from-teal-600 to-green-500",
      skills: ["AWS", "Azure", "Architecture", "Migration"]
    }
  ];

  const displayedJobs = showAllJobs ? allCareers : featuredCareers;

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
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-bold text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                  {showAllJobs ? 'All Open Positions' : 'Featured Positions'}
                </span>
              </h3>
              <span className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full border border-blue-400/30">
                {showAllJobs ? `${allCareers.length} positions` : `${featuredCareers.length} of ${allCareers.length} positions`}
              </span>
            </div>
            
            <div className="space-y-6 max-h-96 overflow-y-auto custom-scrollbar">
              {displayedJobs.map((job, index) => {
                const IconComponent = job.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-gray-700/30 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-6 hover:border-gray-500/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
                  >
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${job.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
                    
                    <div className="relative">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${job.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent size={20} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                            {job.title}
                          </h4>
                          <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                            {job.description}
                          </p>
                        </div>
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-gray-600/50 text-gray-300 text-xs rounded-full border border-gray-500/50"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Job Details */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          {job.experience}
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs bg-gradient-to-r ${job.gradient} text-white`}>
                          {job.type}
                        </span>
                      </div>

                      {/* Apply Button */}
                      <button 
                        onClick={() => handleApplyClick(job.title)}
                        className={`group/btn w-full bg-gradient-to-r ${job.gradient} text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold flex items-center justify-center gap-2`}
                      >
                        <Send size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                        Apply Now
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <button 
              onClick={() => setShowAllJobs(!showAllJobs)}
              className="mt-6 w-full bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 text-white px-8 py-3 rounded-xl hover:bg-gray-600/50 hover:border-gray-500/50 transition-all duration-300 font-semibold flex items-center justify-center gap-2"
            >
              {showAllJobs ? (
                <>
                  Show Featured Roles <ChevronUp size={20} />
                </>
              ) : (
                <>
                  View All {allCareers.length} Roles <ChevronDown size={20} />
                </>
              )}
            </button>
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

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(55, 65, 81, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
        }
      `}</style>
    </section>
  );
};

export default Culture;