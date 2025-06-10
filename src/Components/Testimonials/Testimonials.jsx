import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    quote:
      '“We had trouble understanding the right type of business coverage until Oaks & Trust stepped in. They were transparent and proactive throughout.”',
    author: '— Linda K., Sydney'
  },
  {
    quote:
      '“The claims process was so fast and stress-free. It’s clear their priority is customer satisfaction, not just paperwork.”',
    author: '— James T., Perth'
  },
  {
    quote:
      '“As a first-time homebuyer, I appreciated how they walked me through everything. I’ve already referred three friends.”',
    author: '— Melissa R., Brisbane'
  },
  {
    quote:
      '“We saved over $1,500 per year by bundling our business and home insurance—and now have more complete coverage!”',
    author: '— Rajesh P., Melbourne'
  }
]

const Testimonials = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 10000) // 10 seconds

    return () => clearInterval(interval)
  }, [])

  const slideVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.4 } }
  }

  return (
    <div className='bg-white px-7 py-14'>
      <div className='container mx-auto max-w-3xl text-center'>
        <h2 className='text-3xl font-bold text-black mb-10'>Our Clients Say It Best</h2>

        <div className='relative h-48 sm:h-52 md:h-56 lg:h-64 overflow-hidden'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={index}
              variants={slideVariants}
              initial='initial'
              animate='animate'
              exit='exit'
              className='absolute inset-0 flex flex-col justify-center items-center text-black px-6'
            >
              <p className='text-lg sm:text-xl mb-4 italic leading-relaxed'>
                {testimonials[index].quote}
              </p>
              <p className='text-customYellow font-semibold'>{testimonials[index].author}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
