"use client";

import React, { useEffect, useState } from "react";
import {
  backendTech,
  frontendTech,
  languagesAndPrograms,
} from "@/utils/techArray";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const techCardVariants = (index: number): Variants => {
  return {
    initial: {
      opacity: 0,
      y: index * 20,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };
};

export const TechStackCard = ({
  title,
  index,
}: {
  title: string;
  index: number;
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px 80px 0px",
  });

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={techCardVariants(index)}
      initial="initial"
      animate={controls}
      transition={{
        duration: 0.5,
        delay: index / 40,
        ease: "anticipate",
      }}
      className="w-fit min-w-56 py-2 px-16 flex-grow border-l-8 border-accent rounded-[4px] bg-secondaryBackground text-center text-lg border border-t-accent/60 border-b-accent/60 border-r-accent/60"
    >
      {title}
    </motion.div>
  );
};

export const TechGroup = ({
  tech,
  title,
}: {
  tech: string[];
  title?: string;
}) => {
  const [expand, setExpand] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, rootMargin: "100px" });

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, []);

  const sliceNumber =
    isClient && window.innerWidth < 800
      ? expand
        ? tech.length
        : 4
      : tech.length;

  const handleExpand = () => {
    setExpand((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-secondary text-2xl font-light">{title}</h1>
      <div className="flex flex-wrap gap-2 w-full">
        {tech.slice(0, sliceNumber).map((tech, index) => (
          <TechStackCard title={tech} key={index} index={index} />
        ))}
      </div>
      {isClient && window.innerWidth < 800 && (
        <motion.button
          ref={ref}
          variants={techCardVariants(4)}
          initial="initial"
          animate={controls}
          transition={{
            duration: 0.2,
            delay: 0.05,
            ease: "anticipate",
          }}
          onClick={handleExpand}
          className="w-full h-12 hover:opacity-80 bg-accent rounded-corner text-primary font-semibold text-xl transition-all duration-300 ease-in-out"
        >
          {expand ? "Show less" : "Show more"}
        </motion.button>
      )}
    </div>
  );
};

const TechStackSection = () => {
  return (
    <div
      id="tech-stack"
      className="w-screen h-full px-container flex flex-col gap-4 pb-20"
    >
      <h1 className="title !text-secondary">Tech Stack</h1>
      <div className="flex flex-col gap-8 w-full">
        <TechGroup tech={frontendTech} title="Front End Development" />
        <TechGroup tech={backendTech} title="Back End Development" />
        <TechGroup
          tech={languagesAndPrograms}
          title="Other Languages & Programs"
        />
      </div>
    </div>
  );
};

export default TechStackSection;
