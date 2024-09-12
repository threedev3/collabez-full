import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

function FeatureCard({ title, icon, description }) {
  const [isHovered, setIsHovered] = useState(false);

  const featureAnimate = useRef(null);
  const iconRef = useRef(null);

  const { contextSafe } = useGSAP({ scope: featureAnimate });

  const animateViewEnter = contextSafe(() => {
    const cardWidth = featureAnimate.current.getBoundingClientRect().width;

    gsap.to(featureAnimate.current, {
      duration: 0.3,
      borderTopColor: "#FFAE00",
      ease: "back.inOut",
    });

    gsap.to(iconRef.current, {
      duration: 0.3,
      x: cardWidth - 140,
      y: 20,
      scale: 1.5,
    });
  });
  const animateViewLeave = contextSafe(() => {
    gsap.to(featureAnimate.current, {
      duration: 0.3,
      borderTopColor: "transparent",
    });

    gsap.to(iconRef.current, {
      duration: 0.3,
      x: 0,
      y: 0,
      scale: 1,
    });
  });

  return (
    <div className="box-border">
      <div
        className={`p-8 rounded-lg shadow-2xl min-w-32 xl:min-h-[333px] lg:min-h-[385px] hover:bg-heroColor/5  relative`}
        ref={featureAnimate}
        onMouseEnter={animateViewEnter}
        onMouseLeave={animateViewLeave}
        style={{
          borderTop: "12px solid transparent", // Add a transparent top border initially
        }}
      >
        <div className="flex flex-col gap-4">
          <div className="relative min-h-24 ">
            <img
              src={icon}
              alt=""
              className="h-12 w-12 object-contain"
              ref={iconRef}
            />
          </div>
          <div className="text-white text-lg font-bold mt-1">
            <h3 className="xl:min-h-0 lg:min-h-14">{title}</h3>
          </div>
          <div className="text-introColor text-sm">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
