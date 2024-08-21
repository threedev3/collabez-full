import React, { useEffect, useRef } from "react";
import Contact from "../../components/Contact/Contact";
import SubHeroSection from "../../components/SubHeroSection/SubHeroSection";
import CaseSection from "../../components/CaseSection/CaseSection";
import { useParams } from "react-router-dom";
import { projects } from "../../data/data";
import NotFoundPage from "../../components/NotFoundPage/NotFoundPage";

function CaseStudyDetail() {
  const contactRef = useRef(null);
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <NotFoundPage />;
  }

  return (
    <div className="bg-wholeBg">
      <SubHeroSection title={project.title} />
      <CaseSection contactRef={contactRef} />
      <div ref={contactRef}>
        <Contact contactRef={contactRef} />
      </div>
    </div>
  );
}

export default CaseStudyDetail;
