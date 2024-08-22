import React, { useRef } from "react";
import TopLine from "../TopLine/TopLine";
import Navbar from "../Navbar/Navbar";
import HeroCircle from "../HeroCircle/HeroCircle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function SubHeroSection({ title }) {
  const headRef = useRef(null);

  const heading = `${title}`;
  const splitHeading = heading.split("");
  const joinHeading = splitHeading.map((char, index) => (
    <span key={index}>{char}</span>
  ));

  useGSAP(() => {
    gsap.fromTo(
      headRef.current.querySelectorAll("span"),
      { opacity: 0, y: -100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.09,
        ease: "back.inOut",
      }
    );
  });
  return (
    // <div className="bg-wholeBg bg-[url('/src/assets/img/subheroBg.png')] bg-no-repeat bg-cover bg-bottom max-w-full relative overflow-hidden ">
    //   <div className="bg-[url('/src/assets/img/subherolines.png')] bg-no-repeat bg-cover bg-center w-full h-full">
    //     <TopLine />

    //     <Navbar />

    //     <div className="relative isolate px-4 pt-14 lg:px-8 max-w-full ">
    //       <div className="relative max-w-[1400px] mx-auto px-3 pt-32 sm:pt-32 lg:pt-24 lg:flex lg:flex-col lg:justify-between">
    //         <div className="mx-auto">
    //           <h1
    //             ref={headRef}
    //             className="text-3xl lg:max-w-2xl text-center font-bold tracking-tight text-white sm:text-4xl md:text-4xl xl:text-5xl uppercase"
    //           >
    //             {joinHeading}
    //           </h1>
    //         </div>
    //         <div className="flex justify-end relative top-[-35px]">
    //           <HeroCircle
    //             text="Agency Creative Design Service"
    //             rotateAngle={11.5}
    //             starSize="280px"
    //             textSizeWidth="w-40"
    //             textSizeHeight="h-40"
    //             top="top-2"
    //             originSize={"70px"}
    //             innerSizeWidth="w-20"
    //             innerSizeHeight="h-20"
    //             innerPadding="4"
    //             smallCircleSizeWidth="w-6"
    //             smallCircleSizeHeight="h-6"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //     <div className="w-full h-[10px] bg-heroColor relative top-[-20px]"></div>
    //   </div>
    // </div>

    <div className="bg-wholeBg bg-[url('/src/assets/img/subheroBg.png')] bg-no-repeat bg-cover bg-bottom max-w-full relative overflow-hidden min-h-[60vh] flex flex-col justify-between">
      <div className="bg-[url('/src/assets/img/subherolines.png')] bg-no-repeat bg-cover bg-center w-full min-h-[70vh] absolute top-0"></div>
      <TopLine />
      <Navbar />

      <div className="flex-1 relative flex items-center justify-center lg:justify-center px-4 lg:px-8 max-w-full">
        {/* Centered Heading */}
        <h1
          ref={headRef}
          className="text-3xl lg:max-w-2xl text-center font-bold tracking-tight text-white sm:text-4xl md:text-4xl xl:text-5xl uppercase absolute lg:static"
        >
          {joinHeading}
        </h1>

        {/* HeroCircle component on the right side */}
        <div className="absolute right-[10%] bottom-0 transform translate-y-[-50%] lg:translate-y-0 lg:flex lg:justify-end">
          <HeroCircle
            text="Agency Creative Design Service"
            rotateAngle={11.5}
            starSize="280px"
            textSizeWidth="w-40"
            textSizeHeight="h-40"
            top="top-2"
            originSize={"70px"}
            innerSizeWidth="w-20"
            innerSizeHeight="h-20"
            innerPadding="4"
            smallCircleSizeWidth="w-6"
            smallCircleSizeHeight="h-6"
          />
        </div>
      </div>

      <div className="w-full h-[10px] bg-heroColor"></div>
    </div>
  );
}

export default SubHeroSection;
