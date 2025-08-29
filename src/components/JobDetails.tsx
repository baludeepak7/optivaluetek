import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Users, Calendar, DollarSign, Send, CheckCircle, Building2 } from 'lucide-react';
import jobsData from '../config/jobs.json';

interface Job {
  id: string;
  title: string;
  location: string;
  experience: string;
  type: string;
  department: string;
  shortDescription: string;
  fullDescription: string;
  skills: string[];
  icon: string;
  gradient: string;
  salaryRange: string;
  benefits: string[];
  applicationDeadline: string;
}

const JobDetails = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const [job, setJob] = useState<Job | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
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

  useEffect(() => {
    const allJobs = [...jobsData.featuredJobs, ...jobsData.allJobs];
    const foundJob = allJobs.find(j => j.id === jobId);
    setJob(foundJob || null);
  }, [jobId]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Application for ${job?.title} Position`;
    const body = `Dear OptiValueTek Team,

I am applying for the ${job?.title} position. Please find my details below:

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

  if (!job) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Job Not Found</h1>
          <p className="text-gray-300 mb-8">The job position you're looking for doesn't exist.</p>
          <Link to="/careers" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold">
            View All Jobs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-20">
      {/* Header */}
      <div className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link to="/careers" className="p-2 hover:bg-gray-700/50 rounded-xl transition-colors duration-300">
              <ArrowLeft size={24} className="text-white" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  {job.title}
                </span>
              </h1>
              <p className="text-gray-300">{job.department} • {job.type}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Job Overview */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8">
              <div className="flex items-start gap-6 mb-8">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${job.gradient} flex items-center justify-center shadow-lg`}>
                  <Building2 size={32} className="text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                      {job.title}
                    </span>
                  </h2>
                  <p className="text-xl text-gray-300 leading-relaxed mb-6">
                    {job.shortDescription}
                  </p>
                  
                  {/* Job Meta */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-xl">
                      <MapPin size={20} className="text-blue-400" />
                      <div>
                        <div className="text-sm text-gray-400">Location</div>
                        <div className="text-white font-semibold">{job.location}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-xl">
                      <Clock size={20} className="text-green-400" />
                      <div>
                        <div className="text-sm text-gray-400">Experience</div>
                        <div className="text-white font-semibold">{job.experience}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-xl">
                      <Users size={20} className="text-purple-400" />
                      <div>
                        <div className="text-sm text-gray-400">Department</div>
                        <div className="text-white font-semibold">{job.department}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-xl">
                      <Calendar size={20} className="text-orange-400" />
                      <div>
                        <div className="text-sm text-gray-400">Apply by</div>
                        <div className="text-white font-semibold">{new Date(job.applicationDeadline).toLocaleDateString()}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Required Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {job.skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-4 py-2 rounded-full text-white font-medium bg-gradient-to-r ${job.gradient}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Job Description */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Job Description</h3>
                <div className="prose prose-invert max-w-none">
                  {job.fullDescription.split('\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-300 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Apply */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
                  Quick Apply
                </span>
              </h3>
              <button
                onClick={() => setShowApplicationForm(true)}
                className={`w-full bg-gradient-to-r ${job.gradient} text-white px-6 py-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold text-lg flex items-center justify-center gap-3 shadow-xl`}
              >
                <Send size={20} />
                Apply Now
              </button>
            </div>

            {/* Compensation */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Compensation & Benefits</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-xl">
                  <DollarSign size={20} className="text-green-400" />
                  <div>
                    <div className="text-sm text-gray-400">Salary Range</div>
                    <div className="text-white font-semibold">{job.salaryRange}</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-3">Benefits</h4>
                  <div className="space-y-2">
                    {job.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-400" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Company Info */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">About OptiValueTek</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Global technology consulting company specializing in digital transformation and enterprise modernization across 15+ countries.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  <span className="text-gray-300">500+ Global Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-gray-300">200+ Technology Experts</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  <span className="text-gray-300">15+ Countries Served</span>
                </div>
              </div>
            </div>
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
                    <p className="text-gray-300">{job.title}</p>
                  </div>
                  <button
                    onClick={() => setShowApplicationForm(false)}
                    className="text-gray-400 hover:text-white transition-colors duration-300 p-2 hover:bg-gray-700/50 rounded-xl"
                  >
                    ×
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
    </div>
  );
};

export default JobDetails;