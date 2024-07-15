"use client";
import React from "react";
import Marquee from "react-fast-marquee";

const Sliderss = () => {
  return (
    <div className="py-10">

    <Marquee speed={100}   gradient gradientColor={"white"} gradientWidth="10%">
      {Array.from({ length: 21 }).map((_, index) => (
        <img
        className="md:h-52 object-contain h-36"
        key={index}
        src={`/slider/${index + 1}.png`}
        alt={`slide-${index}`}
        />
      ))}
    </Marquee>
      </div>
  );
};

export default Sliderss;
