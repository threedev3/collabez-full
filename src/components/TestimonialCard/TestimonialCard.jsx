import React from "react";
import quotes from "../../assets/img/quotes.png";
import testAvatar from "../../assets/img/testAvatar.png";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="w-[650px] h-[310px] flex justify-center items-center">
      <div className="relative ">
        <div className="bg-[url('/src/assets/img/testBg.png')] bg-no-repeat bg-cover relative z-20 h-[242px] w-[482px]">
          <div className="p-4 flex flex-col gap-5 ">
            <div className="flex flex-row justify-between items-center gap-2">
              <div>
                <img src={quotes} alt="" />
              </div>

              <div>
                <p className="text-white text-base font-bold">
                  {testimonial.company}
                </p>
              </div>
            </div>

            <div>
              <p className="text-white text-[13px] min-h-20">
                {testimonial.review}
              </p>
            </div>

            <div className="flex flex-row items-center gap-3">
              <div>
                <img src={testAvatar} alt="" />
              </div>
              <div className="flex flex-col text-white">
                <p className="text-sm">{testimonial.name}</p>
                <p className="text-xs">{testimonial.location}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[90px] h-[90px] rounded-full bg-heroColor absolute -top-8 -right-8 "></div>
        <div className="w-[68px] h-[68px] rounded-full bg-gradient-to-r from-testStart to-testEnd absolute bottom-2 -left-8"></div>
      </div>
    </div>
  );
};

export default TestimonialCard;
