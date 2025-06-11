import React from 'react'
import Herosection from '../../Components/Herosection/Herosection'
import About from '../../Components/About/About'
import Services from '../../Components/Services/Services'
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs'

const Homepage = () => {
  return (
    <div>
        <Herosection />
        <About/>
        <WhyChooseUs />
        <Services />
        
    </div>
  )
}

export default Homepage