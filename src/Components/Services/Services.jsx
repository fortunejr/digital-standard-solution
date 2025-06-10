import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { img1, img3, img4, img5, img6 } from '../../imports'

const serviceListIndividual = [
  {
    name: 'Personalised Insurance Assessments',
    desc: 'One-on-one consultations to identify ideal coverage based on lifestyle, assets, and risk profile.',
    img: img1
  },
  {
    name: 'Multi-Policy Bundling & Discounts',
    desc: 'Save money by bundling home, car, and life insurance policies.',
    img: img3
  },
  {
    name: 'Annual Policy Review & Updates',
    desc: 'We adjust your coverage as your circumstances change.',
    img: img4
  }
]

const serviceListBusinesses = [
  {
    name: 'Risk Management Planning',
    desc: 'Identify key risk exposures and develop an insurance strategy tailored to your industry.',
    img: img5
  },
  {
    name: 'Employee Benefits Insurance',
    desc: 'Group life and income protection for staff retention and peace of mind.',
    img: img6
  },
  {
    name: 'Custom SME & Corporate Packages',
    desc: 'Insurance solutions for startups, SMEs, and enterprises.',
    img: img1
  }
]

const serviceListAdded = [
  {
    name: 'Claims Assistance Hotline',
    desc: 'Quick access to support when you need to file a claim.',
    img: img3
  },
  {
    name: '24/7 Customer Support',
    desc: 'Round-the-clock assistance to help with any insurance queries.',
    img: img4
  },
  {
    name: 'Renewal Alerts & Proactive Consultation',
    desc: 'Timely reminders and strategy reviews to keep your policies up to date.',
    img: img5
  }
]

const Services = () => {
  const [showIndividual, setShowIndividual] = useState(false)
  const [showBusiness, setShowBusiness] = useState(false)
  const [showAdded, setShowAdded] = useState(false)

  const sectionToggle = (section) => {
    if (section === 'individual') setShowIndividual(!showIndividual)
    if (section === 'business') setShowBusiness(!showBusiness)
    if (section === 'added') setShowAdded(!showAdded)
  }

  const renderServiceCards = (list) => (
    <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white mt-5'>
      {list.map((item, i) => (
        <div key={i} className='bg-gray-900 p-5 rounded-3xl shadow-lg'>
          <img src={item.img} alt={item.name} className='w-full h-52 object-cover rounded-2xl mb-4' />
          <h3 className='font-bold text-xl text-customYellow mb-2'>{item.name}</h3>
          <p className='text-sm text-gray-300'>{item.desc}</p>
        </div>
      ))}
    </div>
  )

  return (
    <div className='px-7 py-10 bg-customOrange'>
      <div className='container mx-auto text-white'>
        <h2 className='text-3xl font-bold'>Services</h2>
        <h4 className='text-lg'>Tailored Services to Match Your Life and Business Needs</h4>
        <p className='w-4/5 mt-2'>
          Oaks & Trust Insurance is more than just a policy provider. We are your strategic partner in managing risk. Our services go beyond standard cover to offer expert guidance, structured planning, and end-to-end claims support.
        </p>
        <h3 className='mt-4 text-xl'>Our Key Services Include:</h3>

        {/* Section: For Individuals */}
        <div className='mt-8 cursor-pointer' onClick={() => sectionToggle('individual')}>
          <div className='flex justify-between items-center bg-black p-4 rounded-xl'>
            <h2 className='text-2xl font-semibold'>For Individuals:</h2>
            {showIndividual ? <ChevronUp /> : <ChevronDown />}
          </div>
          <AnimatePresence>
            {showIndividual && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {renderServiceCards(serviceListIndividual)}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Section: For Businesses */}
        <div className='mt-8 cursor-pointer' onClick={() => sectionToggle('business')}>
          <div className='flex justify-between items-center bg-black p-4 rounded-xl'>
            <h2 className='text-2xl font-semibold'>For Businesses:</h2>
            {showBusiness ? <ChevronUp /> : <ChevronDown />}
          </div>
          <AnimatePresence>
            {showBusiness && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {renderServiceCards(serviceListBusinesses)}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Section: Added Support Services */}
        <div className='mt-8 cursor-pointer' onClick={() => sectionToggle('added')}>
          <div className='flex justify-between items-center bg-black p-4 rounded-xl'>
            <h2 className='text-2xl font-semibold'>Added Support Services:</h2>
            {showAdded ? <ChevronUp /> : <ChevronDown />}
          </div>
          <AnimatePresence>
            {showAdded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {renderServiceCards(serviceListAdded)}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default Services
