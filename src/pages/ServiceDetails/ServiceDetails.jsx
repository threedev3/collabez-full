import React, { useEffect, useRef } from "react";
import SubHeroSection from "../../components/SubHeroSection/SubHeroSection";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import Faq from "../../components/Faq/Faq";
import TextSlide from "../../components/TextSlide/TextSlide";
import ServiceDetailSection from "../../components/ServiceDetailSection/ServiceDetailSection";
import { useNavigate, useParams } from "react-router-dom";
import { services } from "../../data/data";
import NotFoundPage from "../../components/NotFoundPage/NotFoundPage";

function ServiceDetails() {
  const contactRef = useRef(null);
  const { slug } = useParams();

  // Find the service by slug
  const service = services.find((s) => s.slug === slug);

  // If the service is not found, render the NotFound component
  if (!service) {
    return <NotFoundPage />;
  }

  return (
    <div className="bg-wholeBg">
      <SubHeroSection title={service.title} />
      <ServiceDetailSection contactRef={contactRef} />
      <Faq />
      <div ref={contactRef}>
        <TextSlide contactRef={contactRef} />
      </div>
    </div>
  );
}

export default ServiceDetails;
