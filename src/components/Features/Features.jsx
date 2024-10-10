// import React, { useRef, useState } from "react";
// import personImg from "../../assets/img/personImg.png";

// import FeatureCard from "../FeatureCard/FeatureCard";
// import { useGSAP } from "@gsap/react"; // Import useGSAP from @gsap/react
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { features } from "../../data/data";

// gsap.registerPlugin(useGSAP);
// gsap.registerPlugin(ScrollTrigger);

// function Features() {
//   const imageRef = useRef(null);
//   const headRef = useRef(null);
//   const textRef = useRef(null);

//   const featureText = gsap.timeline({ paused: true });

//   useGSAP(() => {
//     featureText
//       .from(headRef.current, {
//         duration: 0.5,
//         opacity: 0,
//         y: -100,
//         ease: "power1.out",
//         scrollTrigger: {
//           trigger: headRef.current,
//           start: "top 70%",
//           end: "top 50%",
//           toggleActions: "play none none none",
//           scrub: true,
//           once: true
//         },
//       })
//       .from(textRef.current, {
//         duration: 0.5,
//         opacity: 0,
//         y: -300,
//         ease: "power1.out",
//         scrollTrigger: {
//           trigger: textRef.current,
//           start: "top 70%",
//           end: "top 30%",
//           toggleActions: "play none none none",
//           scrub: true,
//           once: true
//         },
//       })

//       .from(imageRef.current, {
//         duration: 1,
//         opacity: 0,
//         x: 100,
//         ease: "power1.out",
//         scrollTrigger: {
//           trigger: imageRef.current,
//           start: "top 70%",
//           end: "top 50%",
//           toggleActions: "play none none none",
//           scrub: true,
//           once: true,
//         },
//       });

//        // Continuous floating animation for idle state
//     const floatingAnimation = gsap.to(imageRef.current, {
//       y: -10,
//       duration: 3,
//       ease: "power1.inOut",
//       repeat: -1,
//       yoyo: true,
//     });

//     // Get random x and y values
//     const getRandomPosition = () => {
//       const randomX = Math.floor(Math.random() * 200) - 100; // Random x (-100 to 100)
//       const randomY = Math.floor(Math.random() * 200) - 100; // Random y (-100 to 100)
//       return { x: randomX, y: randomY };
//     };

//     // Mouse enter handler for random movement
//     const handleMouseEnter = () => {
//       const { x, y } = getRandomPosition(); // Get random x and y values

//       // Cancel floating animation when hovering
//       floatingAnimation.kill();

//       // Move the image to the new random position smoothly
//       gsap.to(imageRef.current, {
//         x: x,
//         y: y,
//         duration: 1,
//         ease: "power3.out",
//       });
//     };

//     // Mouse leave handler: restart the floating animation after hover
//     const handleMouseLeave = () => {
//       gsap.to(imageRef.current, {
//         duration: 1,
//         x: 0, // Reset x position to original
//         y: 0, // Reset y position to original
//         ease: "power3.out",
//       });

//       // Restart the floating animation after hover
//       floatingAnimation.restart();
//     };

//     const imageElement = imageRef.current;
//     imageElement.addEventListener("mouseenter", handleMouseEnter);
//     imageElement.addEventListener("mouseleave", handleMouseLeave);

//     // Cleanup event listeners on unmount
//     return () => {
//       imageElement.removeEventListener("mouseenter", handleMouseEnter);
//       imageElement.removeEventListener("mouseleave", handleMouseLeave);
//       floatingAnimation.kill();
//     };
//   }, []);

//   return (
//     <div className="lg:py-12 lg:px-8 py-8 px-4 max-w-full overflow-x-hidden">
//       <div className="max-w-[1400px] mx-auto">
//         <div className="flex flex-col gap-5">
//           <div className="sm:flex sm:flex-row sm:justify-between sm:items-center">
//             <div className="flex flex-col gap-3">
//               <p
//                 className="text-white xl:text-4xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold"
//                 ref={headRef}
//               >
//                 Why CollabEz ?
//               </p>
//               <p className="text-introColor lg:text-base text-sm" ref={textRef}>
//                 We never fail to deliver desired result with E4!!{" "}
//               </p>
//             </div>
//             <div className="lg:block flex justify-center">
//               <img
//                 src={personImg}
//                 alt=""
//                 ref={imageRef}
//                 className="w-72 object-contain"
//               />
//             </div>
//           </div>

//           <div className="max-w-full mx-auto">
//             <div className="lg:grid lg:grid-cols-4 xl:gap-6 lg:gap-3 md:grid md:grid-cols-2 md:gap-6 grid grid-cols-1 gap-6 ">
//               {features.map((feature, index) => (
//                 <FeatureCard
//                   key={index}
//                   title={feature.title}
//                   description={feature.description}
//                   icon={feature.icon}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Features;

import React, { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
// import Image from "next/image"
import personImg from "../../assets/img/personImg.png"
import FeatureCard from "../FeatureCard/FeatureCard"
import { features } from "../../data/data"

gsap.registerPlugin(ScrollTrigger)

export default function Features() {
  const imageRef = useRef(null)
  const headRef = useRef(null)
  const textRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    })

    tl.from(imageRef.current, {
      opacity: 0,
      scale: 0.5,
      rotation: -15,
      x: 100,
      y: 50,
      duration: 1,
    })
      .to(imageRef.current, {
        rotation: 15,
        scale: 1.1,
        y: -30,
        duration: 1,
      })
      .to(imageRef.current, {
        rotation: 0,
        scale: 1,
        x: 0,
        y: 0,
        duration: 1,
      })

    gsap.from(headRef.current, {
      opacity: 0,
      y: -50,
      duration: 0.5,
      scrollTrigger: {
        trigger: headRef.current,
        start: "top 80%",
        end: "top 50%",
        scrub: true,
        once: true
      },
    })

    gsap.from(textRef.current, {
      opacity: 0,
      y: -30,
      duration: 0.5,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        end: "top 50%",
        scrub: true,
        once: true

      },
    })

    // Animate feature cards
    gsap.utils.toArray(".feature-card").forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "top 70%",
          scrub: true,
        },
        delay: index * 0.1,
      })
    })
  }, [])

  return (
    <div className="lg:py-12 lg:px-8 py-8 px-4 max-w-full overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-5">
          <div className="sm:flex sm:flex-row sm:justify-between sm:items-center">
            <div className="flex flex-col gap-3">
              <p
                className="text-white xl:text-4xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold"
                ref={headRef}
              >
                Why CollabEz ?
              </p>
              <p className="text-introColor lg:text-base text-sm" ref={textRef}>
                We never fail to deliver desired result with E4!!{" "}
              </p>
            </div>
            <div className="lg:block flex justify-center">
              <div className="relative w-72 h-72" ref={imageRef}>
                <img
                  src={personImg}
                  alt="Person"
                  layout="fill"
                  objectFit="contain"
                  className="select-none"
                />
              </div>
            </div>
          </div>

          <div className="max-w-full mx-auto">
            <div className="lg:grid lg:grid-cols-4 xl:gap-6 lg:gap-3 md:grid md:grid-cols-2 md:gap-6 grid grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <FeatureCard
                    title={feature.title}
                    description={feature.description}
                    icon={feature.icon}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}