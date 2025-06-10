import React from 'react';
import { motion } from 'framer-motion';

const personalInsurance = [
  {
    title: 'Home & Contents Insurance',
    desc: 'Covers your property, fixtures, and possessions against fire, flood, theft, and accidental damage.'
  },
  {
    title: 'Car Insurance (Comprehensive & Third Party)',
    desc: 'Choose full protection or third-party liability, with optional features like rental car inclusion.'
  },
  {
    title: 'Life Insurance',
    desc: 'Ensure your loved ones are protected in the event of your passing or permanent disability.'
  },
  {
    title: 'Income Protection',
    desc: 'Provides up to 75% of your income if you’re unable to work due to illness or injury.'
  },
  {
    title: 'Travel Insurance',
    desc: 'Domestic and international cover for medical emergencies, cancellations, and lost luggage.'
  }
];

const businessInsurance = [
  {
    title: 'Public Liability Insurance',
    desc: 'Protects against claims of injury or property damage caused by your business operations.'
  },
  {
    title: 'Professional Indemnity Insurance',
    desc: 'Covers businesses providing advice or professional services in the event of legal claims.'
  },
  {
    title: 'Business Interruption Insurance',
    desc: 'Compensates for lost income during unforeseen disruptions (e.g. fire, natural disasters).'
  },
  {
    title: 'Commercial Property Insurance',
    desc: 'Covers buildings, stock, equipment, and loss due to business downtime.'
  },
  {
    title: 'Fleet & Vehicle Insurance',
    desc: 'Customised policies for companies with business vehicles or delivery services.'
  }
];

const InsuranceCard = ({ title, desc }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    className="bg-white shadow-xl p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
  >
    <h3 className="text-xl font-semibold text-customOrange mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{desc}</p>
  </motion.div>
);

const Products = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-customOrange mb-2">Insurance Products</h2>
          <p className="text-gray-700 text-base max-w-2xl mx-auto">
            Comprehensive Coverage You Can Rely On – We offer a wide range of flexible insurance products tailored for both individuals and businesses:
          </p>
        </div>

        {/* Personal Insurance */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Personal Insurance</h3>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {personalInsurance.map((item, index) => (
              <InsuranceCard key={index} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>

        {/* Business Insurance */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Business Insurance</h3>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {businessInsurance.map((item, index) => (
              <InsuranceCard key={index} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
