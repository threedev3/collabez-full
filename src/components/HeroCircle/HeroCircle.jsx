import React from "react";
import starImg from "../../assets/img/star.png";

function HeroCircle({text, rotateAngle, starSize, textSizeWidth, textSizeHeight, top, originSize, innerSizeWidth, innerSizeHeight, innerPadding, smallCircleSizeWidth, smallCircleSizeHeight}) {

    const textArray = text.split("");

  return (
    <div className="relative flex items-center justify-center ">
      <img
        src={starImg}
        alt="Star"
        className={`w-[${starSize}] h-[${starSize}] animate-spin`}
      />
      <div className={`absolute ${textSizeHeight} ${textSizeWidth}`}>
        <div className="h-full w-full border-2 border-heroColor rounded-full p-8 flex justify-center items-center animate-spinSlow">
          {textArray.map((char, index) => {
            // const angle = (index / textArray.length) * 360;
            return (
              <span
                key={index}
                className={`absolute text-sm text-white ${top} ml-2 inline-block `}
                style={{
                  transform: `rotate(${index * rotateAngle}deg)`,
                  transformOrigin: `0 ${originSize}`,
                }}
              >
                {char}
              </span>
            );
          })}
          <div className={`${innerSizeWidth} ${innerSizeHeight} border-2 border-borderColor rounded-full flex justify-center items-center ${innerPadding}`}>
            <div className={`${smallCircleSizeWidth} ${smallCircleSizeHeight} border-2 border-white rounded-full bg-heroColor`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroCircle;
