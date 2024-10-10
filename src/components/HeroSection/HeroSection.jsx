import { useEffect, useRef, useState } from "react";
import arrowImg from "../../assets/img/arrow.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import HeroCircle from "../HeroCircle/HeroCircle";
import Navbar from "../Navbar/Navbar";
import TopLine from "../TopLine/TopLine";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function HeroSection({ portfolioRef, featuresRef, contactRef }) {
  const mainContainer = useRef(null);

  const viewAnimate = useRef(null);
  const headingRef = useRef(null);
  const heroTextRef = useRef(null);
  const introHead = useRef(null);
  const introPara = useRef(null);
  const viewBtn = useRef(null);
  const roundRef1 = useRef(null);
  const roundRef2 = useRef(null);
  const viewText = useRef(null);
  const animatedLogoRef = useRef(null);

  const sections = {
    Home: mainContainer,
    Portfolio: portfolioRef,
    Features: featuresRef,
    Contact: contactRef,
  };

  const { contextSafe } = useGSAP({ scope: mainContainer });

  useEffect(() => {
    const letters = headingRef.current.querySelectorAll("span");
    gsap.fromTo(
      letters,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.04,
        ease: "back.inOut",
      }
    );
  }, []);
  useGSAP(() => {
    gsap.from(heroTextRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
    });
  });
  useGSAP(() => {
    // Animate the logo
    gsap.fromTo(
      animatedLogoRef.current,
      { scale: 0, rotation: -180 },
      {
        scale: 1,
        rotation: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.3)",
      }
    );
  });

  const handleNavClick = (section) => {
    const targetRef = sections[section];

    if (targetRef && targetRef.current) {
      window.scrollTo({
        top: targetRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  let animationRef = null;

  const animateViewEnter = contextSafe(() => {
    gsap.to(viewAnimate.current, {
      x: 50,
      duration: 1,
      color: "#ffffff",
    });

    animationRef = gsap
      .timeline()
      .to(roundRef2.current, {
        x: 20,
        duration: 0,
      })
      .to(viewText.current, {
        color: "#ffffff",
        duration: 0.3,
      })
      .to([roundRef1.current, roundRef2.current], {
        rotationY: 360,
        duration: 1.3,
        ease: "linear",
        transformOrigin: "center center",
      })
      .to(
        [roundRef1.current, roundRef2.current],
        {
          background:
            "linear-gradient(55deg, #FFAE00 0%, #ffc549 50%, #ff9f00 100%)",
          duration: 0.5,
          ease: "power1.out",
        },
        0
      );
  });
  const animateViewLeave = contextSafe(() => {
    gsap.to(viewAnimate.current, {
      x: 0,
      duration: 1,
    });
    gsap.to(roundRef2.current, {
      x: 0,
      duration: 0.5,
    });
    gsap.to(viewText.current, {
      color: "#D9D9D9",
      duration: 0.3,
    });

    if (animationRef) {
      animationRef.kill();
      gsap.to([roundRef1.current, roundRef2.current], {
        rotationY: 0,
        background: "transparent",
        duration: 1,
        ease: "power1.out",
      });
    }
  });

  const chars = headingRef.current;

  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className="char"
        style={{
          display: "inline-block",
          whiteSpace: char === " " ? "pre" : "normal",
        }}
      >
        {char}
      </span>
    ));
  };

  return (
    <>
      <div
        className="bg-[url('/src/assets/img/herobg2.png')] bg-no-repeat bg-cover bg-bottom max-w-full relative overflow-hidden"
        ref={mainContainer}
      >
        <div className="bg-[url('/src/assets/img/herolines.png')] bg-no-repeat bg-cover bg-center w-full h-full">
          <TopLine />

          <Navbar />

          <div className="relative isolate px-4 xl:py-22 sm:py-20 py-20 lg:px-8 max-w-full ">
            <div className="max-w-[1400px] mx-auto xl:pt-28 sm:pt-28 lg:pt-28 pt-24 lg:flex lg:flex-row lg:justify-between lg:items-center">
              <div>
                <h1
                  className="text-3xl max-w-xl font-extrabold  tracking-tight sm:tracking-wider text-white sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl"
                  ref={headingRef}
                >
                  {splitText("Let's Create ")}
                  <span className="inline-block">
                    {splitText("Extraordinary ")}
                  </span>
                  <span className="text-heroColor inline-block">
                    {splitText("Logo")}
                  </span>
                </h1>

                <p
                  className="mt-6 text-sm sm:text-sm lg:text-base leading-6 text-white"
                  ref={heroTextRef}
                >
                  Transforming Ideas into Extraordinary Digital {""}
                  <span className="inline-block">Experiences</span>
                </p>
              </div>
              <HeroCircle
                text="Branding Creative Design Logo"
                rotateAngle={12}
                starSize="400px"
                textSizeWidth="w-52"
                textSizeHeight="h-52"
                top="top-4"
                originSize="87px"
                innerSizeWidth="w-28"
                innerSizeHeight="h-28"
                innerPadding="p-8"
                smallCircleSizeWidth="w-8"
                smallCircleSizeHeight="h-8"
              />
              {/* <div className="mt-10 lg:mt-0 lg:ml-10" ref={animatedLogoRef}>
                <svg
                  className="w-64 h-64 text-yellow-400"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    stroke="currentColor"
                    strokeWidth="20"
                  />
                  <path
                    d="M65 65L135 135M65 135L135 65"
                    stroke="currentColor"
                    strokeWidth="20"
                    strokeLinecap="round"
                  />
                </svg>
              </div> */}
            </div>
          </div>
          <div className="w-full h-[10px] bg-heroColor"></div>
        </div>
      </div>

      <div className="max-w-full lg:py-20 px-4 lg:px-8 py-10 overflow-x-hidden">
        <div className="max-w-[1400px] mx-auto lg:flex lg:flex-row lg:justify-between lg:items-start flex flex-col gap-3">
          <div className="flex flex-col gap-4 lg:max-w-3xl max-w-full lg:grow">
            <h2
              className="text-white xl:text-4xl lg:text-4xl md:text-4xl text-3xl font-bold"
              ref={introHead}
            >
              Where Digital Dreams <span className="lg:block">Take Flight</span>
            </h2>
            <p className="text-introColor xl:text-sm text-sm" ref={introPara}>
              We are your creative partner in the digital realm. We're not just
              a company, we're a team of dreamers, creators, and innovators
              dedicated to bringing your digital dreams to life.
            </p>
          </div>

          <div
            className="lg:w-[270px] w-full relative flex gap-12 items-center cursor-pointer"
            onClick={() => handleNavClick("Portfolio")}
            ref={viewBtn}
          >
            <div
              className="relative"
              onMouseEnter={animateViewEnter}
              onMouseLeave={animateViewLeave}
            >
              <div
                className="w-20 h-20 border-2 border-borderColor rounded-full"
                ref={roundRef1}
              />
              <div
                className="w-20 h-20 border-2 border-borderColor rounded-full absolute top-0 left-0"
                ref={roundRef2}
              />
            </div>
            <div
              className="absolute left-6 flex justify-start gap-2 w-full"
              ref={viewAnimate}
              onMouseEnter={animateViewEnter}
              onMouseLeave={animateViewLeave}
            >
              <p className="text-viewProj text-xs" ref={viewText}>
                View All Projects
              </p>
              <img src={arrowImg} alt="" className="w-16 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
