import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react"; // Import useGSAP from @gsap/react
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

function FeatureCard({ title, icon, description }) {
  const [isHovered, setIsHovered] = useState(false);

    const featureAnimate = useRef(null)
    const iconRef = useRef(null)

  const { contextSafe } = useGSAP({ scope: featureAnimate });

  const animateViewEnter = contextSafe(() => {

    const cardWidth = featureAnimate.current.getBoundingClientRect().width;

    gsap.to(featureAnimate.current, { 
      duration: 0.3,
      borderTop: "12px solid #FFAE00",
      ease: "back.inOut"
    });

    gsap.to(iconRef.current, {
        duration: 0.3,
        x: cardWidth - 140,
        y: 30,
        scale: 2
    })
  });
  const animateViewLeave = contextSafe(() => {
    gsap.to(featureAnimate.current, {     
      duration: 0.3,
      borderTop: "none"
    });

    gsap.to(iconRef.current, {
        duration: 0.3,
        x: 0,
        y: 0,
        scale: 1
    })
  });

  return (
    <div
      className={`p-8 rounded-lg shadow-2xl min-w-32 hover:bg-heroColor/5 box-border`}
      ref={featureAnimate}
      onMouseEnter={animateViewEnter}
      onMouseLeave={animateViewLeave}
    >
      <div className="flex flex-col gap-4">
        <div className="relative min-h-28 h-12 w-12">
          <img src={icon} alt="" className={`'}`} ref={iconRef} />
        </div>
        <div className="text-white text-lg font-bold">
          <h3>{title}</h3>
        </div>
        <div className="text-introColor text-sm">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
