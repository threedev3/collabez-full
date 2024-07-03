import React from 'react'
import SubHeroSection from '../../components/SubHeroSection/SubHeroSection'
import TextSlide from '../../components/TextSlide/TextSlide'
import Faq from '../../components/Faq/Faq'

function Services() {
  return (
    <div className='bg-wholeBg'>
        <SubHeroSection title="Services" />
        <Faq />
        <TextSlide />
    </div>
  )
}

export default Services