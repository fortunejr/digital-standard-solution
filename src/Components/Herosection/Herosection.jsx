import React from "react";
import { HiOutlineDocumentText } from 'react-icons/hi';
import { FaCalendarCheck } from 'react-icons/fa';
import { MdExplore } from 'react-icons/md';
import { img9 } from "../../imports";

const Herosection = () => {
  return (
    <div className="bg-customOrange">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 flex flex-col lg:flex-row items-center gap-8">
        
        {/* Left Side - Text Content */}
        <div className="lg:w-2/5 w-full">
          <p className="text-white font-bold">Oaks & Trust Insurance</p>
          <h1 className="text-3xl lg:text-5xl font-black text-white leading-tight pb-6">
            Australia’s Trusted Partner in Insurance<br />
            Tailored Protection for Every Stage of Life and Business
          </h1>
          <p className="text-white text-base lg:text-sm">
            At Oaks & Trust Insurance, we believe in protection with purpose. Whether you're a homeowner, entrepreneur, or investor, we provide bespoke insurance solutions that protect your assets, mitigate risks, and give you peace of mind in an ever-changing world.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-9">
            <a href="https://wa.me/2348135217518" target="_blank" rel="noopener noreferrer">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black font-bold px-5 py-3 rounded-2xl">
                <HiOutlineDocumentText size={24} />
                Get A Free Quote
              </button>
            </a>
            <a href="mailto:info@lumigrid.com.ng">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-customYellow font-bold px-5 py-3 rounded-2xl">
                <FaCalendarCheck size={24} />
                Book a Consultation
              </button>
            </a>
            <a href="mailto:info@lumigrid.com.ng">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-customYellow font-bold px-5 py-3 rounded-2xl">
                <MdExplore size={24} />
                Explore Our Products
              </button>
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={img9}
            alt="insurance visual"
            className="w-full h-56 sm:h-72 lg:h-96 object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
