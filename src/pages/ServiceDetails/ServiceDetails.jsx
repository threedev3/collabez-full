import React, { useRef } from "react";
import SubHeroSection from "../../components/SubHeroSection/SubHeroSection";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import Faq from "../../components/Faq/Faq";
import TextSlide from "../../components/TextSlide/TextSlide";
import ServiceDetailSection from "../../components/ServiceDetailSection/ServiceDetailSection";

function ServiceDetails() {
  const contactRef = useRef(null);

  return (
    <div className="bg-wholeBg">
      <SubHeroSection title="Services" />
      <ServiceDetailSection contactRef={contactRef} />
      <Faq />
      <div ref={contactRef}>
        <TextSlide contactRef={contactRef} />
      </div>
    </div>
  );
}

export default ServiceDetails;
