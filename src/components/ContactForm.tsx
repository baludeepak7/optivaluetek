import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    inquiryType: '',
    message: '',
    gdprConsent: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-[#F5EBDD]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white p-12 rounded-2xl shadow-lg">
              <CheckCircle size={64} className="text-green-500 mx-auto mb-6" />
              <h2 
                className="text-3xl font-bold text-[#333333] mb-4"
                style={{ fontFamily: 'Poppins' }}
              >
                Thank You!
              </h2>
              <p 
                className="text-xl text-[#666666]"
                style={{ fontFamily: 'Inter' }}
              >
                Thanks! We'll be in touch within 1 business day.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-[#F5EBDD]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 
              className="text-4xl lg:text-5xl font-bold text-[#333333] mb-6"
              style={{ fontFamily: 'Poppins' }}
            >
              Talk to Our Experts
            </h2>
            <p 
              className="text-xl text-[#666666]"
              style={{ fontFamily: 'Roboto' }}
            >
              Ready to accelerate your digital transformation? Let's discuss your project.
            </p>
          </div>

          <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-semibold text-[#333333] mb-2"
                    style={{ fontFamily: 'Roboto' }}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
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
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A47864] focus:border-transparent outline-none transition-all duration-300"
                    style={{ fontFamily: 'Inter' }}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label 
                    htmlFor="company" 
                    className="block text-sm font-semibold text-[#333333] mb-2"
                    style={{ fontFamily: 'Roboto' }}
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A47864] focus:border-transparent outline-none transition-all duration-300"
                    style={{ fontFamily: 'Inter' }}
                  />
                </div>
                <div>
                  <label 
                    htmlFor="role" 
                    className="block text-sm font-semibold text-[#333333] mb-2"
                    style={{ fontFamily: 'Roboto' }}
                  >
                    Role
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A47864] focus:border-transparent outline-none transition-all duration-300"
                    style={{ fontFamily: 'Inter' }}
                  />
                </div>
              </div>

              <div>
                <label 
                  htmlFor="inquiryType" 
                  className="block text-sm font-semibold text-[#333333] mb-2"
                  style={{ fontFamily: 'Roboto' }}
                >
                  Inquiry Type
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A47864] focus:border-transparent outline-none transition-all duration-300"
                  style={{ fontFamily: 'Inter' }}
                >
                  <option value="">Select inquiry type</option>
                  <option value="solutions">Solutions</option>
                  <option value="case-study">Case Study</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-semibold text-[#333333] mb-2"
                  style={{ fontFamily: 'Roboto' }}
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A47864] focus:border-transparent outline-none transition-all duration-300"
                  style={{ fontFamily: 'Inter' }}
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="gdprConsent"
                  name="gdprConsent"
                  required
                  checked={formData.gdprConsent}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 text-[#A47864] border-gray-300 rounded focus:ring-[#A47864]"
                />
                <label 
                  htmlFor="gdprConsent" 
                  className="text-sm text-[#666666]"
                  style={{ fontFamily: 'Inter' }}
                >
                  I consent to OptiValueTek processing my personal data for the purpose of responding to my inquiry, in accordance with our Privacy Policy.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#D36A47] text-white px-8 py-4 rounded-lg hover:bg-[#B85A3D] transition-all duration-300 transform hover:scale-105 font-semibold text-lg flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;