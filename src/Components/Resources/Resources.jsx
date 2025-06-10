import React from 'react'

const availableResources = [
  'Premium & Coverage Calculators',
  'Risk Assessment Checklist for Businesses',
  'Policy Comparison Sheets',
  'Webinars & Insurance Planning Workshops',
  'Seasonal Safety Tips & Blog Library'
]

const downloadableEbooks = [
  '“The Ultimate Guide to Home Insurance in Australia”',
  '“Protecting Your Business in a Digital World”',
  '“Understanding Life Insurance: A Family Planning Tool”'
]

const Resources = () => {
  return (
    <div className='bg-white px-7 py-14 text-black'>
      <div className='container mx-auto max-w-6xl'>
        <h2 className='text-3xl font-bold mb-3 text-black'>Resources</h2>
        <p className='mb-10 text-black'>Insurance Tools & Educational Resources</p>

        <p className='mb-8 text-lg text-black-300'>
          Stay informed and in control with tools and guides designed to simplify your insurance journey.
        </p>

        <div className='grid md:grid-cols-2 gap-12'>
          {/* Available Resources */}
          <div>
            <h3 className='text-2xl font-semibold text-customOrange mb-4'>Available Resources:</h3>
            <ul className='space-y-4 text-base'>
              {availableResources.map((item, index) => (
                <li key={index}>
                  <a href='#' className='hover:underline hover:text-black transition'>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Downloadable eBooks */}
          <div>
            <h3 className='text-2xl font-semibold text-customOrange mb-4'>Downloadable eBooks:</h3>
            <ul className='space-y-4 text-base'>
              {downloadableEbooks.map((item, index) => (
                <li key={index}>
                  <a href='#' className='hover:underline hover:text-black transition'>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resources
