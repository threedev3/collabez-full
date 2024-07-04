import React from "react";
import SubHeroSection from "../../components/SubHeroSection/SubHeroSection";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import Faq from "../../components/Faq/Faq";
import TextSlide from "../../components/TextSlide/TextSlide";
import ServiceDetailSection from "../../components/ServiceDetailSection/ServiceDetailSection";

function ServiceDetails() {
  return (
    <div className="bg-wholeBg">
      <SubHeroSection title="Services" />
      <ServiceDetailSection />
      <Faq />
      <TextSlide />
    </div>
  );
}

export default ServiceDetails;
