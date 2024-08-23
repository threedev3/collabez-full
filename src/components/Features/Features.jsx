import React, { useRef, useState } from "react";
import personImg from "../../assets/img/person.png";

import FeatureCard from "../FeatureCard/FeatureCard";
import { useGSAP } from "@gsap/react"; // Import useGSAP from @gsap/react
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { features } from "../../data/data";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Features() {
  const imageRef = useRef(null);
  const headRef = useRef(null);
  const textRef = useRef(null);

  const featureText = gsap.timeline({ paused: true });

  useGSAP(() => {
    featureText
      .from(headRef.current, {
        duration: 0.5,
        opacity: 0,
        y: -100,
        ease: "power1.out",
        scrollTrigger: {
          trigger: headRef.current,
          start: "top 70%",
          end: "top 30%",
          toggleActions: "play none none none",
          scrub: true,
        },
      })
      .from(textRef.current, {
        duration: 0.5,
        opacity: 0,
        y: -300,
        ease: "power1.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 70%",
          end: "top 30%",
          toggleActions: "play none none none",
          scrub: true,
        },
      })

      .from(imageRef.current, {
        duration: 0.5,
        opacity: 0,
        y: 100,
        ease: "power1.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
          scrub: true,
        },
      });

    // Floating animation for the image
    gsap.to(imageRef.current, {
      y: -20, // Adjust the value to control the movement range
      duration: 2, // Duration of the up-down movement
      ease: "sine.inOut", // Smooth easing function
      repeat: -1, // Infinite loop
      yoyo: true, // Reverse the animation
    });
  });

  return (
    <div className="lg:py-16 lg:px-8 px-4 py-8 max-w-full overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-5">
          <div className="lg:flex lg:flex-row lg:justify-between lg:items-center">
            <div className="flex flex-col gap-3">
              <p
                className="text-white xl:text-4xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold"
                ref={headRef}
              >
                Why CollabEz ?
              </p>
              <p className="text-introColor lg:text-base text-sm" ref={textRef}>
                We never faill to deliver desired result with E4!!{" "}
              </p>
            </div>
            <div className="lg:block flex justify-end">
              <img
                src={personImg}
                alt=""
                ref={imageRef}
                className="w-auto object-contain"
              />
            </div>
          </div>

          <div className="max-w-full mx-auto">
            <div className="lg:grid lg:grid-cols-4 lg:gap-6 md:grid md:grid-cols-2 md:gap-6 grid grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
