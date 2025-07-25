import React, { useState } from 'react';
import { MapPin, Clock, Users, Heart, X, Send, ChevronDown, ChevronUp } from 'lucide-react';

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
    // Here you would typically send the form data to your backend
    console.log('Application submitted:', { job: selectedJob, ...formData });
    
    // For now, we'll create an email with the form data
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
    
    // Reset form and close modal
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

  const values = ['Innovation', 'Ownership', 'Empathy', 'Quality'];
  const perks = ['Remote-first', 'Health coverage', 'Training budget', 'Offsites'];
  
  const featuredCareers = [
    {
      title: "Java Spring Boot Microservices Developer",
      location: "Remote",
      experience: "5+ years",
      type: "Full-time",
      description: "Design and develop microservices using Java Spring Boot, work with cloud-native technologies."
    },
    {
      title: "BSS/OSS Telecom Consultant",
      location: "Bangalore",
      experience: "6+ years",
      type: "Full-time",
      description: "Lead telecom BSS/OSS implementations, Oracle BRM, OSM, UIM expertise required."
    },
    {
      title: "API Management Specialist (APIGEE/3Scale)",
      location: "Remote",
      experience: "4+ years",
      type: "Full-time",
      description: "Implement and manage API gateways, developer portals, and API lifecycle management."
    }
  ];

  const allCareers = [
    ...featuredCareers,
    {
      title: "DevOps Engineer (Kubernetes/OpenShift)",
      location: "Remote/Hybrid",
      experience: "4+ years",
      type: "Full-time",
      description: "Manage container orchestration, CI/CD pipelines, and cloud infrastructure."
    },
    {
      title: "Oracle Integration Cloud Consultant",
      location: "India/Remote",
      experience: "5+ years",
      type: "Full-time",
      description: "Design and implement Oracle Integration Cloud solutions for enterprise clients."
    },
    {
      title: "Data Science/AI-ML Engineer",
      location: "Global",
      experience: "3+ years",
      type: "Full-time",
      description: "Develop AI/ML models, implement MLOps pipelines, and create data-driven solutions."
    },
    {
      title: "Full Stack Developer (Java/.NET)",
      location: "Remote",
      experience: "3+ years",
      type: "Full-time",
      description: "Develop end-to-end applications using Java/.NET, Angular, React technologies."
    },
    {
      title: "Cloud Solutions Architect (AWS/Azure)",
      location: "Global",
      experience: "6+ years",
      type: "Full-time",
      description: "Design cloud architectures, lead migration projects, and optimize cloud costs."
    },
    {
      title: "Integration Specialist (webMethods/Mulesoft)",
      location: "Remote",
      experience: "4+ years",
      type: "Full-time",
      description: "Design and implement enterprise integration solutions using webMethods, Mulesoft."
    },
    {
      title: "BPM Consultant (Camunda/jBPM)",
      location: "Remote/Hybrid",
      experience: "5+ years",
      type: "Full-time",
      description: "Implement business process management solutions using Camunda, jBPM, Red Hat PAM."
    },
    {
      title: "Salesforce Developer",
      location: "Remote",
      experience: "3+ years",
      type: "Full-time",
      description: "Develop and customize Salesforce applications, integrations, and workflows."
    },
    {
      title: "QA Automation Engineer",
      location: "Remote",
      experience: "3+ years",
      type: "Full-time",
      description: "Design and implement automated testing frameworks, performance testing."
    },
    {
      title: "Oracle EBS/Fusion Consultant",
      location: "India/Remote",
      experience: "5+ years",
      type: "Full-time",
      description: "Implement and customize Oracle EBS/Fusion applications for enterprise clients."
    },
    {
      title: "Mobile App Developer (React Native/Flutter)",
      location: "Remote",
      experience: "3+ years",
      type: "Full-time",
      description: "Develop cross-platform mobile applications using React Native or Flutter."
    },
    {
      title: "Site Reliability Engineer (SRE)",
      location: "Global",
      experience: "4+ years",
      type: "Full-time",
      description: "Ensure system reliability, implement monitoring, and optimize performance."
    }
  ];

  const displayedJobs = showAllJobs ? allCareers : featuredCareers;

  return (
    <section id="careers" className="py-20 bg-[#F5EBDD]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl lg:text-5xl font-bold text-[#333333] mb-6"
            style={{ fontFamily: 'Poppins' }}
          >
            Culture & Careers
          </h2>
          <p 
            className="text-2xl text-[#A47864] font-semibold mb-4"
            style={{ fontFamily: 'Roboto' }}
          >
            "Build with empathy, engineer with excellence."
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {/* Values & Perks */}
          <div className="space-y-8">
            <div>
              <h3 
                className="text-2xl font-bold text-[#333333] mb-6"
                style={{ fontFamily: 'Poppins' }}
              >
                Our Values
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="w-12 h-12 bg-[#A47864]/10 rounded-lg flex items-center justify-center mb-3">
                      <Heart size={24} className="text-[#A47864]" />
                    </div>
                    <h4 
                      className="font-semibold text-[#333333]"
                      style={{ fontFamily: 'Roboto' }}
                    >
                      {value}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 
                className="text-2xl font-bold text-[#333333] mb-6"
                style={{ fontFamily: 'Poppins' }}
              >
                Perks & Benefits
              </h3>
              <div className="space-y-3">
                {perks.map((perk, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md"
                  >
                    <div className="w-8 h-8 bg-[#D36A47]/10 rounded-lg flex items-center justify-center">
                      <Users size={16} className="text-[#D36A47]" />
                    </div>
                    <span 
                      className="font-medium text-[#333333]"
                      style={{ fontFamily: 'Inter' }}
                    >
                      {perk}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Open Positions */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 
                className="text-2xl font-bold text-[#333333]"
                style={{ fontFamily: 'Poppins' }}
              >
                {showAllJobs ? 'All Open Positions' : 'Featured Positions'}
              </h3>
              <span className="text-sm text-[#666666]">
                {showAllJobs ? `${allCareers.length} positions` : `${featuredCareers.length} of ${allCareers.length} positions`}
              </span>
            </div>
            
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {displayedJobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <h4 
                    className="text-xl font-bold text-[#333333] mb-2"
                    style={{ fontFamily: 'Poppins' }}
                  >
                    {job.title}
                  </h4>
                  <p className="text-sm text-[#666666] mb-3" style={{ fontFamily: 'Inter' }}>
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-[#666666]">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      {job.experience}
                    </div>
                    <span className="bg-[#F5EBDD] text-[#A47864] px-3 py-1 rounded-full">
                      {job.type}
                    </span>
                  </div>
                  <button 
                    onClick={() => handleApplyClick(job.title)}
                    className="text-[#D36A47] font-semibold hover:text-[#B85A3D] transition-colors duration-300"
                  >
                    Apply Now →
                  </button>
                </div>
              ))}
            </div>
            
            <button 
              onClick={() => setShowAllJobs(!showAllJobs)}
              className="mt-6 bg-[#A47864] text-white px-8 py-3 rounded-lg hover:bg-[#8B6551] transition-colors duration-300 font-semibold flex items-center gap-2"
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
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 
                    className="text-2xl font-bold text-[#333333]"
                    style={{ fontFamily: 'Poppins' }}
                  >
                    Apply for {selectedJob}
                  </h3>
                  <button
                    onClick={() => setShowApplicationForm(false)}
                    className="text-[#666666] hover:text-[#333333] transition-colors duration-300"
                  >
                    <X size={24} />
                  </button>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label 
                        htmlFor="name" 
                        className="block text-sm font-semibold text-[#333333] mb-2"
                        style={{ fontFamily: 'Roboto' }}
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A47864] focus:border-transparent outline-none transition-all duration-300"
                        style={{ fontFamily: 'Inter' }}
                      />
                    </div>
                    <div>
                      <label 
                        htmlFor="email" 
                        className="block text-sm font-semibold text-[#333333] mb-2"
                        style={{ fontFamily: 'Roboto' }}
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A47864] focus:border-transparent outline-none transition-all duration-300"
                        style={{ fontFamily: 'Inter' }}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label 
                        htmlFor="phone" 
                        className="block text-sm font-semibold text-[#333333] mb-2"
                        style={{ fontFamily: 'Roboto' }}
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A47864] focus:border-transparent outline-none transition-all duration-300"
                        style={{ fontFamily: 'Inter' }}
                      />
                    </div>
                    <div>
                      <label 
                        htmlFor="experience" 
                        className="block text-sm font-semibold text-[#333333] mb-2"
                        style={{ fontFamily: 'Roboto' }}
                      >
                        Years of Experience *
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        required
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A47864] focus:border-transparent outline-none transition-all duration-300"
                        style={{ fontFamily: 'Inter' }}
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
                    <label 
                      htmlFor="location" 
                      className="block text-sm font-semibold text-[#333333] mb-2"
                      style={{ fontFamily: 'Roboto' }}
                    >
                      Current Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A47864] focus:border-transparent outline-none transition-all duration-300"
                      style={{ fontFamily: 'Inter' }}
                      placeholder="City, Country"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="resume" 
                      className="block text-sm font-semibold text-[#333333] mb-2"
                      style={{ fontFamily: 'Roboto' }}
                    >
                      Resume/Portfolio Link
                    </label>
                    <input
                      type="url"
                      id="resume"
                      name="resume"
                      value={formData.resume}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A47864] focus:border-transparent outline-none transition-all duration-300"
                      style={{ fontFamily: 'Inter' }}
                      placeholder="https://linkedin.com/in/yourprofile or Google Drive link"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="coverLetter" 
                      className="block text-sm font-semibold text-[#333333] mb-2"
                      style={{ fontFamily: 'Roboto' }}
                    >
                      Cover Letter / Why are you interested? *
                    </label>
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      required
                      rows={4}
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A47864] focus:border-transparent outline-none transition-all duration-300"
                      style={{ fontFamily: 'Inter' }}
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
                      className="mt-1 w-4 h-4 text-[#A47864] border-gray-300 rounded focus:ring-[#A47864]"
                    />
                    <label 
                      htmlFor="gdprConsent" 
                      className="text-sm text-[#666666]"
                      style={{ fontFamily: 'Inter' }}
                    >
                      I consent to OptiValueTek processing my personal data for recruitment purposes, in accordance with our Privacy Policy.
                    </label>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setShowApplicationForm(false)}
                      className="flex-1 border-2 border-[#A47864] text-[#A47864] px-6 py-3 rounded-lg hover:bg-[#A47864]/10 transition-colors duration-300 font-semibold"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-[#D36A47] text-white px-6 py-3 rounded-lg hover:bg-[#B85A3D] transition-colors duration-300 font-semibold flex items-center justify-center gap-2"
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