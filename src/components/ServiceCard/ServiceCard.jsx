import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function ServiceCard({ icon, title, spanTitle, description, bgStart, bgEnd }) {
//   const cardRef = useRef(null);

//   useGSAP(() => {
//     gsap.from(cardRef.current, {
//       opacity: 0,
//       y: 100,
//       x: 100,
//       duration: 0.5,
//       stagger: 0.2,
//       scrollTrigger: {
//         trigger: cardRef.current,
//         toggleActions: "play none none none",
//         start: "top 70%",
//         end: "top 40%",
//       },
//     });
//   });

 

  //   const handleAnimateEnter = () => {
  //     gsap.to(cardRef.current, {
  //       background:
  //         "linear-gradient(55deg, #FFAE00 0%, #ffc549 50%, #ff9f00 100%)",
  //       duration: 0.5,
  //       ease: "power1.out",
  //     });
  //     gsap.to(cardRef.current, {
  //       rotationY: 180,
  //       duration: 1,
  //       ease: "linear",
  //       transformOrigin: "center center",
  //     });
  //   };
  //   const handleAnimateLeave = () => {
  //     gsap.to(cardRef.current, {
  //       background: "",
  //       duration: 0.5,
  //       ease: "power1.out",
  //     });
  //     gsap.to(cardRef.current, {
  //       rotationY: 0,
  //       duration: 1,
  //       ease: "linear",
  //       transformOrigin: "center center",
  //     });
  //   };

    const cardRef = useRef(null);
    const serviceCard = useRef(null);

    useEffect(() => {
      const card = cardRef.current;

      const onHover = () => {
        gsap.to(card, { rotationY: 180, duration: 0.5, ease: "circ.inOut" });
      };

      const onLeave = () => {
        gsap.to(card, { rotationY: 0, duration: 0.5, ease: "circ.inOut" });
      };

      card.addEventListener("mouseenter", onHover);
      card.addEventListener("mouseleave", onLeave);

      return () => {
        card.removeEventListener("mouseenter", onHover);
        card.removeEventListener("mouseleave", onLeave);
      };
    }, []);

    useGSAP(() => {
      gsap.from(serviceCard.current, {
        opacity: 0,
        y: 100,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: serviceCard.current,
          toggleActions: "play none none none",
          start: "top 70%",
          end: "top 40%",
        },
      });
    });

  return (
    // <div
    //   className={`py-12  min-h-[490px] bg-gradient-to-b from-${bgStart} from-0% to-${bgEnd} to-100% flex flex-col justify-start gap-12 items-center overflow-x-hidden`}
    //   ref={cardRef}
    //   //   onMouseEnter={handleAnimateEnter}
    //   //   onMouseLeave={handleAnimateLeave}
    // >
    //   <div className="bg-serviceRound p-6 rounded-full">
    //     <img src={icon} alt="" />
    //   </div>

    //   <div className="">
    //     <p className="text-center text-white text-xl">
    //       {title} <span className="block">{spanTitle}</span>
    //     </p>
    //   </div>

    //   <div>
    //     <p className="text-center text-heroColor uppercase border-b-2 border-heroColor cursor-pointer">
    //       Read More
    //     </p>
    //   </div>
    // </div>


    <div className="min-h-[490px] perspective-1000" ref={serviceCard}>
      <div
        ref={cardRef}
        className="relative w-full h-full transform-style-3d transition-transform duration-500"
      >
        <div
          className={`py-12 absolute w-full h-full backface-hidden bg-gradient-to-b from-${bgStart} from-0% to-${bgEnd} to-100% text-white flex flex-col justify-center gap-12 items-center overflow-x-hidden`}
        >
          <div className="bg-serviceRound p-6 rounded-full">
            <img src={icon} alt="" />
          </div>

          <div className="">
            <p className="text-center text-white text-xl">
              {title} <span className="block">{spanTitle}</span>
            </p>
          </div>

          {/* <div>
            <p className="text-center text-heroColor uppercase border-b-2 border-heroColor cursor-pointer">
              Read More
            </p>
          </div> */}
        </div>
        <div className="py-12 absolute w-full h-full backface-hidden bg-gradient-to-b from-heroColor from-0% to-anotherColor to-100% flex flex-col justify-start gap-5 items-center overflow-hidden transform rotate-y-180">
          <div className="bg-serviceRound p-6 rounded-full">
            <img src={icon} alt="" />
          </div>

          <div className="">
            <p className="text-center text-serviceRound text-xl">
              {title} <span className="block">{spanTitle}</span>
            </p>
          </div>
          <div className="">
            <p className="text-center text-serviceRound text-base">
              {description} 
            </p>
          </div>

          <div>
            <p className="text-center text-black uppercase border-b-2 border-black cursor-pointer">
              Read More
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
