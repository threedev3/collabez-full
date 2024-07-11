import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function PricingCard({ mode, price, duration, features }) {
  const [isHovered, setIsHovered] = useState(false);
  const priceCardRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useGSAP(() => {
    gsap.from(priceCardRef.current, {
    //   x: 0,
      opacity: 0,
      duration: 1,
      ease: "back.inOut",
    //   stagger: 0.2,
      scrollTrigger: {
        trigger: priceCardRef.current,
        toggleActions: "play none none none",
        start: "top 70%",
        end: "top 50%",
        
      },
    });
  });

  return (
    <div
      ref={priceCardRef}
      className={` min-h-[690px] flex flex-col priceCard ${
        isHovered
          ? "transform transition-all duration-300 hover:-translate-y-10"
          : "transform transition-all duration-300 hover:translate-y-0"
      } `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`bg-serviceCardTwoFrom md:min-h-[240px] min-h-[300px] w-full flex flex-col justify-evenly items-center gap-6 p-6 z-10 ${
          isHovered
            ? "bg-[url('/src/assets/img/priceBg.png')] bg-no-repeat bg-cover bg-center transition-all duration-200"
            : ""
        }`}
      >
        <div>
          <h3 className="text-white text-3xl">{mode}</h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="text-white flex flex-row gap-2">
            <sup className="text-2xl">$</sup>
            <h3 className="text-7xl font-bold tracking-wide">{price}</h3>
            <sup className="text-2xl">.99</sup>
          </div>
          <div>
            <h3 className="text-white text-lg">{duration}</h3>
          </div>
        </div>
      </div>

      <div
        className={`min-h-[450px] w-full flex flex-col justify-evenly items-center gap-6 p-6 `}
        style={{
          background: `linear-gradient(to bottom, #080A12, #080a1200)`,
        }}
      >
        <ul className="flex flex-col gap-5 text-white items-center z-10">
          {features.map((item, index) => (
            <li key={index} className="text-lg">
              {item}
            </li>
          ))}
        </ul>

        <div className="py-4 px-8 text-white border-2 border-heroColor rounded-full bg-transparent hover:bg-heroColor transition-all duration-300 cursor-pointer text-lg z-10">
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default PricingCard;
