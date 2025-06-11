import React from "react";
import { FaArrowRight } from "react-icons/fa";

const blogPosts = [
  "The Smart Way to Use a Business Loan in 2025",
  "Why Investment Loans Are the Future of Entrepreneurial Financing",
];

const Blog = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">Blog</h2>
        <p className="text-lg text-gray-600 mb-8">
          Insights to Keep You Informed and Empowered
        </p>

        <ul className="space-y-4">
          {blogPosts.map((title, index) => (
            <li key={index} className="group">
              <a
                href="#"
                className="flex items-center justify-between p-4 rounded-xl bg-white shadow hover:bg-customYellow/20 transition duration-300"
              >
                <span className="text-gray-800 font-medium group-hover:text-customBlue">
                  {title}
                </span>
                <FaArrowRight className="text-customBlue group-hover:translate-x-1 transition-transform" />
              </a>
            </li>
          ))}
        </ul>

        <p className="text-sm text-gray-500 mt-10">
          Each blog post is written by our in-house experts and partners, offering real-world insights, case studies, and news updates.
        </p>
      </div>
    </div>
  );
};

export default Blog;
