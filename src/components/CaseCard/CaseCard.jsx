import React, { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function CaseCard({ item }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const caseCardRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const slug = item.slug;

  const handleCaseClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/portfolio/${slug}`);
  };

  useGSAP(() => {
    gsap.from(caseCardRef.current, {
      //   x: 0,
      opacity: 0,
      duration: 1,
      ease: "back.inOut",
      //   stagger: 0.2,
      scrollTrigger: {
        trigger: caseCardRef.current,
        toggleActions: "play none none none",
        start: "top 70%",
        end: "top 50%",
      },
    });
  });

  return (
    <div
      ref={caseCardRef}
      className={`h-[500px] w-full focus:outline-none flex flex-row gap-6 transform mt-16 relative cursor-pointer mb-10 ${
        isHovered
          ? "transform transition-all duration-300 hover:-translate-y-10"
          : "transform transition-all duration-300 hover:translate-y-0"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCaseClick}
    >
      <img
        src={item.thumbnail}
        alt="sliderImg"
        className="h-full w-full object-cover transition-transform duration-300"
      />
      <div className="absolute inset-0 px-12 py-8 bg-black bg-opacity-0 hover:bg-opacity-60 transition-all duration-300 flex items-end justify-start text-white opacity-0 hover:opacity-100 p-4">
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl mb-2">{item.title}</h3>
          <p className="text-sm line-clamp-2">{item.description}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default CaseCard;
