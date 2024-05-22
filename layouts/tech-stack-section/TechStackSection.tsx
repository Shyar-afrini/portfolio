"use client";

import React, { useEffect, useState } from "react";
import {
  backendTech,
  frontendTech,
  languagesAndPrograms,
} from "@/utils/techArray";

const TechStackCard = ({ title }: { title: string }) => {
  return (
    <div className="w-fit min-w-56 py-2 px-16 flex-grow border-l-8 border-accent rounded-[4px] bg-secondary text-center text-lg border border-t-accent/60 border-b-accent/60 border-r-accent/60">
      {title}
    </div>
  );
};

const TechGroup = ({ tech, title }: { tech: string[]; title: string }) => {
  const [expand, setExpand] = useState(false);
  const [isClient, setIsClient] = useState(false);

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
      <h1 className="text-text/80 text-2xl">{title}</h1>
      <div className="flex flex-wrap gap-2 w-full">
        {tech.slice(0, sliceNumber).map((tech, index) => (
          <TechStackCard title={tech} key={index} />
        ))}
      </div>
      {isClient && window.innerWidth < 800 && (
        <button
          onClick={handleExpand}
          className="w-full h-12 hover:opacity-80 bg-accent rounded-corner text-primary font-semibold text-xl transition-all duration-300 ease-in-out"
        >
          {expand ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
};

const TechStackSection = () => {
  return (
    <div className="w-screen h-full px-container flex flex-col gap-4 pb-20">
      <h1 className="text-title">Tech Stack</h1>
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
