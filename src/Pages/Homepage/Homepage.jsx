import React from 'react'
import Herosection from '../../Components/Herosection/Herosection'
import About from '../../Components/About/About'
import Services from '../../Components/Services/Services'
import Testimonials from '../../Components/Testimonials/Testimonials'
import FAQs from '../../Components/FAQs/FAQs'
import Resources from '../../Components/Resources/Resources'

const Homepage = () => {
  return (
    <div>
        <Herosection />
        <About />
        <Services />
        <Resources />
        <FAQs/>
        <Testimonials />
       
    </div>
  )
}

export default Homepage