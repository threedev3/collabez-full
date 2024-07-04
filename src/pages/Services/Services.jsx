import React from 'react'
import SubHeroSection from '../../components/SubHeroSection/SubHeroSection'
import TextSlide from '../../components/TextSlide/TextSlide'
import Faq from '../../components/Faq/Faq'
import ServicesSection from '../../components/ServicesSection/ServicesSection'

function Services() {
  return (
    <div className='bg-wholeBg'>
        <SubHeroSection title="Services" />
        <ServicesSection  />
        <Faq />
        <TextSlide />
    </div>
  )
}

export default Services