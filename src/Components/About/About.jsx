import React from 'react';
import { Link } from 'react-router-dom';
import { img10, img7 } from '../../imports'
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            About Digital Standard Solution
          </h2>

          <p className="text-lg mb-4 text-black">
            <strong>Overview:</strong> Digital Standard Solution is a premier loan investment company providing strategic financing solutions to businesses and individuals globally. Established over 10 years ago, our firm has become synonymous with trust, agility, and professionalism in investment lending.
          </p>

          <p className="text-lg text-black mb-6">
            We specialize in crafting loan structures that align with our clients' long-term goals. Our personalized approach, commitment to transparency, and ability to act quickly set us apart from traditional lending institutions.
          </p>

          <Link to="/about">
            <button className="flex items-center justify-evenly bg-customBlue text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition duration-300">
              Read more...<FaArrowRight />
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div>
          <img
            src={img10}
            alt="Teamwork or Finance"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
