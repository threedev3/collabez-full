import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stats } from "../../data/data";

gsap.registerPlugin(ScrollTrigger);

function Stats({ borders }) {
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
        {
          innerText: 0,
          opacity: 0,
        },
        {
          innerText: stats[index].count,
          duration: 2,
          opacity: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none none",
            // scrub: true,
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
    <div
      className={`lg:py-12 lg:px-8 px-4 sm:py-8 py-3 max-w-full ${borders} overflow-x-hidden`}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-full sm:grid sm:grid-cols-4 xl:gap-16 lg:gap-12 md:gap-6 grid grid-cols-2 gap-4 place-content-between ">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-7 sm:p-5 p-2 text-center"
            >
              <div className="flex flex-col">
                <h3 className="text-white sm:text-2xl text-xl">
                  {stat.firstTitle}
                </h3>
                <h3 className="text-white sm:text-2xl text-xl">
                  {stat.secondTitle}
                </h3>
              </div>
              <p
                className="text-heroColor lg:text-5xl md:text-4xl text-4xl font-bold"
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
