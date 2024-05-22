"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Polygon from "@/public/assets/Polygon.svg";

const RotatingText = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setRotation((prev) => prev + 0.5);
    }, 100);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  // Helper function to split and style text parts
  const renderStyledText = () => {
    const parts = "scroll down • scroll down • scroll down •".split("down");
    return (
      <>
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            <tspan style={{ letterSpacing: 10 }}>{part}</tspan>
            {index < parts.length - 1 && (
              <tspan
                style={{
                  fill: "#25B366",
                  letterSpacing: 10,
                }}
              >
                down
              </tspan>
            )}
          </React.Fragment>
        ))}
      </>
    );
  };

  return (
    <div className="text-white relative w-[300px] h-[300px]">
      <svg
        className="absoluet top-0"
        width={500}
        height={500}
        viewBox="0 0 500 500"
        style={{ transform: `rotate(-${rotation}deg)` }}
      >
        <path
          id="text-path"
          d="
            M 250, 250
            m -100, 0
            a 100,100 0 1,1 225,0
            a 100,100 0 1,1 -225,0
          "
          fill="none"
        />
        <text style={{ letterSpacing: "5px" }} fill="#c3c3c3" fontSize="20">
          <textPath
            href="#text-path"
            startOffset="0"
            className="mix-blend-difference"
          >
            {renderStyledText()}
          </textPath>
        </text>
      </svg>
      <Image
        src={Polygon}
        alt="polygon"
        width={140}
        height={140}
        className="absolute top-[170px] left-[190px]"
      />
    </div>
  );
};

export default RotatingText;
