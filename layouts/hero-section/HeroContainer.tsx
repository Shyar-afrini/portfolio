"use client";

import React, { useRef, useState } from "react";
import ProfilePic from "@/public/assets/profileImage.jpg";
import Image from "next/image";
import Grid from "@/public/assets/grid-background.svg";
import RotatingText from "../../components/RotatingText";
import { getRandomCharacter } from "@/utils/getRandomCharacter";
import { motion, Variants } from "framer-motion";

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

  const variants = {
    initial: {
      y: 30,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="order-2 md:order-1">
      <motion.h1
        variants={variants}
        transition={{
          duration: 0.6,
          delay: 0.3,
          ease: "anticipate",
        }}
        initial="initial"
        animate="animate"
        className="z-40 text-[20vw] sm:text-[5.5rem] leading-[16vw] sm:leading-[70px] lg:text-[8rem] lg:leading-[100px] xl:text-[10rem] font-semibold xl:leading-[120px] tracking-wider"
      >
        Hello!
        <br />
        I’m <span className="text-accent tracking-wider">{displayText}</span>
      </motion.h1>
      <motion.p
        variants={variants}
        transition={{
          duration: 0.6,
          delay: 0.4,
          ease: "anticipate",
        }}
        initial="initial"
        animate="animate"
        className="paragraph"
      >
        Welcome to my portfolio, Discover my skills as a developer and
        communication engineer, where I deliver high-quality, innovative
        solutions. Explore my work to see how I seamlessly integrate technical
        proficiency and effective communication.
      </motion.p>
    </div>
  );
};

const HeroContainer = () => {
  return (
    <div className="w-full relative h-full min-h-dvh pt-6 flex flex-col gap-8 md:flex-row md:items-center items-center justify-center md:justify-between px-container">
      <HeroTitle title="shyar" />
      <div className="w-fit h-fit max-w-3xl relative flex justify-end pr-12 mb-12 order-1 md:order-2">
        <motion.div
          variants={{
            initial: {
              y: 30,
              opacity: 0,
            },
            animate: {
              y: 0,
              opacity: 1,
            },
          }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: "anticipate",
          }}
          initial="initial"
          animate="animate"
          className="w-[80vw] sm:w-[25rem] md:w-[35vw] lg:w-[30vw] max-w-lg h-full border-accent border-r-2 border-b-2 rounded-corner absolute top-[calc(50%/6)] left-[calc(50%/6)]"
        ></motion.div>
        <motion.div
          variants={{
            initial: {
              x: 30,
              opacity: 0,
            },
            animate: {
              x: 0,
              opacity: 1,
            },
          }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: "anticipate",
          }}
          initial="initial"
          animate="animate"
        >
          <Image
            src={Grid}
            alt="grid"
            className="w-[80vw] sm:w-[25rem] md:w-[35vw] lg:w-[30vw] max-w-lg"
          />
        </motion.div>

        <motion.div
          variants={{
            initial: {
              x: -30,
              opacity: 0,
            },
            animate: {
              x: 0,
              opacity: 1,
            },
          }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: "anticipate",
          }}
          initial="initial"
          animate="animate"
          className="absolute top-[calc(50%/8)] left-[calc(50%/8)] overflow-hidden"
        >
          <Image
            src={ProfilePic}
            alt="profile pic"
            className="sm:w-[25rem] max-w-lg md:w-[35vw] lg:w-[30vw] w-[80vw] h-auto aspect-square rounded-corner"
          />
        </motion.div>
      </div>
      <div className="absolute -right-16 -bottom-20 hidden md:block z-40">
        <RotatingText />
      </div>
    </div>
  );
};

export default HeroContainer;
