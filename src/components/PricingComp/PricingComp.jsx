import React from "react";
import Intro from "../Intro/Intro";
import PricingCard from "../PricingCard/PricingCard";
import { pricing } from "../../data/data";

function PricingComp() {
  return (
    <div className="max-w-full relative lg:py-8 py-4 lg:px-8 px-4 overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto">
        <Intro
          pageTitle="how much does it cost"
          mainTitle="prices packages"
          para="We've got a lot of awards for our products and services that became popular in the world."
        />

        <div className="mt-12">
          <div className="lg:grid lg:grid-cols-3 gap-3  md:grid md:grid-cols-2  grid grid-cols-1  shadow-sm">
            {pricing.map((item, index) => (
              <PricingCard
                key={index}
                mode={item.mode}
                price={item.price}
                duration={item.duration}
                features={item.features}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingComp;
