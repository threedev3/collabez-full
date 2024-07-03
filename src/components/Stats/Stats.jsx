import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Stats({borders}) {
  const stats = [
    {
      title: "Project Done",
      count: "220+",
    },
    {
      title: "Our Team",
      count: "110+",
    },
    {
      title: "Reviewed",
      count: "135+",
    },
    {
      title: "Happy Client",
      count: "330+",
    },
  ];

  const statRefs = useRef([]);
  statRefs.current = [];

  const addToRefs = (el) => {
    if (el && !statRefs.current.includes(el)) {
      statRefs.current.push(el);
    }
  };

  useEffect(() => {
    statRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { innerText: 0,
          opacity: 0,
          // y: -50,
          // duration: 1
         },
        {
          innerText: stats[index].count,
          duration: 0.5,
          opacity: 1,
          // y:0,
          ease: "power1.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none none",
            // markers: true,
            scrub: true
          },
          snap: { innerText: 1 },
          stagger: 0.2,
          onUpdate: function () {
            el.innerText = `${Math.ceil(el.innerText)}+`;
          },
        }
      );
    });
  }, [stats]);

  return (
    <div className={`lg:py-12 lg:px-8 px-4 sm:py-8 py-3 max-w-full ${borders}`}>
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-full lg:flex lg:flex-row lg:justify-between flex flex-row justify-center flex-wrap ">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col gap-7 sm:p-5 p-2 text-center min-w-[250px]"
            >
              <h3 className="text-white lg:text-3xl text-3xl">{stat.title}</h3>
              <p
                className="text-heroColor lg:text-6xl text-6xl font-bold"
                ref={addToRefs}
              >
                0+
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stats;
