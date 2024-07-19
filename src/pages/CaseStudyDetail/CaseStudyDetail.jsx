import React, { useEffect, useRef } from "react";
import Contact from "../../components/Contact/Contact";
import SubHeroSection from "../../components/SubHeroSection/SubHeroSection";
import CaseSection from "../../components/CaseSection/CaseSection";
import { useParams } from "react-router-dom";
import { projects } from "../../data/data";

function CaseStudyDetail() {
  const contactRef = useRef(null);
  const { slug } = useParams();

  let projectTitle;

  if (slug) {
    const project = projects.find((p) => p.slug === slug);
    projectTitle = project?.title;
  }

  return (
    <div className="bg-wholeBg">
      <SubHeroSection title={`${projectTitle}`} />
      <CaseSection contactRef={contactRef} />
      <div ref={contactRef}>
        <Contact contactRef={contactRef} />
      </div>
    </div>
  );
}

export default CaseStudyDetail;
