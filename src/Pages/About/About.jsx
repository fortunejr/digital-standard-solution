import React from 'react'
import { img10 } from '../../imports'
import { FaShieldAlt, FaLightbulb } from 'react-icons/fa'
import { MdOutlineHandshake } from 'react-icons/md'
import { AiOutlineEyeInvisible } from 'react-icons/ai'

const About = () => {
  return (
    <div className="bg-customOrange">
      <div className="container mx-auto px-4 py-10 fade-in-bottom">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              className="rounded-3xl w-full h-auto object-cover"
              src={img10}
              alt="Oaks and Trust Insurance"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-white">
            <h2 className="text-5xl font-bold mb-5">Our Story</h2>
            <p className="text-sm lg:text-base leading-relaxed mb-6">
              Oaks & Trust Insurance was founded with a clear purpose: to offer dependable, high-quality insurance that Australians can trust. With years of combined experience in the finance and insurance sectors, our leadership and advisors understand the importance of protecting what matters most—from homes and families to businesses and investments.
            </p>

            <h2 className="text-3xl font-semibold mb-3">Our Mission</h2>
            <p className="mb-6">
              To empower Australians with insurance that offers genuine protection, tailored flexibility, and personal service—without hidden surprises.
            </p>

            <h2 className="text-3xl font-semibold mb-3">Our Vision</h2>
            <p className="mb-6">
              To be Australia’s most client-focused insurance brand, known for ethical practices, innovation, and long-term client partnerships.
            </p>

            <h3 className="text-white font-bold text-2xl mb-5">Core Values</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center bg-white text-black p-4 rounded-xl shadow-md">
                <AiOutlineEyeInvisible size={24} className="text-customOrange mr-3" />
                <span><strong>Integrity:</strong> We put transparency and honesty first.</span>
              </div>
              <div className="flex items-center bg-white text-black p-4 rounded-xl shadow-md">
                <FaShieldAlt size={24} className="text-customOrange mr-3" />
                <span><strong>Reliability:</strong> We’re there for you when it matters most.</span>
              </div>
              <div className="flex items-center bg-white text-black p-4 rounded-xl shadow-md">
                <MdOutlineHandshake size={24} className="text-customOrange mr-3" />
                <span><strong>Service:</strong> Every client matters—your needs, your goals, your protection.</span>
              </div>
              <div className="flex items-center bg-white text-black p-4 rounded-xl shadow-md">
                <FaLightbulb size={24} className="text-customOrange mr-3" />
                <span><strong>Innovation:</strong> We combine technology with personalisation to improve insurance delivery.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About
