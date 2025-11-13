import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Header from './components/Header';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Industries from './components/Industries';
import CaseStudies from './components/CaseStudies';
import Insights from './components/Insights';
import News from './components/News';
import Culture from './components/Culture';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import InvestorCorner from './components/InvestorCorner';
import Careers from './components/Careers';
import JobDetails from './components/JobDetails';

// Services
import ApplicationIntegration from './components/services/ApplicationIntegration';
import APIManagement from './components/services/APIManagement';
import DataEngineering from './components/services/DataEngineering';
import CloudSolutions from './components/services/CloudSolutions';
import DevOpsSRE from './components/services/DevOpsSRE';
import AIMLOps from './components/services/AIMLOps';
import EnterpriseSolutions from './components/services/EnterpriseSolutions';
import WebMobileDev from './components/services/WebMobileDev';

// Additional Pages
import CompanyOverview from './components/CompanyOverview';
import AboutUs from './components/AboutUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Sitemap from './components/Sitemap';
import WingHover from './components/WingHover';

const HomePage = () => (
  <>
    <Helmet>
      <title>OptiValueTek | Driving Innovation in AI, Cloud & Integration</title>
      <meta
        name="description"
        content="OptiValueTek delivers AI, cloud, data, and integration solutions to help enterprises scale with confidence."
      />
      <link rel="canonical" href="https://www.optivaluetek.com/" />
    </Helmet>
    <Hero />
    <Solutions />
    <Industries />
    <CaseStudies />
    <Insights />
    <Culture />
    <Testimonials />
    <ContactForm />
  </>
);

const SolutionsPage = () => (
  <>
    <Helmet>
      <title>Solutions | OptiValueTek</title>
      <meta
        name="description"
        content="Explore OptiValueTek's solutions in AI/ML, cloud, DevOps, enterprise systems, and application integration."
      />
      <link rel="canonical" href="https://www.optivaluetek.com/solutions" />
    </Helmet>
    <Solutions />
  </>
);

const IndustriesPage = () => (
  <>
    <Helmet>
      <title>Industries | OptiValueTek</title>
      <meta
        name="description"
        content="Discover industries served by OptiValueTek including telecom, defense, agriculture, and enterprise technology."
      />
      <link rel="canonical" href="https://www.optivaluetek.com/industries" />
    </Helmet>
    <Industries />
  </>
);

const InsightsPage = () => (
  <>
    <Helmet>
      <title>Insights | OptiValueTek</title>
      <meta
        name="description"
        content="Read OptiValueTek's case studies, blogs, webinars, and white papers to stay ahead in technology innovation."
      />
      <link rel="canonical" href="https://www.optivaluetek.com/insights" />
    </Helmet>
    <Insights />
  </>
);

const NewsPage = () => (
  <>
    <Helmet>
      <title>News & Updates | OptiValueTek</title>
      <meta
        name="description"
        content="Stay updated with OptiValueTek's latest press releases, announcements, and social media updates."
      />
      <link rel="canonical" href="https://www.optivaluetek.com/news" />
    </Helmet>
    <News />
  </>
);

const CareersPage = () => (
  <>
    <Helmet>
      <title>Careers | OptiValueTek</title>
      <meta
        name="description"
        content="Join OptiValueTek and build your career in AI, cloud, DevOps, and data engineering with a global team of innovators."
      />
      <link rel="canonical" href="https://www.optivaluetek.com/careers" />
    </Helmet>
    <Careers />
  </>
);

const InvestorCornerPage = () => (
  <>
    <Helmet>
      <title>Investor Corner | OptiValueTek</title>
      <meta
        name="description"
        content="Explore investor relations, financial reports, and corporate governance at OptiValueTek."
      />
      <link rel="canonical" href="https://www.optivaluetek.com/investor-corner" />
    </Helmet>
    <InvestorCorner />
  </>
);

const ContactPage = () => (
  <>
    <Helmet>
      <title>Contact Us | OptiValueTek</title>
      <meta
        name="description"
        content="Get in touch with OptiValueTek for partnerships, services, and career opportunities."
      />
      <link rel="canonical" href="https://www.optivaluetek.com/contact" />
    </Helmet>
    <ContactForm />
  </>
);

const WingHoverPage = () => (
  <>
    <Helmet>
      <title>WingHover - UAV & Defense Systems | OptiValueTek</title>
      <meta
        name="description"
        content="Explore WingHover - OptiValueTek's UAV, defense systems, and intelligent automation solutions for mission-critical applications."
      />
      <link rel="canonical" href="https://www.optivaluetek.com/winghover" />
    </Helmet>
    <WingHover />
  </>
);

function App() {
  return (
    <HelmetProvider>
      <Router basename="/">
        <div className="min-h-screen">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/winghover" element={<WingHoverPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/investor-corner" element={<InvestorCornerPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Services routes without Helmet/meta */}
            <Route path="/services/application-integration" element={<ApplicationIntegration />} />
            <Route path="/services/api-management" element={<APIManagement />} />
            <Route path="/services/data-engineering" element={<DataEngineering />} />
            <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
            <Route path="/services/devops-sre" element={<DevOpsSRE />} />
            <Route path="/services/ai-mlops" element={<AIMLOps />} />
            <Route path="/services/enterprise-solutions" element={<EnterpriseSolutions />} />
            <Route path="/services/web-mobile-dev" element={<WebMobileDev />} />

            {/* Job Details */}
            <Route path="/job/:jobId" element={<JobDetails />} />

            {/* Job Details */}
            <Route path="/job/:jobId" element={<JobDetails />} />

            {/* Additional pages */}
            <Route path="/company-overview" element={<CompanyOverview />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/sitemap" element={<Sitemap />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
