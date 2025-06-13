import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: 'Who is eligible for an investment loan with Valley Oak Finance?',
    answer:
      'We offer loans to individuals and registered businesses globally. Whether you\'re an established company or an emerging enterprise, we provide financing options that suit your needs.'
  },
  {
    question: 'How fast is the approval process?',
    answer:
      'Once we receive all required documentation, approval typically takes 7 to 10 business days. We pride ourselves on efficiency without compromising due diligence.'
  },
  {
    question: 'What types of documentation are needed to apply?',
    answer:
      'Depending on the loan type, documents generally include government-issued ID, proof of income or revenue, business registration certificates, and a detailed project proposal or use of funds.'
  },
  {
    question: 'What are your interest rates and repayment terms?',
    answer:
      'Rates are competitive and vary by loan type and applicant profile. We offer both fixed and variable rates, with flexible repayment terms tailored to your financial structure.'
  },
  {
    question: 'Is there a minimum or maximum loan amount?',
    answer:
      'Our typical loan amounts range from $1 Million to $1 Billion, depending on the client\'s needs and qualifications.'
  },
  {
    question: 'Do you require collateral?',
    answer:
      'Collateral requirements vary based on loan structure and risk profile. Unsecured options may be available for qualified borrowers.'
  }
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white px-7 py-14">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-customBlue mb-3">Your Questions Answered</h2>
        <p className="text-black mb-10">Explore frequently asked questions about our investment loan services.</p>

        <div className="space-y-5">
          {faqData.map((item, index) => (
            <div key={index} className="bg-customBlue rounded-2xl p-5 shadow-lg text-white">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggle(index)}
              >
                <h4 className="font-semibold text-lg">{item.question}</h4>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-customYellow" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-customYellow" />
                )}
              </div>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden mt-3 text-sm text-gray-300"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
