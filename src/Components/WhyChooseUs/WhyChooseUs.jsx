import React from 'react';
import { FaCheckCircle, FaQuoteLeft } from 'react-icons/fa';
import { MdBusiness, MdRealEstateAgent, MdWork, MdBuild } from 'react-icons/md';

const WhyChooseUs = () => {
  return (
    <section className="bg-customBlue text-white px-6 py-16 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Why Choose Us</h2>
        <p className="text-lg text-center text-customYellow font-medium mb-12">
          Trusted by Business Leaders Worldwide
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {[
            'Over a decade of lending expertise',
            'Fast, transparent approval process',
            'Custom loan structures for diverse financial needs',
            'Personalized client service with a dedicated loan advisor'
          ].map((text, index) => (
            <div key={index} className="flex items-start gap-3">
              <FaCheckCircle className="text-customYellow mt-1" size={20} />
              <p className="text-sm md:text-base font-medium text-white">{text}</p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold mb-4 text-center text-white">Our Core Solutions:</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {[
            {
              icon: <MdBusiness size={28} className="text-customYellow" />,
              text: 'Business Expansion Loans'
            },
            {
              icon: <MdRealEstateAgent size={28} className="text-customYellow" />,
              text: 'Real Estate Investment Loans'
            },
            {
              icon: <MdWork size={28} className="text-customYellow" />,
              text: 'Working Capital Loans'
            },
            {
              icon: <MdBuild size={28} className="text-customYellow" />,
              text: 'Project-Based Financing'
            }
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              {item.icon}
              <p className="text-sm md:text-base font-medium text-white">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-white text-black p-6 md:p-10 rounded-xl shadow-lg">
          <FaQuoteLeft className="text-customBlue text-3xl mb-4" />
          <p className="italic text-lg">
            “Digital Standard Solution delivered what the banks couldn’t: speed, flexibility, and genuine support. They were instrumental in helping us scale.”
          </p>
          <p className="mt-4 font-bold text-customBlue">
            — David R., Commercial Property Developer
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
