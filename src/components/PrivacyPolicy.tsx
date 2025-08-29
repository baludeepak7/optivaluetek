import React from 'react';
import { ArrowLeft, Shield, Eye, Lock, Users, Mail, FileText, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information We Collect",
      icon: Eye,
      content: "We collect contact details, enquiry details, and technical data (IP address, browser information) when you interact with our website and services. This information helps us provide better service and respond to your needs effectively.",
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      title: "Use of Information",
      icon: Users,
      content: "We use your information to respond to enquiries, provide services, improve our offerings, and for recruitment purposes. All data usage is aligned with the purpose for which it was collected and your consent.",
      gradient: "from-green-600 to-teal-500"
    },
    {
      title: "Data Security",
      icon: Lock,
      content: "We implement industry-standard security measures to protect your personal information. Access is restricted to authorized personnel only, and we regularly review our security practices to ensure data protection.",
      gradient: "from-purple-600 to-pink-500"
    },
    {
      title: "Third-Party Sharing",
      icon: Shield,
      content: "We do not sell or rent your personal information. Data is shared only with trusted partners when necessary for service delivery or when required by law. All third-party sharing is governed by strict confidentiality agreements.",
      gradient: "from-orange-600 to-red-500"
    },
    {
      title: "Your Rights",
      icon: FileText,
      content: "You have the right to request access, correction, or deletion of your personal data. Contact us at optivaluetek@optivaluetek.co.in for any privacy-related requests or concerns.",
      gradient: "from-indigo-600 to-purple-500"
    },
    {
      title: "Contact for Privacy",
      icon: Mail,
      content: "For any privacy-related questions or to exercise your rights, please contact us at optivaluetek@optivaluetek.co.in. We are committed to addressing your concerns promptly and transparently.",
      gradient: "from-cyan-600 to-blue-500"
    }
  ];

  const principles = [
    "Transparency in data collection and usage",
    "Minimal data collection - only what's necessary",
    "Secure storage and transmission of personal data",
    "Regular security audits and updates",
    "Compliance with applicable data protection laws",
    "Respect for user privacy preferences"
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
                  Privacy Policy
                </span>
              </h1>
              <p className="text-gray-300">Your privacy and data protection are our priority</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-600/20 backdrop-blur-sm border border-green-400/30 rounded-full text-green-300 text-sm font-medium mb-6">
            Data Protection
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400">
              Privacy & Protection
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            At OptiValue Tek Consulting Limited, we respect your privacy and are committed to protecting personal information in accordance with applicable data protection laws and regulations.
          </p>
        </div>

        {/* Privacy Principles */}
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12 mb-16">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield size={32} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
                Our Privacy Principles
              </span>
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-gray-700/30 rounded-xl border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300"
              >
                <CheckCircle size={20} className="text-green-400" />
                <span className="text-gray-300 text-sm">{principle}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy Sections */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <div
                key={index}
                className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
                
                <div className="relative">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${section.gradient} flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {section.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Agreement Notice */}
        <div className="bg-gradient-to-r from-green-600/20 to-teal-600/20 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={24} className="text-white" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">
            Agreement to Privacy Policy
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            By using our website and services, you agree to this Privacy Policy. We may update this policy from time to time, and any changes will be posted on this page with an updated effective date.
          </p>
          <div className="mt-8">
            <p className="text-gray-400 text-sm">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;