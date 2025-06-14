import React from 'react'
import { logo2 } from '../../imports'
import { FaFacebook, FaInstagram, FaLinkedinIn  } from "react-icons/fa";
import { Link } from 'react-router';

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();
  return (
    <footer className='bg-gray-900'>
  <div className='container mx-auto px-4 sm:px-6 lg:px-10 py-10'>
    <div className='flex flex-col lg:flex-row justify-between gap-10'>
      {/* Logo and Description */}
      <div className='lg:w-1/3'>
      <Link to = {'/'}>
        <img className='h-14 mb-4' src={logo2} alt="Digital Standard Solution logo" />
      </Link>
        <p className='text-white text-sm leading-relaxed'>
          Let’s Discuss Your Insurance Needs
        </p>
        <p className='text-white text-sm leading-relaxed'>Business Hours:</p>
        <p className='text-white text-sm leading-relaxed'>Monday–Friday, 9:00 AM to 6:00 PM (EST)</p>
      </div>

      {/* Contact Info */}
      <div className='lg:w-1/3'>
        <h2 className='font-bold text-white pb-3 pt-7 lg:pt-0'>Contact Information</h2>
        <p className='text-white text-sm'>📍 Oaks & Trust Insurance Headquarters
        Level 10, 345 Collins Street
        Melbourne, VIC 3000
        </p>
        <p className='text-white text-sm mt-2'>📧 info@digitalstandardsolution.com </p>
        <p className='text-white text-sm mt-2'>📞 +1 (800) 123-4567</p>
      </div>

      {/* Social Icons */}
   
    </div>

    {/* Copyright */}
    <p className="text-center text-sm mt-10 text-white">
      &copy; {year} Oaks & Trust Insurance
    </p>
  </div>
</footer>
  )
}

export default Footer