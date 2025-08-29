import React, { useState } from 'react';
import { ArrowLeft, FileText, Download, Mail, Phone, Globe, Users, Building2, Calendar, Shield, TrendingUp, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const InvestorCorner = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const openPDF = (filename: string) => {
    // Open dummy PDF in new tab
    window.open(`/investor-corner-files/${filename}.pdf`, '_blank');
  };

  const toggleSection = (section: string) => {
    setActiveSection(prev => prev === section ? null : section);
  };

  const boardMembers = [
    { srNo: 1, name: "Ashish Kumar", din: "03511258", category: "Executive", designation: "Managing Director" },
    { srNo: 2, name: "Ragini Jha", din: "05260531", category: "Executive", designation: "Whole Time Director" },
    { srNo: 3, name: "Grish Kamal Gupta", din: "00193844", category: "Non-Executive", designation: "Independent Director" },
    { srNo: 4, name: "Sumit Kumar", din: "10385526", category: "Non-Executive", designation: "Independent Director" },
    { srNo: 5, name: "Ankit Aggarwal", din: "10742028", category: "Non-Executive", designation: "Independent Director" },
    { srNo: 6, name: "Sudhir Kumar Sahani", din: "–", category: "–", designation: "Chief Financial Officer" },
    { srNo: 7, name: "Shraboni Chatterjee", din: "–", category: "–", designation: "Company Secretary & Compliance Officer" }
  ];

  const nominationCommittee = [
    { srNo: 1, name: "Ankit Aggarwal", din: "10742028", role: "Chair Person", category: "Non-Executive Director" },
    { srNo: 2, name: "Sumit Kumar", din: "10385526", role: "Member", category: "Non-Executive Director" },
    { srNo: 3, name: "Girish Kamal Gupta", din: "00193844", role: "Member", category: "Non-Executive Director" }
  ];

  const stakeholdersCommittee = [
    { srNo: 1, name: "Sumit Kumar", din: "10385526", role: "Chair Person", category: "Non-Executive Director" },
    { srNo: 2, name: "Ragini Jha", din: "05260531", role: "Member", category: "Executive Director" },
    { srNo: 3, name: "Ankit Aggarwal", din: "10742028", role: "Member", category: "Non-Executive Director" }
  ];

  const auditCommittee = [
    { srNo: 1, name: "Sumit Kumar", din: "10385526", role: "Chair Person", category: "Non-Executive Director" },
    { srNo: 2, name: "Ragini Jha", din: "05260531", role: "Member", category: "Executive Director" },
    { srNo: 3, name: "Ankit Aggarwal", din: "10742028", role: "Member", category: "Non-Executive Director" }
  ];

  const financialYears = ["FY 19-20", "FY 20-21", "FY 21-22", "FY 22-23", "FY 23-24", "FY 24-25"];
  
  const boardMeetings = [
    "02_08_2024", "02_12_2024", "07_11_2024", "10_03_2025", "12_11_2024",
    "14_08_2024", "18_09_2024", "20_05_2024", "22_05_2024", "25_10_2024", "26_07_2024"
  ];

  const policies = [
    "Code of Conduct for Directors and Senior Officials",
    "Code for Independent Directors",
    "Determination-of-Material-events",
    "Policy for Identification of Material Group Companies",
    "Risk Management Policy",
    "CSR Policy – OptiValue Tek",
    "Sexual Harassment Policy – Optivalue",
    "Documents Preserved Policy",
    "Familiarisation Programme for Independent Directors",
    "Policy for Insider Trading",
    "Related Party Transaction",
    "Policy for Determining Material Subsidiary",
    "Materiality Policies -as per ICDR"
  ];

  const materialContracts = [
    "RTA agreement",
    "Selling & Distribution expense",
    "Underwriting agreement",
    "Issue Agreement"
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Investor Corner
                </span>
              </h1>
              <p className="text-gray-300">Comprehensive investor relations and corporate governance information</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-6">
            Investor Relations
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
              Transparency & Governance
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Access comprehensive investor information, financial reports, governance documents, and regulatory disclosures
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Board Members", value: "7", icon: Users, gradient: "from-blue-600 to-cyan-500" },
            { label: "Independent Directors", value: "3", icon: Shield, gradient: "from-green-600 to-teal-500" },
            { label: "Years of Operation", value: "10+", icon: TrendingUp, gradient: "from-purple-600 to-pink-500" },
            { label: "Global Presence", value: "15+", icon: Globe, gradient: "from-orange-600 to-red-500" }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
                <div className="relative text-center">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={20} className="text-white" />
                  </div>
                  <div className={`text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content Sections */}
        <div className="space-y-8">
          {/* 1. Initial Public Offer */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <FileText size={20} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Initial Public Offer</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { name: "Draft Red Herring Prospectus (DRHP)", file: "Initial Public Offer/DRHP-V-Final-27-03-2025" },
                { name: "Abridged Prospectus (Coming Soon)", file: "Initial Public Offer/abridged-prospectus" },
                { name: "Red Herring Prospectus (RHP)", file: "Initial Public Offer/rhp" }
              ].map((doc, index) => (
                <button
                  key={index}
                  onClick={() => openPDF(doc.file)}
                  className="group bg-gray-700/30 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-4 hover:border-gray-500/50 transition-all duration-300 hover:shadow-lg text-left"
                >
                  <div className="flex items-center gap-3">
                    <Download size={16} className="text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{doc.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Policies */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
                <Shield size={20} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Policies</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {policies.map((policy, index) => (
                <button
                  key={index}
                  onClick={() => openPDF('Policies/'+policy.toLowerCase().replace(/\s+/g, '-'))}
                  className="group bg-gray-700/30 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-4 hover:border-gray-500/50 transition-all duration-300 hover:shadow-lg text-left"
                >
                  <div className="flex items-center gap-3">
                    <Download size={16} className="text-green-400 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm">{policy}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Investor Contacts */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                <Mail size={20} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Investor Contacts</h3>
            </div>
            <div className="bg-gray-700/30 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-white mb-4">Ms. Shraboni Chatterjee</h4>
              <p className="text-blue-400 font-semibold mb-4">Company Secretary & Compliance Officer</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-purple-400" />
                  <a href="mailto:cs@optivaluetek.com" className="text-gray-300 hover:text-white transition-colors duration-300">
                    cs@optivaluetek.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-green-400" />
                  <span className="text-gray-300">011-35725859</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Shareholder Information */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                <Users size={20} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Shareholder Information</h3>
            </div>
            <button
              onClick={() => openPDF('Shareholder Information/sebi-circular')}
              className="group bg-gray-700/30 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-4 hover:border-gray-500/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <Download size={16} className="text-orange-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">SEBI Circular</span>
              </div>
            </button>
          </div>

          {/* 5. Board of Directors and Committees */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Building2 size={20} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Board of Directors and Board Committees</h3>
            </div>

            {/* Board Composition */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-blue-400 mb-4">Composition of Board & KMP</h4>
                <div className="overflow-x-auto">
                  <table className="w-full bg-gray-700/30 backdrop-blur-sm border border-gray-600/50 rounded-2xl">
                    <thead>
                      <tr className="border-b border-gray-600/50">
                        <th className="text-left p-4 text-gray-300 font-semibold">SR No.</th>
                        <th className="text-left p-4 text-gray-300 font-semibold">Name</th>
                        <th className="text-left p-4 text-gray-300 font-semibold">DIN</th>
                        <th className="text-left p-4 text-gray-300 font-semibold">Category</th>
                        <th className="text-left p-4 text-gray-300 font-semibold">Designation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {boardMembers.map((member, index) => (
                        <tr key={index} className="border-b border-gray-600/30 hover:bg-gray-600/20 transition-colors duration-300">
                          <td className="p-4 text-gray-300">{member.srNo}</td>
                          <td className="p-4 text-white font-medium">{member.name}</td>
                          <td className="p-4 text-gray-300">{member.din}</td>
                          <td className="p-4 text-gray-300">{member.category}</td>
                          <td className="p-4 text-blue-400">{member.designation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Committee Tables */}
              {[
                { title: "Nomination and Remuneration Committee", data: nominationCommittee, color: "green" },
                { title: "Stakeholders Relation Committee", data: stakeholdersCommittee, color: "purple" },
                { title: "Audit Committee", data: auditCommittee, color: "orange" }
              ].map((committee, index) => (
                <div key={index}>
                  <h4 className={`text-xl font-bold text-${committee.color}-400 mb-4`}>Composition of {committee.title}</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full bg-gray-700/30 backdrop-blur-sm border border-gray-600/50 rounded-2xl">
                      <thead>
                        <tr className="border-b border-gray-600/50">
                          <th className="text-left p-4 text-gray-300 font-semibold">SR No.</th>
                          <th className="text-left p-4 text-gray-300 font-semibold">Name</th>
                          <th className="text-left p-4 text-gray-300 font-semibold">DIN</th>
                          <th className="text-left p-4 text-gray-300 font-semibold">Role</th>
                          <th className="text-left p-4 text-gray-300 font-semibold">Category</th>
                        </tr>
                      </thead>
                      <tbody>
                        {committee.data.map((member, memberIndex) => (
                          <tr key={memberIndex} className="border-b border-gray-600/30 hover:bg-gray-600/20 transition-colors duration-300">
                            <td className="p-4 text-gray-300">{member.srNo}</td>
                            <td className="p-4 text-white font-medium">{member.name}</td>
                            <td className="p-4 text-gray-300">{member.din}</td>
                            <td className={`p-4 text-${committee.color}-400 font-semibold`}>{member.role}</td>
                            <td className="p-4 text-gray-300">{member.category}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Disclosures Under Regulation 46 of the LODR */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Eye size={20} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Disclosures Under Regulation 46 of the LODR</h3>
            </div>

            <div className="space-y-8">
              {/* Financial Statements */}
              <div>
                <h4 className="text-xl font-bold text-blue-400 mb-4">Financial Statements</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {financialYears.map((year, index) => (
                    <button
                      key={index}
                      onClick={() => openPDF(`financial-statements/${year.toLowerCase().replace(/\s+/g, '-')}`)}
                      className="group bg-gray-700/30 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-4 hover:border-gray-500/50 transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="flex items-center gap-3">
                        <Download size={16} className="text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{year}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Annual Reports */}
              <div>
                <h4 className="text-xl font-bold text-green-400 mb-4">Annual Reports</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {financialYears.map((year, index) => (
                    <button
                      key={index}
                      onClick={() => openPDF(`annual-report/${year.toLowerCase().replace(/\s+/g, '-')}`)}
                      className="group bg-gray-700/30 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-4 hover:border-gray-500/50 transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="flex items-center gap-3">
                        <Download size={16} className="text-green-400 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{year}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Email for Grievance Redressal */}
              <div>
                <h4 className="text-xl font-bold text-purple-400 mb-4">Email address for grievance redressal</h4>
                <div className="bg-gray-700/30 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-6">
                  <h5 className="text-lg font-bold text-white mb-2">Ms. Shraboni Chatterjee</h5>
                  <p className="text-purple-400 font-semibold mb-4">Company Secretary & Compliance Officer</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail size={16} className="text-purple-400" />
                      <a href="mailto:cs@optivaluetek.com" className="text-gray-300 hover:text-white transition-colors duration-300">
                        cs@optivaluetek.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={16} className="text-green-400" />
                      <span className="text-gray-300">011-35725859</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Profile */}
              <div>
                <h4 className="text-xl font-bold text-orange-400 mb-4">Company Profile</h4>
                <div className="bg-gray-700/30 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-6">
                  <div className="flex items-center gap-3">
                    <Globe size={16} className="text-orange-400" />
                    <span className="text-gray-300">Official Website: </span>
                    <a href="https://www.optivaluetek.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 transition-colors duration-300">
                      www.optivaluetek.com
                    </a>
                  </div>
                </div>
              </div>

              {/* AGM Notice */}
              <div>
                <h4 className="text-xl font-bold text-cyan-400 mb-4">AGM Notice</h4>
                <button
                  onClick={() => openPDF('agm/agm-notice-2023-24')}
                  className="group bg-gray-700/30 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-4 hover:border-gray-500/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <Download size={16} className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Optivalue AGM Notice 2023-24</span>
                  </div>
                </button>
              </div>

              {/* MOA & AOA */}
              <div>
                <h4 className="text-xl font-bold text-pink-400 mb-4">MOA & AOA</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { name: "AOA", file: "aoa/aoa" },
                    { name: "MOA", file: "moa/moa" }
                  ].map((doc, index) => (
                    <button
                      key={index}
                      onClick={() => openPDF(doc.file)}
                      className="group bg-gray-700/30 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-4 hover:border-gray-500/50 transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="flex items-center gap-3">
                        <Download size={16} className="text-pink-400 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{doc.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 7. Corporate Governance */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center">
                <Shield size={20} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Corporate Governance</h3>
            </div>

            <div className="space-y-6">
              {/* General Meeting */}
              <div>
                <h4 className="text-xl font-bold text-teal-400 mb-4">General Meeting</h4>
                <button
                  onClick={() => openPDF('general-meeting/general-meeting-fy-2023-24')}
                  className="group bg-gray-700/30 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-4 hover:border-gray-500/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <Download size={16} className="text-teal-400 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">FY 2023-24</span>
                  </div>
                </button>
              </div>

              {/* Board Meetings */}
              <div>
                <h4 className="text-xl font-bold text-cyan-400 mb-4">Board Meeting</h4>
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {boardMeetings.map((meeting, index) => (
                    <button
                      key={index}
                      onClick={() => openPDF(`board-meeting/${meeting}`)}
                      className="group bg-gray-700/30 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-4 hover:border-gray-500/50 transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="flex items-center gap-3">
                        <Calendar size={16} className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm">{meeting}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 8. RTA Details */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center">
                <Building2 size={20} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">RTA Details</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full bg-gray-700/30 backdrop-blur-sm border border-gray-600/50 rounded-2xl">
                <tbody>
                  {[
                    { field: "Name of the RTA", details: "Cameo Corporate Service Limited" },
                    { field: "Address", details: "Subramanian Building No. 1 Club House Road, Chennai, Tamil Nadu, India, 600002." },
                    { field: "Telephone", details: "+91 44 – 2846 0425/ 2846 0390" },
                    { field: "Email Id", details: "rdr@cameoindia.com" },
                    { field: "Investor Grievance E-mail", details: "investor@cameoindia.com" },
                    { field: "Contact Person", details: "Ms. K. Sreepriya" },
                    { field: "Website", details: "https://cameoindia.com" },
                    { field: "SEBI Registration Number", details: "INR000003753" }
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-gray-600/30 hover:bg-gray-600/20 transition-colors duration-300">
                      <td className="p-4 text-yellow-400 font-semibold">{row.field}</td>
                      <td className="p-4 text-gray-300">{row.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 9. Material Contracts & Agreements */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center">
                <FileText size={20} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Material Contracts & Agreements</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {materialContracts.map((contract, index) => (
                <button
                  key={index}
                  onClick={() => openPDF('material-contracts/'+contract.toLowerCase().replace(/\s+/g, '-'))}
                  className="group bg-gray-700/30 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-4 hover:border-gray-500/50 transition-all duration-300 hover:shadow-lg text-left"
                >
                  <div className="flex items-center gap-3">
                    <Download size={16} className="text-red-400 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{contract}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorCorner;