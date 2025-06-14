import React from "react";
import { HiOutlineDocumentText } from 'react-icons/hi';
import { FaCalendarCheck } from 'react-icons/fa';
import { MdExplore } from 'react-icons/md';
import { img9 } from "../../imports";

const Herosection = () => {
  return (
    <div className="bg-customBlue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 flex flex-col lg:flex-row lg:justify-between items-center gap-8">
        
        {/* Left Side - Text Content */}
        <div className="lg:w-2/5 w-full">
          <p className="text-white font-bold">Digital Standard Solution</p>
          <h1 className="text-3xl lg:text-5xl font-black text-white leading-tight pb-6">
            Empowering Growth Through Strategic Investment Lending
          </h1>
          <p className="text-white text-base lg:text-sm">
            Digital Standard Solution offers tailored, low-interest investment loans for individuals and businesses ready to expand, build and lead with confidence.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-9">
            <a href="tel:+18001234567" target="_blank" rel="noopener noreferrer">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-customYellow text-black font-bold px-5 py-3 rounded-2xl">
                <HiOutlineDocumentText size={24} />
                Request a Loan Quote
              </button>
            </a>
            <a href="mailto:info@digitalstandardsolution.com">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-customYellow font-bold px-5 py-3 rounded-2xl">
                <FaCalendarCheck size={24} />
                Book a Free Consultation
              </button>
            </a>
            
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={img9}
            alt="insurance visual"
            className="w-full h-56 sm:h-72 lg:h-96 object-cover rounded-r-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
