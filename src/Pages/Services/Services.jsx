import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { img1, img2, img3, img4 } from '../../imports';

const loanServices = [
  {
    category: 'Business Expansion Loans',
    details: [
      'Equipment and technology upgrades',
      'Hiring and talent expansion',
      'New location rollouts',
      'Marketing and sales development'
    ],
    img: img1
  },
  {
    category: 'Real Estate Investment Loans',
    details: [
      'Property acquisition and development',
      'Renovation and refurbishment',
      'Multi-unit investments',
      'Commercial project financing'
    ],
    img: img2
  },
  {
    category: 'Working Capital Loans',
    details: [
      'Bridging seasonal gaps',
      'Managing inventory and receivables',
      'Covering operational expenses'
    ],
    img: img3
  },
  {
    category: 'Project-Based Financing',
    details: [
      'Custom repayment terms',
      'Milestone-based funding',
      'Industry-specific underwriting'
    ],
    img: img4
  }
];

const loanBenefits = [
  'Low-interest rates',
  'Repayment flexibility (including interest-only periods)',
  'Loan approvals in as little as 7–10 business days',
  'One-on-one expert support throughout the process'
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="px-6 py-16 md:px-20 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-customBlue text-center mb-4">
          Flexible Investment Loans Designed for Strategic Growth
        </h2>
        <p className="text-center text-lg max-w-3xl mx-auto mb-10">
          At Valley Oak Finance, we recognize that no two financial needs are alike.
          Our services are designed to support entrepreneurs, SMEs, and investors with
          reliable capital that fosters sustainable growth.
        </p>

        {loanServices.map((service, index) => (
          <div key={index} className="mb-6">
            <div
              className="flex justify-between items-center bg-customBlue text-white px-6 py-4 rounded-xl cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="text-xl font-semibold">{service.category}</h3>
              {activeIndex === index ? <ChevronUp /> : <ChevronDown />}
            </div>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-5 border border-t-0 border-gray-300 rounded-b-xl bg-gray-50">
                    <img src={service.img} alt={service.category} className="w-full h-56 object-cover rounded-xl mb-4" />
                    <ul className="list-disc list-inside space-y-1 text-black">
                      {service.details.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-customBlue mb-4">Why Choose Our Loan Solutions?</h3>
          <ul className="list-disc list-inside text-black space-y-2">
            {loanBenefits.map((benefit, i) => (
              <li key={i}>{benefit}</li>
            ))}
          </ul>
        </div>

        <div className="text-center mt-10">
          <button className="bg-customYellow text-black px-6 py-3 font-semibold rounded-lg hover:bg-opacity-90 transition duration-300">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
