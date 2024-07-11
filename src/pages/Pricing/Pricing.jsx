import React from 'react'
import SubHeroSection from '../../components/SubHeroSection/SubHeroSection'
import Faq from '../../components/Faq/Faq'
import Contact from '../../components/Contact/Contact'
import PricingComp from '../../components/PricingComp/PricingComp'

function Pricing() {
  return (
    <div className='bg-wholeBg'>
        <SubHeroSection title="Pricing" />
        <PricingComp />
        <Faq />
        <Contact />
    </div>
  )
}

export default Pricing