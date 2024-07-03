import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function CustomCursor() {
  const cursorRef = useRef(null);
  const cursorFollowerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      gsap.to(cursorRef.current, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.1,
        ease: "power3.out"
      });

      gsap.to(cursorFollowerRef.current, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.2,
        ease: "power3.out",
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="w-4 h-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full pointer-events-none fixed transform -translate-x-1/2 -translate-y-1/2 z-50 shadow-lg animate-pulse lg:block hidden"
        ref={cursorRef}
      ></div>
      <div
        className="w-10 h-10 border-4 border-heroColor rounded-full pointer-events-none fixed transform -translate-x-1/2 -translate-y-1/2 z-40 opacity-75 lg:block hidden"
        ref={cursorFollowerRef}
      ></div>
    </>
  );
}

export default CustomCursor;
