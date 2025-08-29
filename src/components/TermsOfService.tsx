import React from 'react';
import { ArrowLeft, FileText, Shield, AlertTriangle, Scale, Globe, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  const terms = [
    {
      title: "Use of Services",
      icon: Globe,
      content: "You may use our services only for lawful purposes and in accordance with these terms. Unauthorized use, including but not limited to hacking, data mining, or any illegal activities, is strictly prohibited.",
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      title: "Intellectual Property",
      icon: Shield,
      content: "All content, trademarks, logos, and intellectual property on our website belong to OptiValue Tek Consulting Limited. No copying, reproduction, or distribution is allowed without explicit written consent.",
      gradient: "from-purple-600 to-pink-500"
    },
    {
      title: "Service Limitations",
      icon: AlertTriangle,
      content: "While we strive for accuracy and reliability, we do not guarantee uninterrupted services. We reserve the right to modify, suspend, or discontinue services at any time without prior notice.",
      gradient: "from-orange-600 to-red-500"
    },
    {
      title: "Liability Limitations",
      icon: Scale,
      content: "OptiValue Tek is not liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our liability is limited to the maximum extent permitted by law.",
      gradient: "from-green-600 to-teal-500"
    },
    {
      title: "Governing Law",
      icon: FileText,
      content: "These terms are governed by the laws of India. Any disputes arising from these terms will be subject to the exclusive jurisdiction of courts in New Delhi, India.",
      gradient: "from-indigo-600 to-purple-500"
    }
  ];

  const serviceGuidelines = [
    "Use services only for legitimate business purposes",
    "Respect intellectual property rights",
    "Do not attempt to reverse engineer our solutions",
    "Maintain confidentiality of any shared information",
    "Report any security vulnerabilities responsibly",
    "Comply with all applicable laws and regulations"
  ];

  const userResponsibilities = [
    "Provide accurate information during engagement",
    "Maintain security of your account credentials",
    "Use services in compliance with applicable laws",
    "Respect the rights of other users and third parties",
    "Report any misuse or security concerns promptly"
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                  Terms of Service
                </span>
              </h1>
              <p className="text-gray-300">Legal terms and conditions for using our services</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-orange-600/20 backdrop-blur-sm border border-orange-400/30 rounded-full text-orange-300 text-sm font-medium mb-6">
            Legal Terms
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-pink-400">
              Terms & Conditions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            By accessing OptiValue Tek Consulting Limited's website and services, you agree to be bound by the following terms and conditions. Please read them carefully.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {terms.map((term, index) => {
            const IconComponent = term.icon;
            return (
              <div
                key={index}
                className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${term.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
                
                <div className="relative">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${term.gradient} flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {term.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {term.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Service Guidelines */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
              <Shield size={24} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Service Guidelines
              </span>
            </h3>
            <div className="space-y-3">
              {serviceGuidelines.map((guideline, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-400 mt-0.5" />
                  <span className="text-gray-300 leading-relaxed">{guideline}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
              <Users size={24} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
                User Responsibilities
              </span>
            </h3>
            <div className="space-y-3">
              {userResponsibilities.map((responsibility, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-400 mt-0.5" />
                  <span className="text-gray-300 leading-relaxed">{responsibility}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle size={24} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Important Notice
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              These terms may be updated from time to time. Continued use of our services after any modifications constitutes acceptance of the updated terms. We recommend reviewing these terms periodically.
            </p>
          </div>
        </div>

        {/* Agreement Section */}
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Scale size={24} className="text-white" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">
            Agreement to Terms
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
            By using our services, you accept these Terms of Service and agree to comply with all applicable laws and regulations.
          </p>
          <div className="space-y-4">
            <p className="text-gray-400">
              <strong>Governing Law:</strong> These terms are governed by the laws of India
            </p>
            <p className="text-gray-400">
              <strong>Jurisdiction:</strong> New Delhi, India
            </p>
            <p className="text-gray-400 text-sm">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;