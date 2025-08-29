import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Database, Globe, Cloud, Settings, Brain, Smartphone, Cog, Shield, GitBranch, Server, ArrowRight } from 'lucide-react';

const Solutions = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const solutions = [
    {
      title: "Application & Process Integration",
      icon: Cog,
      description: "SOA, Microservices, Apache Camel, Red Hat Fuse/PAM, Camunda, Oracle AIA, webMethods, Tibco, Mulesoft integration solutions.",
      technologies: ["Apache Camel", "Red Hat Fuse", "webMethods", "Mulesoft"],
      gradient: "from-blue-500 to-cyan-500",
      href: "/services/application-integration"
    },
    {
      title: "API Management & Microservices",
      icon: Globe,
      description: "APIGEE, Red Hat 3Scale, webMethods API gateways with OpenAPI implementation and developer portals.",
      technologies: ["APIGEE", "Red Hat 3Scale", "OpenAPI", "Microservices"],
      gradient: "from-purple-500 to-pink-500",
      href: "/services/api-management"
    },
    {
      title: "Data Engineering & Science",
      icon: Database,
      description: "Big Data, Data Science, Python, AI/ML, Snowflake, data lakes, and master data platform setup.",
      technologies: ["Python", "Snowflake", "Data Lakes", "Big Data"],
      gradient: "from-green-500 to-teal-500",
      href: "/services/data-engineering"
    },
    {
      title: "AI/MLOps & Machine Learning",
      icon: Brain,
      description: "AI solutions for business use cases, MLOps pipelines, generative AI, and advanced analytics implementation.",
      technologies: ["MLOps", "TensorFlow", "Generative AI", "Analytics"],
      gradient: "from-orange-500 to-red-500",
      href: "/services/ai-mlops"
    },
    {
      title: "Cloud Solutions & Infrastructure",
      icon: Cloud,
      description: "AWS, Azure, OCI, GCP, Oracle Integration Cloud, IaaS, PaaS, SaaS offerings with cloud-native implementations.",
      technologies: ["AWS", "Azure", "Kubernetes", "Docker"],
      gradient: "from-indigo-500 to-blue-500",
      href: "/services/cloud-solutions"
    },
    {
      title: "DevOps & SRE",
      icon: Settings,
      description: "Kubernetes, OpenShift, Docker, CI/CD pipelines, deployment automation, and site reliability engineering.",
      technologies: ["Kubernetes", "OpenShift", "CI/CD", "Monitoring"],
      gradient: "from-yellow-500 to-orange-500",
      href: "/services/devops-sre"
    },
    {
      title: "Enterprise Solutions",
      icon: Server,
      description: "Oracle Fusion/EBS, Oracle Cloud Infrastructure, Siebel, Oracle BRM, OSM, UIM, and BSS/OSS transformations.",
      technologies: ["Oracle Fusion", "Oracle BRM", "BSS/OSS", "Siebel"],
      gradient: "from-pink-500 to-rose-500",
      href: "/services/enterprise-solutions"
    },
    {
      title: "Web & Mobile Development",
      icon: Smartphone,
      description: "Full Stack (Java/.Net), Java Spring Boot, Salesforce, React, Angular development with modern frameworks.",
      technologies: ["React", "Angular", "Spring Boot", "Salesforce"],
      gradient: "from-cyan-500 to-blue-500",
      href: "/services/web-mobile-dev"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%)`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-6">
            Our Solutions
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
              Digital Integration
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            End-to-end digital transformation services that modernize your enterprise infrastructure with cutting-edge technology solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-6 rounded-2xl hover:border-gray-600/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />
                  
                  {/* Icon */}
                  <div className={`relative w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${solution.gradient} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={32} className="text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                      {solution.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-4 text-sm">
                      {solution.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {solution.technologies.slice(0, 2).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                      {solution.technologies.length > 2 && (
                        <span className="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-full border border-gray-600/50">
                          +{solution.technologies.length - 2} more
                        </span>
                      )}
                    </div>
                    
                    {/* Learn More Link */}
                    <Link 
                      to={solution.href}
                      className="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors duration-300"
                    >
                      <span>Learn more</span>
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
       {/* <div className="text-center mt-16">
          <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg flex items-center gap-3 mx-auto shadow-2xl">
            Explore All Solutions
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Solutions;