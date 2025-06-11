import React from 'react';
import { Link } from 'react-router-dom';
import { MdBusiness, MdRealEstateAgent, MdWork, MdBuild } from 'react-icons/md';

const loanOptions = [
  {
    icon: <MdBusiness size={28} className="text-customBlue" />,
    title: 'Business Expansion Loans',
    description: 'Fund growth, hiring, new locations, or product launches.',
  },
  {
    icon: <MdRealEstateAgent size={28} className="text-customBlue" />,
    title: 'Real Estate Investment Loans',
    description: 'Finance acquisitions, renovations, and development projects.',
  },
  {
    icon: <MdWork size={28} className="text-customBlue" />,
    title: 'Working Capital Loans',
    description: 'Ensure cash flow for operations, inventory, and expenses.',
  },
  {
    icon: <MdBuild size={28} className="text-customBlue" />,
    title: 'Project-Based Financing',
    description: 'Tailored funding for unique, milestone-driven initiatives.',
  },
];

const Services = () => {
  return (
    <section className="bg-white text-black py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Flexible Investment Loans Designed for Strategic Growth
        </h2>

        <p className="text-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          At Valley Oak Finance, we recognize that no two financial needs are alike.
          Our services are designed to support entrepreneurs, SMEs, and investors with reliable capital
          that fosters sustainable growth. Each loan is tailored, competitively priced,
          and structured to deliver maximum impact.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-10">
          {loanOptions.map((option, index) => (
            <div key={index} className="flex flex-col items-start gap-3 bg-gray-50 p-6 rounded-xl hover:shadow-xl transition">
              <div>{option.icon}</div>
              <h3 className="text-lg font-semibold">{option.title}</h3>
              <p className="text-sm text-gray-600">{option.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/services">
            <button className="bg-customBlue text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition duration-300">
              View All Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
