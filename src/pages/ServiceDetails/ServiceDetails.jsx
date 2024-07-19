import React, { useRef } from "react";
import SubHeroSection from "../../components/SubHeroSection/SubHeroSection";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import Faq from "../../components/Faq/Faq";
import TextSlide from "../../components/TextSlide/TextSlide";
import ServiceDetailSection from "../../components/ServiceDetailSection/ServiceDetailSection";
import { useParams } from "react-router-dom";
import { services } from "../../data/data";

function ServiceDetails() {
  const contactRef = useRef(null);
  const { slug } = useParams();

  let serviceTitle;

  if (slug) {
    const service = services.find((s) => s.slug === slug);
    serviceTitle = service?.title;
  }

  return (
    <div className="bg-wholeBg">
      <SubHeroSection title={`${serviceTitle}`} />
      <ServiceDetailSection contactRef={contactRef} />
      <Faq />
      <div ref={contactRef}>
        <TextSlide contactRef={contactRef} />
      </div>
    </div>
  );
}

export default ServiceDetails;
