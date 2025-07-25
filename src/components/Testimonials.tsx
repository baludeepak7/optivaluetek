import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const stats = [
    { label: "Global Projects", value: "500+" },
    { label: "Countries Served", value: "15+" },
    { label: "Technology Experts", value: "200+" }
  ];

  const clients = ['Vodafone', 'Standard Chartered', 'MTN', 'Altech', 'Aditya Birla', 'Dalko Logistics'];
  
  const testimonials = [
    {
      quote: "OptiValue Tek's transformation not only addressed our immediate challenges but set us up for future growth.",
      name: "CTO, Leading Telecom Provider"
    },
    {
      quote: "Our teams now operate with clarity, speed, and precision — thanks to a data-first CRM strategy.",
      name: "Sales Operations Director, Major Bank"
    },
    {
      quote: "This gateway empowered our internal teams and enhanced partner integration while saving licensing costs.",
      name: "Infrastructure Team Lead, Telecom Firm"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div 
                className="text-5xl font-bold text-[#A47864] mb-2"
                style={{ fontFamily: 'Poppins' }}
              >
                {stat.value}
              </div>
              <div 
                className="text-xl text-[#666666]"
                style={{ fontFamily: 'Roboto' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="text-center mb-16">
          <h3 
            className="text-2xl font-bold text-[#333333] mb-8"
            style={{ fontFamily: 'Poppins' }}
          >
            Trusted by Industry Leaders
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {clients.map((client, index) => (
              <div
                key={index}
                className="text-2xl font-bold text-[#A47864] hover:opacity-100 transition-opacity duration-300"
                style={{ fontFamily: 'Poppins' }}
              >
                {client}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#F5EBDD] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-[#D36A47] fill-current" />
                ))}
              </div>
              <p 
                className="text-xl text-[#333333] mb-6 italic"
                style={{ fontFamily: 'Inter' }}
              >
                "{testimonial.quote}"
              </p>
              <div 
                className="font-semibold text-[#A47864]"
                style={{ fontFamily: 'Roboto' }}
              >
                — {testimonial.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;