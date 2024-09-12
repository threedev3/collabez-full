import React, { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react"; // Import useGSAP from @gsap/react
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Accordian({ question, answer, isOpen, onClick }) {
  const contentRef = useRef(null);
  const accordianRef = useRef(null);
  const quesRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.height = contentRef.current.scrollHeight + "px";
    } else {
      contentRef.current.style.height = "0px";
    }
  }, [isOpen]);

  // const accordTime = gsap.timeline({ paused: true });

  useGSAP(() => {
    gsap.from(accordianRef.current, {
      opacity: 0,
      y: 100,
      duration: 0.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: accordianRef.current,
        toggleActions: "play none none none",
        start: "top 80%",
        end: "top 60%",
        once: true,
        //   markers: true,
      },
    });
    gsap.from(quesRef.current, {
      opacity: 0,
      x: 100,
      duration: 0.5,
      scrollTrigger: {
        trigger: accordianRef.current,
        toggleActions: "play none none none",
        start: "top 85%",
        end: "top 60%",
        once: true,
        // markers: true
      },
    });
  });

  return (
    <div
      className="bg-black p-4 mb-2 max-w-full rounded-md shadow-lg"
      ref={accordianRef}
    >
      <button
        className="flex justify-between items-center gap-4 w-full text-left focus:outline-none"
        onClick={onClick}
      >
        <span
          className="sm:text-base text-sm text-white font-semibold"
          ref={quesRef}
        >
          {question}
        </span>
        <span className="">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#FFAE00"
              className="size-7"
            >
              <path
                fillRule="evenodd"
                d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#FFAE00"
              className="size-7"
            >
              <path
                fillRule="evenodd"
                d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </span>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 ease-in-out pr-10"
        style={{ height: "0px" }}
      >
        <p className="mt-5 text-white lg:text-base text-sm">{answer}</p>
      </div>
    </div>
  );
}

export default Accordian;
