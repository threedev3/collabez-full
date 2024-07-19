import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Intro({ pageTitle, mainTitle, para }) {
  const serviceHead = useRef(null);
  const borderRef = useRef(null);
  const serviceRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    gsap.from(borderRef.current, {
      x: 100,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: borderRef.current,
        toggleActions: "play none none none",
        start: "top 50%",
        end: "top 30%",
      },
    });
    gsap.from(serviceRef.current, {
      x: -100,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: serviceRef.current,
        toggleActions: "play none none none",
        start: "top 50%",
        end: "top 30%",
      },
    });

    gsap.from(serviceHead.current, {
      y: -100,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: serviceHead.current,
        toggleActions: "play none none none",
        start: "top 50%",
        end: "top 30%",
      },
    });
    gsap.from(textRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: textRef.current,
        toggleActions: "play none none none",
        start: "top 50%",
        end: "top 30%",
      },
    });
  });

  return (
    <div className="flex flex-col gap-5  max-w-full">
      <div className="flex flex-row items-center gap-4">
        <div
          className="w-16 h-0 border-[1px] border-serviceText"
          ref={borderRef}
        ></div>
        <div>
          <h3
            className="text-serviceText lg:text-lg text-sm uppercase"
            ref={serviceRef}
          >
            {pageTitle}
          </h3>
        </div>
      </div>

      <div className="flex flex-col gap-8 max-w-full">
        <h3
          className="xl:text-5xl lg:text-4xl md:text-4xl sm:text-3xl text-3xl text-white font-bold capitalize"
          ref={serviceHead}
        >
          {mainTitle}
        </h3>

        <p className="text-serviceText lg:text-base text-sm" ref={textRef}>
          {para}
        </p>
      </div>
    </div>
  );
}

export default Intro;
