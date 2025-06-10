import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqData = [
  {
    question: 'Do I need insurance if I already have savings?',
    answer:
      'Yes. Insurance protects against large, unexpected losses that could quickly drain savings—such as home damage, lawsuits, or medical emergencies.'
  },
  {
    question: 'What is the difference between Public Liability and Professional Indemnity?',
    answer:
      'Public Liability covers physical injuries or property damage; Professional Indemnity covers financial loss from errors or omissions in professional services.'
  },
  {
    question: 'Can I adjust my policy mid-term?',
    answer:
      'Yes. We offer policy reviews at any time to adapt your coverage as life or business needs change.'
  },
  {
    question: 'Are there waiting periods?',
    answer:
      'Some policies—like income protection—have waiting periods. Your advisor will explain these when tailoring your plan.'
  }
]

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className='bg-customOrange px-7 py-14'>
      <div className='container mx-auto max-w-4xl'>
        <h2 className='text-3xl font-bold text-white mb-3'>FAQ</h2>
        <p className='text-white mb-10'>Answers to Your Most Common Questions</p>

        <div className='space-y-5'>
          {faqData.map((item, index) => (
            <div
              key={index}
              className='bg-black rounded-2xl p-5 shadow-lg text-white'
            >
              <div
                className='flex justify-between items-center cursor-pointer'
                onClick={() => toggle(index)}
              >
                <h4 className='font-semibold text-lg'>{item.question}</h4>
                {openIndex === index ? (
                  <ChevronUp className='w-5 h-5 text-customYellow' />
                ) : (
                  <ChevronDown className='w-5 h-5 text-customYellow' />
                )}
              </div>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className='overflow-hidden mt-3 text-sm text-gray-300'
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQs
