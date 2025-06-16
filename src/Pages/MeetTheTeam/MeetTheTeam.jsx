import React from 'react';
import { dannyagvar } from '../../imports'; 
import { sandragrego } from '../../imports';

const MeetTheTeam = () => {
  return (
    <div className="bg-white text-gray-800 py-10 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Meet the Team</h2>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          <img
            src={dannyagvar}
            alt="Danny Avgar"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-customBlue"
          />
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-customBlue">
              Danny Avgar
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              Chief Executive Officer, Valley Oak Finance
            </p>
            <p className="text-base leading-7 text-justify">
              Danny Avgar is a seasoned financial executive and visionary leader with over two decades of experience in investment lending and portfolio management. As CEO of Valley Oak Finance, Danny has steered the company toward becoming a trusted partner for businesses and individuals seeking capital for growth. He is recognized for his strategic insight, unwavering commitment to client success, and ability to structure flexible, transparent loan solutions that empower entrepreneurial ventures.
              <br /><br />
              Under Danny’s leadership, Valley Oak Finance has expanded its global reach, streamlined approval processes, and deepened its focus on tailored support—demonstrating his dedication to both operational excellence and long-term client relationships. His pragmatic approach combines data-driven decision-making with a hands-on, client-first mindset.
              <br /><br />
              Danny holds a Bachelor’s degree in Finance and an MBA with specialization in Corporate Strategy. He began his career at a leading investment bank, where he managed structured finance deals across multiple industries. He later founded and led several successful advisory firms before co-founding Valley Oak Finance.
              <br /><br />
              Outside of work, Danny is a mentor and speaker who regularly shares insights on financial growth strategies and responsible lending. He also actively supports initiatives aimed at promoting small business development and financial literacy.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 items-center">
            <img
            src={sandragrego}
            alt="Sandra Agrego"
            className="mt-5 w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-customBlue"
            />
            <div>
                <h3 className="text-xl md:text-2xl font-semibold text-customBlue">
                Sandra Agrego
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                Chief Operating Officer
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
