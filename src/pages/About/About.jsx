import React from 'react'
import SubHeroSection from '../../components/SubHeroSection/SubHeroSection'
import AboutSection from '../../components/AboutSection/AboutSection'
import Stats from '../../components/Stats/Stats'
import Contact from '../../components/Contact/Contact'
import Team from '../../components/Team/Team'

function About() {
  return (
    <div className='bg-wholeBg'>
        <SubHeroSection title="About Us" />
        <AboutSection />
        <Stats borders="border-none" />
        <Team />
        <Contact />
    </div>
  )
}

export default About