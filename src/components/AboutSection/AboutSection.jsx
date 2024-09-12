import React, { useRef } from "react";
import aboutImg1 from "../../assets/img/about1.png";
import aboutImg2 from "../../assets/img/about2.png";
import BeDifferent from "../BeDifferent/BeDifferent";
import { useGSAP } from "@gsap/react"; // Import useGSAP from @gsap/react
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function AboutSection() {
  const aboutRef = useRef(null);
  const aboutHead = useRef(null);
  const aboutPara = useRef(null);
  const aboutPara2 = useRef(null);
  const aboutImg = useRef(null);
  const aboutImg2Ref = useRef(null);
  const firstSec = useRef(null);

  // const aboutSection = gsap.timeline({ paused: true });

  useGSAP(() => {
    gsap
      .from(".about-anim", {
        duration: 0.5,
        opacity: 0,
        y: -100,
        stagger: 0.2,
        ease: "power1.out",
        scrollTrigger: {
          trigger: firstSec.current,
          start: "top 90%",
          end: "top 30%",
          toggleActions: "play none none none",
          once: true,
        },
      })
      gsap.from(aboutImg.current, {
        duration: 1,
        opacity: 0,
        y: -100,
        ease: "power1.out",
        scrollTrigger: {
          trigger: aboutImg.current,
          start: "top 70%",
          end: "top 30%",
          toggleActions: "play none none none",
          once: true,
        },
      })
      gsap.from(aboutImg2Ref.current, {
        duration: 0.3,
        x: 100,
        opacity: 0,
        ease: "power1.out",
        scrollTrigger: {
          trigger: aboutImg2Ref.current,
          start: "top 90%",
          end: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      })
      gsap.from(aboutPara2.current, {
        duration: 0.3,
        x: -300,
        opacity: 0,
        ease: "power1.out",
        scrollTrigger: {
          trigger: aboutPara2.current,
          start: "top 90%",
          end: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      });
  });

  return (
    <>
      <div
        className="bg-wholeBg lg:pt-24 lg:px-8 pt-8 px-4 max-w-full shadow-2xl overflow-x-hidden"
        ref={aboutRef}
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col gap-16">
            <div className="lg:flex lg:flex-row lg:justify-between lg:items-center flex flex-col gap-12">
              <div
                className="flex flex-col gap-3 xl:max-w-2xl lg:max-w-xl"
                ref={firstSec}
              >
                <p
                  className="text-white xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl text-2xl font-bold about-anim"
                  ref={aboutHead}
                >
                  We're Not Just a Company, a Creative Revolution
                </p>
                <p
                  className="text-introColor lg:text-base text-sm about-anim"
                  ref={aboutPara}
                >
                  Welcome to CollabEz, where we believe in the power of
                  creativity, innovation, and daring to be different. We're not
                  just a digital agency—we're a creative revolution, dedicated
                  to transforming the ordinary into the extraordinary.
                </p>
              </div>

              <div className="lg:block flex justify-center lg:w-96 ">
                <img
                  src={aboutImg1}
                  alt=""
                  ref={aboutImg}
                  className="object-cover lg:w-full w-72"
                />
              </div>
            </div>

            <div className="lg:flex lg:flex-row lg:justify-between lg:items-center flex flex-col gap-12">
              <div className="lg:block flex justify-center lg:w-96 ">
                <img
                  src={aboutImg2}
                  alt=""
                  ref={aboutImg2Ref}
                  className="object-cover lg:w-full w-72"
                />
              </div>

              <div className="flex flex-col gap-3 xl:max-w-2xl lg:max-w-xl">
                <p
                  className="text-introColor lg:text-base text-sm"
                  ref={aboutPara2}
                >
                  CollabEz was born out of a desire to do more than just follow
                  the digital trends—we wanted to set them. Our journey began in
                  a small office with a big dream: to create digital experiences
                  that not only meet our clients' needs but exceed their
                  expectations. Today, we're proud to have grown into a
                  full-service digital agency, helping brands across the UK
                  ignite their digital potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:h-[75vh] md:h-[60vh] sm:h-[50vh] h-[40vh] relative">
        <BeDifferent />
      </div>
    </>
  );
}

export default AboutSection;
