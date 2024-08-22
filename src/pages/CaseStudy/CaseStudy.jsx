import React from "react";
import SubHeroSection from "../../components/SubHeroSection/SubHeroSection";
import Contact from "../../components/Contact/Contact";
import CaseSlider from "../../components/CaseSlider/CaseSlider";

function CaseStudy() {
  return (
    <div className="bg-wholeBg">
      <SubHeroSection title="Case Study" />
      <CaseSlider />
      <Contact />
    </div>
  );
}

export default CaseStudy;
