import React from 'react';
import { ArrowLeft, Globe, ExternalLink, ArrowRight, FileText, Building2, Users, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sitemap = () => {
  const mainPages = [
    {
      title: "Home",
      href: "/",
      description: "Main landing page with company overview and key services",
      icon: Globe,
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      title: "Solutions",
      href: "/solutions",
      description: "Comprehensive overview of our technology solutions and services",
      icon: Building2,
      gradient: "from-purple-600 to-pink-500"
    },
    {
      title: "Industries",
      href: "/industries",
      description: "Industry expertise and sector-specific solutions",
      icon: Building2,
      gradient: "from-green-600 to-teal-500"
    },
    {
      title: "Insights",
      href: "/insights",
      description: "Case studies, white papers, and thought leadership content",
      icon: FileText,
      gradient: "from-orange-600 to-red-500"
    },
    {
      title: "Careers",
      href: "/careers",
      description: "Join our team and explore career opportunities",
      icon: Users,
      gradient: "from-indigo-600 to-purple-500"
    },
    {
      title: "Investor Corner",
      href: "/investor-corner",
      description: "Investor relations and corporate governance information",
      icon: FileText,
      gradient: "from-cyan-600 to-blue-500"
    },
    {
      title: "Contact",
      href: "/contact",
      description: "Get in touch with our team for partnerships and inquiries",
      icon: Mail,
      gradient: "from-pink-600 to-rose-500"
    }
  ];

  const servicePages = [
    {
      title: "Application & Process Integration",
      href: "/services/application-integration",
      description: "SOA, Microservices, Apache Camel, Red Hat Fuse solutions"
    },
    {
      title: "API Management & Microservices",
      href: "/services/api-management",
      description: "APIGEE, Red Hat 3Scale, webMethods API gateway solutions"
    },
    {
      title: "Data Engineering & Science",
      href: "/services/data-engineering",
      description: "Big Data, Data Science, Python, AI/ML, Snowflake solutions"
    },
    {
      title: "AI/MLOps & Machine Learning",
      href: "/services/ai-mlops",
      description: "Machine Learning, MLOps, Generative AI solutions"
    },
    {
      title: "Cloud Solutions & Infrastructure",
      href: "/services/cloud-solutions",
      description: "AWS, Azure, OCI, GCP cloud migration and management"
    },
    {
      title: "DevOps & Site Reliability Engineering",
      href: "/services/devops-sre",
      description: "Kubernetes, OpenShift, Docker, CI/CD automation"
    },
    {
      title: "Enterprise Solutions",
      href: "/services/enterprise-solutions",
      description: "Oracle Fusion/EBS, Siebel, Oracle BRM, OSM, UIM"
    },
    {
      title: "Web & Mobile Development",
      href: "/services/web-mobile-dev",
      description: "Full Stack, Java Spring Boot, Salesforce, React, Angular"
    }
  ];

  const additionalPages = [
    {
      title: "Company Overview",
      href: "/company-overview",
      description: "Detailed company information and global presence"
    },
    {
      title: "About Us",
      href: "/about-us",
      description: "Our story, leadership team, and company values"
    },
    {
      title: "Privacy Policy",
      href: "/privacy-policy",
      description: "Data protection and privacy practices"
    },
    {
      title: "Terms of Service",
      href: "/terms-of-service",
      description: "Legal terms and conditions for using our services"
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Sitemap
                </span>
              </h1>
              <p className="text-gray-300">Complete website navigation and page structure</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-600/20 backdrop-blur-sm border border-cyan-400/30 rounded-full text-cyan-300 text-sm font-medium mb-6">
            Website Structure
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Site Navigation
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our website is structured to help you easily find information about our services, expertise, and company details across all sections.
          </p>
        </div>

        {/* Main Pages */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Main Pages
            </span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mainPages.map((page, index) => {
              const IconComponent = page.icon;
              return (
                <Link
                  key={index}
                  to={page.href}
                  className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 block"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${page.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
                  
                  <div className="relative">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${page.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={20} className="text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                      {page.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                      {page.description}
                    </p>
                    <div className="flex items-center gap-2 text-blue-400 text-sm font-medium">
                      <span>Visit page</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Service Pages */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
              Service Pages
            </span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {servicePages.map((service, index) => (
              <Link
                key={index}
                to={service.href}
                className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 block"
              >
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Building2 size={20} className="text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-teal-400 transition-all duration-300">
                    {service.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                    <span>Learn more</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Additional Pages */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Additional Pages
            </span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalPages.map((page, index) => (
              <Link
                key={index}
                to={page.href}
                className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 block"
              >
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FileText size={20} className="text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    {page.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    {page.description}
                  </p>
                  <div className="flex items-center gap-2 text-purple-400 text-sm font-medium">
                    <span>View page</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* External Links */}
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <ExternalLink size={24} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                External Resources
              </span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-700/30 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-6 hover:border-gray-500/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <FileText size={20} className="text-orange-400" />
                  <div className="text-left">
                    <h4 className="font-bold text-white group-hover:text-orange-400 transition-colors duration-300">XML Sitemap</h4>
                    <p className="text-gray-400 text-sm">Machine-readable sitemap for search engines</p>
                  </div>
                  <ExternalLink size={16} className="text-gray-400 group-hover:text-orange-400 transition-colors duration-300" />
                </div>
              </a>
              
              <a
                href="/robots.txt"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-700/30 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-6 hover:border-gray-500/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <FileText size={20} className="text-green-400" />
                  <div className="text-left">
                    <h4 className="font-bold text-white group-hover:text-green-400 transition-colors duration-300">Robots.txt</h4>
                    <p className="text-gray-400 text-sm">Search engine crawling instructions</p>
                  </div>
                  <ExternalLink size={16} className="text-gray-400 group-hover:text-green-400 transition-colors duration-300" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;