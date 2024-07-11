// src/components/ScrollToTopButton.js
import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative z-50">
      {showButton && (
        <button
          className="fixed bottom-4 right-4 sm:w-16 sm:h-16 w-12 h-12 bg-heroColor text-white rounded-full flex items-center justify-center shadow-lg transition-opacity duration-300 z-[1000]"
          onClick={scrollToTop}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={5.5}
            stroke="currentColor"
            className="sm:size-6 size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
