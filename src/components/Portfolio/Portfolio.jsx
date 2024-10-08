import React, { useEffect, useRef, useState } from "react";
import projectImg from "../../assets/img/project3.png";
import alphaImg from "../../assets/img/alpha.png";
import lingoImg from "../../assets/img/lingo.png";
import oasisImg from "../../assets/img/oasis.png";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function Portfolio() {
  const portfolioRef = useRef(null);
  const portHeading = useRef(null);
  const portPara = useRef(null);
  const tagRefs = useRef([]);
  const projectRefs = useRef([]);
  const imgContainerRefs = useRef([]);
  const scrollTweenRefs = useRef([]);

  const projects = [
    {
      title: "Collab Dash",
      tags: ["NextJS", "Typescript", "NodeJS", "ExpressJS", "MongoDB"],
      img: lingoImg,
    },
    {
      title: "Collab LMS",
      tags: ["NextJS", "Typescript", "NodeJS", "ExpressJS", "MongoDB"],
      img: lingoImg,
    },
    {
      title: "The Oasis",
      tags: ["NextJS", "ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
      img: oasisImg,
    },
    {
      title: "Alpha Hiring Solutions",
      tags: ["NextJS", "ReactJS", "Tailwind CSS", "GSAP"],
      img: alphaImg,
    },
  ];

  // Initialize tagRefs.current as an array of arrays
  if (!tagRefs.current.length) {
    projects.forEach(() => {
      tagRefs.current.push([]);
    });
  }

  // const { contextSafe } = useGSAP({ scope: portfolioRef });

  // const portText = gsap.timeline({ paused: true });

  useGSAP(() => {
    // portText
    //   .from(portHeading.current, {
    //     duration: 1,
    //     // opacity: 0,
    //     y: -10,
    //     ease: "power1.out",
    //     scrollTrigger: {
    //       trigger: portHeading.current,
    //       start: "top 80%",
    //       toggleActions: "play none none none",
    //       scrub: false,
    //     },
    //   })
    //   .from(portPara.current, {
    //     duration: 1,
    //     opacity: 0,
    //     y: -50,
    //     ease: "power1.out",
    //     scrollTrigger: {
    //       trigger: portPara.current,
    //       start: "top 80%",
    //       toggleActions: "play none none none",
    //       scrub: true,
    //     },
    //   });

    projectRefs.current.forEach((ref, index) => {
      gsap.from(ref, {
        duration: 0.6,
        opacity: 0,
        y: 80,
        stagger: 0.3,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ref,
          start: "top 90%",
          end: "top 60%",
          toggleActions: "play resume none none",
          // scrub: true,
        },
      });
    });

    tagRefs.current.forEach((tags, index) => {
      gsap.from(tags, {
        y: 100,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: tags[0], // Trigger based on the first tag in the current project
          start: "top 90%",
          end: "top 80%",
          toggleActions: "play none none none",
          // scrub: true,
        },
      });
    });
  });

  const [hovered, setHovered] = useState([false, false, false]);

  // Handler to set hover state for a specific index
  const handleMouseEnter = (index) => {
    const newHovered = [false, false, false]; // Reset all to false
    newHovered[index] = true; // Set only the hovered index to true
    setHovered(newHovered);

    // Reset scroll position and kill any existing tween for this index
    if (scrollTweenRefs.current[index]) {
      scrollTweenRefs.current[index].kill();
    }
    imgContainerRefs.current[index].scrollTop = 0; // Reset scroll position to top

    // Auto-scroll the image
    scrollTweenRefs.current[index] = gsap.to(imgContainerRefs.current[index], {
      scrollTo: { y: "max" },
      delay: 1.3,
      duration: 5,
      ease: "linear",
      repeat: -1,
      yoyo: true,
    });
  };

  // Handler to reset hover state for a specific index
  const handleMouseLeave = (index) => {
    setHovered([false, false, false]); // Reset all to false

    // Restart the auto-scroll animation when hover is removed
    if (scrollTweenRefs.current[index]) {
      scrollTweenRefs.current[index].kill(); // Kill existing tween
      scrollTweenRefs.current[index] = gsap.to(
        imgContainerRefs.current[index],
        {
          scrollTo: { y: "max" },
          duration: 5,
          ease: "linear",
          repeat: -1,
          yoyo: true,
        }
      );
    }
  };

  // Handler to stop auto-scroll when hovering over the image
  const handleImageMouseEnter = (index) => {
    if (scrollTweenRefs.current[index]) {
      scrollTweenRefs.current[index].pause(); // Pause the auto-scroll
    }
  };

  // Handler to resume auto-scroll when leaving the image hover
  const handleImageMouseLeave = (index) => {
    if (scrollTweenRefs.current[index]) {
      scrollTweenRefs.current[index].resume(); // Resume the auto-scroll
    }
  };

  return (
    <div
      className="lg:py-12 lg:px-8 py-8 px-4 max-w-full overflow-hidden"
      ref={portfolioRef}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-5">
            <h3
              className="xl:text-4xl lg:text-4xl md:text-3xl text-3xl text-white font-bold"
              ref={portHeading}
            >
              Our Portfolio
            </h3>
            <p
              className="text-introColor xl:text-base lg:text-sm md:text-sm text-sm "
              ref={portPara}
            >
              Don't just take our word for it see for yourself. Our portfolio is
              a testament to our creativity, innovation, and dedication. It's a
              gallery of digital masterpieces, each one a success story of a
              brand that dared to dream big with CollabEz.
            </p>
          </div>

          <div className="grid grid-cols-1 border-2 border-portBorder box-content">
            {projects.map((project, index) => (
              <div
                key={index}
                className="lg:py-16 lg:px-24 sm:py-8 sm:px-16 py-8 px-8 border-l-transparent transition-all duration-300 ease-in-out hover:border-l-[12px] hover:bg-heroColor/5 hover:border-l-heroColor relative flex flex-row justify-start items-center"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <div
                  className="flex flex-col gap-2"
                  ref={(el) => (projectRefs.current[index] = el)}
                >
                  <h3 className="xl:text-4xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-white">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-transparent border-2 border-heroColor text-white px-2 py-1 rounded-full text-xs"
                        ref={(el) => {
                          if (!tagRefs.current[index]) {
                            tagRefs.current[index] = [];
                          }
                          tagRefs.current[index][tagIndex] = el;
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div
                  className={`absolute z-30 xl:right-80 lg:right-30 md:right-5 sm:right-2 right-0 lg:h-72 lg:w-96 md:h-52 md:w-64 sm:h-48 sm:w-56 h-48 w-60 overflow-x-hidden overflow-y-auto no-scrollbar transition-transform duration-300 ease-in-out border-2 border-heroColor rounded-md ${
                    hovered[index] ? "scale-200" : "scale-0"
                  }`}
                  ref={(el) => (imgContainerRefs.current[index] = el)}
                  onMouseEnter={() => handleImageMouseEnter(index)}
                  onMouseLeave={() => handleImageMouseLeave(index)}
                >
                  <img
                    src={project.img}
                    alt={`Project`}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
