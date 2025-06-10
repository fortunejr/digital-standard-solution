import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { HiOutlineDocumentText } from 'react-icons/hi'
import { MdOutlineMail } from "react-icons/md";
import { FaCalendarCheck } from 'react-icons/fa';
import { MdExplore } from 'react-icons/md';
import "./herosection.css";
import { img2, img9 } from "../../imports";

const Herosection = () => {
  const images = [
    {
      imgUrl:
        "https://img.freepik.com/premium-photo/suitcase-with-famous-monuments-isolated-with-clouds-famous-buildings-landmarks-towers-travel_741269-8.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_hybrid",
      alt: "Travel img",
    },
    {
      imgUrl:
        "https://img.freepik.com/free-photo/woman-checking-map-autumn-travel-destination_23-2148634143.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_incoming",
      alt: "Travel img",
    },
    {
      imgUrl:
        "https://img.freepik.com/free-photo/trendy-looking-african-american-tourist-with-backpack-hat-sunglasses-studying-directions-using-city-guide-while-exploring-sights-landmarks-resort-town_273609-952.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_incoming",
      alt: "Travel img",
    },
    {
      imgUrl:
        "https://img.freepik.com/premium-photo/untitled-design-5_1210786-40.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_hybrid",
      alt: "Travel img",
    },
  ];

  return (
    <div className="">
      <div className="bg-customOrange">
        <div className="lg:px-7 pt-14 container mx-auto px-7  h-fit lg:p-28 p-8 gap-4 flex flex-col lg:flex-row lg:justify-between items-center">
          <div className="lg:w-2/5 ">
            <p className="text-white font-bold">
              Oaks & Trust Insurance
            </p>
            <h1 className="lg:text-5xl leading-tight font-black text-3xl text-white pb-6 slide-in-bottom">
              Australia’s Trusted Partner in Insurance
              Tailored Protection for Every Stage of Life and Business

            </h1>
            <p className="lg:text-sm text-white lg:w-120 slide-in-left">
              At Oaks & Trust Insurance, we believe in protection with purpose. Whether you're a homeowner, entrepreneur, or investor, we provide bespoke insurance solutions that protect your assets, mitigate risks, and give you peace of mind in an ever-changing world.

            </p>

            <div className="pt-9 flex items-center gap-3 slide-in-left2">
              <a target="_blank" href="https://wa.me/2348135217518">
                <button className="lg:rounded-2xl lg:px-3 flex gap-2 items-center bg-white p-4 rounded-2xl font-bold text-black cursor-pointer">
                  <HiOutlineDocumentText size={27} />
                  Get A Free Quote
                </button>
              </a>
              <a href="mailto:info@lumigrid.com.ng">
                <button className="lg:rounded-2xl lg:px-5 flex gap-2 items-center border-white hover:bg-customYellow border-2 p-4 rounded-2xl font-bold text-white cursor-pointer">
                  <FaCalendarCheck size={27} />
                  Book a Consultation
                </button>
              </a>
              <a href="mailto:info@lumigrid.com.ng">
                <button className="lg:rounded-2xl lg:px-5 flex gap-2 items-center border-white hover:bg-customYellow border-2 p-4 rounded-2xl font-bold text-white cursor-pointer">
                  <MdExplore size={27} />
                  Explore Our Products
                </button>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 pt-5 lg:pt-0 lg:mb-0">
            <img
              className="object-cover w-full h-48 md:h-72 lg:h-96 rounded-3xl slide-in-blurred-bottom"
              src={img9}
              alt="solar panel"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
