import React from 'react';

const About = () => {
  return (
    <section className="bg-white text-black px-6 py-16 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Decade-Strong in Financing Ambitions
        </h1>

        <p className="text-lg text-black mb-8 leading-relaxed">
          <strong>Overview:</strong> Valley Oak Finance is a premier loan investment company providing
          strategic financing solutions to businesses and individuals globally. Established over 10 years ago,
          our firm has become synonymous with trust, agility, and professionalism in investment lending.
        </p>

        <p className="text-lg text-black mb-8 leading-relaxed">
          We specialize in crafting loan structures that align with our clients' long-term goals.
          Our personalized approach, commitment to transparency, and ability to act quickly set us apart
          from traditional lending institutions.
        </p>

        <div className="bg-customBlue text-white p-6 md:p-8 rounded-xl shadow-lg mb-10">
          <h2 className="text-2xl font-bold mb-3">Mission Statement</h2>
          <p className="text-base md:text-lg">
            To provide ethical, transparent, and forward-thinking investment loans that empower our clients to grow, build, and succeed.
          </p>
        </div>

        <div className="bg-customBlue text-white p-6 md:p-8 rounded-xl shadow-lg mb-10">
          <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
          <p className="text-base md:text-lg">
            A world where every entrepreneur, investor, and enterprise has access to capital that transforms potential into performance.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Core Values</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-disc list-inside text-base md:text-lg">
            <li>Integrity in every transaction</li>
            <li>Client success is our success</li>
            <li>Responsiveness and accountability</li>
            <li>Global perspective with local insight</li>
          </ul>
        </div>

        <div className="text-center mt-10">
          <button className="bg-customYellow text-black px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition duration-300">
            Let’s Grow Together
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
