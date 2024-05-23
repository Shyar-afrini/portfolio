"use client";

import React, { useRef, useState } from "react";
import ProfilePic from "@/public/assets/profileImage.jpg";
import Image from "next/image";
import Grid from "@/public/assets/grid-background.svg";
import RotatingText from "../../components/RotatingText";
import { getRandomCharacter } from "@/utils/getRandomCharacter";

const HeroTitle = ({ title }: { title: string }) => {
  const [displayText, setDisplayText] = useState(title);
  const isInProgress = useRef(false);
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (isInProgress.current) return;

    isInProgress.current = true;
    let index = 0;

    intervalId.current = setInterval(() => {
      if (index < title.length) {
        setDisplayText(
          (prev) =>
            `${title.substring(0, index + 1)}${title
              .substring(index + 1)
              .split("")
              .map((_, i) =>
                i === index ? title.charAt(index) : getRandomCharacter()
              )
              .join("")}`
        );
        index++;
      } else {
        clearInterval(intervalId.current!);
        isInProgress.current = false;
      }
    }, 120);
  };

  handleMouseEnter();

  return (
    <div className="order-2 md:order-1">
      <h1 className="z-50 text-[20vw] sm:text-[5.5rem] leading-[16vw] sm:leading-[70px] lg:text-[8rem] lg:leading-[100px] xl:text-[10rem] font-semibold xl:leading-[120px] tracking-wider">
        Hello!
        <br />
        I’m <span className="text-accent tracking-wider">{displayText}</span>
      </h1>
      <p className="text-[#919191] text-[18px] sm:text-paragraph md:text-md lg:text-lg leading-6 sm:leading-paragraph text-pretty md:w-[45vw] max-w-[700px]">
        Welcome to my portfolio, Discover my skills as a developer and
        communication engineer, where I deliver high-quality, innovative
        solutions. Explore my work to see how I seamlessly integrate technical
        proficiency and effective communication.
      </p>
    </div>
  );
};

const HeroContainer = () => {
  return (
    <div className="w-full relative h-[calc(100vh-6rem)] flex flex-col gap-8 md:flex-row md:items-center items-center justify-center md:justify-between px-container">
      <HeroTitle title="shyar" />
      <div className="w-fit h-fit max-w-3xl relative flex justify-end pr-12 mb-12 order-1 md:order-2">
        <div className="w-[80vw] sm:w-[25rem] md:w-[35vw] lg:w-[30vw] max-w-lg h-full border-accent border-r-2 border-b-2 rounded-corner absolute top-[calc(50%/6)] left-[calc(50%/6)]"></div>
        <Image
          src={Grid}
          alt="grid"
          className="w-[80vw] sm:w-[25rem] md:w-[35vw] lg:w-[30vw] max-w-lg"
        />
        <Image
          src={ProfilePic}
          alt="profile pic"
          className="sm:w-[25rem] max-w-lg md:w-[35vw] lg:w-[30vw] w-[80vw] h-auto aspect-square rounded-corner absolute top-[calc(50%/8)] left-[calc(50%/8)]"
        />
      </div>
      <div className="absolute -right-16 -bottom-20 hidden md:block z-50">
        <RotatingText />
      </div>
    </div>
  );
};

export default HeroContainer;
