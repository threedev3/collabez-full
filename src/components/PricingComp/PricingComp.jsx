import React from "react";
import Intro from "../Intro/Intro";
import PricingCard from "../PricingCard/PricingCard";

function PricingComp() {
  const pricing = [
    {
      mode: "Basic",
      price: "479",
      duration: "per month",
      features: [
        "Customized Store Design",
        "jQuery Rotating Banner",
        "Interactive Menu",
        "Inquiry Form",
        "Responsive Design",
      ],
    },
    {
      mode: "Corporate",
      price: "779",
      duration: "per month",
      features: [
        "Basic plan",
        "Design prototyping",
        "Mobile Menu",
        "Competitor analysis",
        "Offer Pop-Up Windows",
      ],
    },
    {
      mode: "Business",
      price: "989",
      duration: "per month",
      features: [
        "Corporatre plan",
        "Subscription Pages",
        "Unlimited Web Space",
        "FREE Site Building Tools",
        "24/7 Support",
      ],
    },
  ];

  return (
    <div className="max-w-full relative lg:py-8 py-4 lg:px-8 px-4 overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto">
        <Intro
          pageTitle="how much does it cost"
          mainTitle="prices packages."
          para="We've got a lot of awards for our products and services that became popular in the world."
        />

        <div>
          <div className="lg:grid lg:grid-cols-3  md:grid md:grid-cols-2  grid grid-cols-1  shadow-sm">
            {pricing.map((item, index) => (
              <PricingCard key={index} mode={item.mode} price={item.price} duration={item.duration} features={item.features} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingComp;
