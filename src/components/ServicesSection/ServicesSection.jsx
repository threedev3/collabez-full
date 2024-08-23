import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import ServiceCard from "../ServiceCard/ServiceCard";

import { services } from "../../data/data.js";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function ServicesSection() {
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
    <div className="max-w-full relative lg:py-8 py-4 lg:px-8 px-4 overflow-x-hidden overflow-y-hidden ">
      {/* <div className="bg-[url('/src/assets/img/workingBg.png')] bg-no-repeat bg-cover bg-top absolute h-screen w-full z-10"></div> */}
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-5 mb-12">
          <div className="flex flex-row items-center gap-4">
            <div
              className="w-16 h-0 border-[1px] border-serviceText"
              ref={borderRef}
            ></div>
            <div>
              <h3
                className="text-serviceText text-lg uppercase"
                ref={serviceRef}
              >
                Our Services
              </h3>
            </div>
          </div>

          <div className="flex flex-col gap-4 max-w-2xl">
            <h3
              className="xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl text-2xl text-white font-bold"
              ref={serviceHead}
            >
              Unleashing Your Brand's Digital{" "}
              <span className="text-heroColor">Potential.</span>
            </h3>

            <p className="text-white lg:text-sm text-sm" ref={textRef}>
              At <span className="text-heroColor">CollabEZ</span>, we offer a
              suite of digital services designed to take your brand from
              ordinary to extraordinary. From logo design to social media
              management, we've got you covered.
            </p>
          </div>
        </div>
        <div>
          <div className="lg:grid lg:grid-cols-3 lg:gap-7 md:grid md:grid-cols-2 md:gap-7 grid grid-cols-1 gap-7 shadow-sm ">
            {services.map((item, index) => (
              <ServiceCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
