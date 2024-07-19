import React, { useRef } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import Stats from "../../components/Stats/Stats";
import Portfolio from "../../components/Portfolio/Portfolio";
import Features from "../../components/Features/Features";
import TextSlide from "../../components/TextSlide/TextSlide";

function Home() {
  const homeRef = useRef(null);
  const portfolioRef = useRef(null);
  const featuresRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <div ref={homeRef} className="bg-wholeBg">
      <HeroSection
        portfolioRef={portfolioRef}
        featuresRef={featuresRef}
        contactRef={contactRef}
      />

      <Stats borders="border-t-2 border-t-borderColor border-b-2 border-b-borderColor" />
      <div ref={portfolioRef}>
        <Portfolio />
      </div>
      <div ref={featuresRef}>
        <Features />
      </div>
      <div ref={contactRef}>
        <TextSlide
          portfolioRef={portfolioRef}
          featuresRef={featuresRef}
          contactRef={contactRef}
          homeRef={homeRef}
        />
      </div>
    </div>
  );
}

export default Home;
