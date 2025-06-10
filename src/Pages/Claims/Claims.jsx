import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiOutlineDocumentSearch } from "react-icons/hi";

const Claims = () => {
  const expectations = [
    "A dedicated claims advisor assigned to your case",
    "24/7 online claims portal",
    "Guidance on documentation and timelines",
    "Regular updates until your case is resolved",
    "Fair assessments and transparent communications",
  ];

  const steps = [
    "Notify us via phone, email, or portal",
    "Submit supporting documents",
    "Advisor assigned and claim reviewed",
    "Receive outcome and next steps",
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-customOrange mb-2">Claims</h2>
          <p className="text-gray-700 text-base max-w-2xl mx-auto">
            Filing a Claim with Confidence
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">What You Can Expect:</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
            {expectations.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">How to Lodge a Claim:</h3>
          <ol className="list-decimal list-inside text-gray-600 space-y-2 pl-4">
            {steps.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </div>

        <div className="bg-customOrange text-white rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FaPhoneAlt size={20} />
            <span className="font-medium">Claims Hotline: 1300 000 789</span>
          </div>
          <div className="flex items-center gap-3">
            <HiOutlineDocumentSearch size={24} />
            <a href="#" className="underline hover:text-yellow-300 font-medium">
              Submit Online
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Claims;
