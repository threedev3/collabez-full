import React from "react";

function Intro() {
  return (
    <div className="bg-wholeBg max-w-full lg:py-16">
      <div className="max-w-[1400px] mx-auto lg:flex lg:flex-row lg:justify-between lg:items-center">
        <div className="flex flex-col gap-4 max-w-4xl">
          <h2 className="text-white lg:text-6xl font-bold">
            Where Digital Dreams <span className="lg:block">Take Flight</span>
          </h2>
          <p className="text-introColor lg:text-xl">
            We are your creative partner in the digital realm. We're not just a
            company, we're a team of dreamers, creators, and innovators
            dedicated to bringing your digital dreams to life.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
