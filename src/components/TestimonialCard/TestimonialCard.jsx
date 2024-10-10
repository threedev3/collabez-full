import React from "react";
import quotes from "../../assets/img/quotes.png";
import testAvatar from "../../assets/img/testAvatar.png";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="max-w-full lg:max-w-[500px] sm:min-h-[310px] min-h-[326px] flex justify-center items-center sm:mx-20 mx-10 cursor-pointer">
      <div className="relative ">
        <div
          className="rounded-3xl z-30 relative p-4 border-2 border-[#f3f3f3] bg-gradient-to-t from-[#303030] via-[#4a4a4a] to-[#6A6A6A]"
          // style={{
          //   background:
          //     "radial-gradient(circle, rgba(105,105,105,1) 0%, rgba(53,53,53,1) 100%)", // Gray radial gradient
          // }}
        >
          {/* <div className="bg-[url('/src/assets/img/testBg.png')] bg-no-repeat bg-cover relative z-20 h-[242px] w-[482px] flex items-center p-4"> */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-row justify-between items-center gap-2">
              <img
                src={quotes}
                alt="Quotes"
                className="sm:w-12 w-10 object-contain"
              />
              <p className="text-white text-base font-bold">
                {testimonial.company}
              </p>
            </div>

            <p className="text-white xl:text-[13px] lg:text-[12px] md:text-[13px] text-[12px] xl:min-h-20 lg:min-h-24 md:min-h-16 min-[428px]:min-h-24 min-h-[7.5rem]">
              {testimonial.review}
            </p>

            <div className="flex flex-row items-center gap-3">
              <img
                src={testAvatar}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex flex-col text-white">
                <p className="text-sm">{testimonial.name}</p>
                <p className="text-xs">{testimonial.location}</p>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
        {/* Circular backgrounds */}
        <div className="sm:w-[90px] w-[70px] sm:h-[90px] h-[70px] rounded-full bg-heroColor absolute sm:-top-8 -top-6 sm:-right-8 -right-6 "></div>
        <div className="sm:w-[68px] w-[58px] sm:h-[68px] h-[58px] rounded-full bg-gradient-to-r from-testStart to-testEnd absolute bottom-2 sm:-left-8 -left-6"></div>
      </div>
    </div>
  );
};

export default TestimonialCard;
