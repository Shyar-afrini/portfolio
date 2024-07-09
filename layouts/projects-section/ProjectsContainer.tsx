"use client";

import { allProjects } from "@/backend/queries";
import { TContent } from "@/backend/types";
import ExpandableImage from "@/components/ExpandableImage";
import ProjectCard from "@/components/ProjectCard";
import ChevronDown from "@/public/assets/ChevronDown.svg";
import RectFade from "@/public/assets/rect-fade-breakpoint.svg";
import ExternalLink from "@/public/assets/visit.svg";
import fetchData from "@/utils/fetchData";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { TechGroup } from "../tech-stack-section/TechStackSection";

const ProjectsContainer = () => {
  const [data, setData] = useState<TContent[]>();
  const [currentTitle, setCurrentTitle] = useState("");
  const [slideOpen, setSlideOpen] = useState(false);

  useEffect(() => {
    if (slideOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "scroll";
    };
  }, [slideOpen]);

  useEffect(() => {
    const handleDataSet = async () => {
      const response = await fetchData(allProjects);
      setData(response.projects);
    };
    handleDataSet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {}, [currentTitle]);

  return (
    <section
      id="projects"
      className="w-screen h-full overflow-hidden pb-20 relative"
    >
      <Image src={RectFade} alt="rect-fade" />
      <div className="w-full h-full px-container flex flex-col gap-6">
        <h1 className="title !text-secondary pt-12">projects</h1>
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-6 xl:gap-x-8 xl:gap-y-8">
          {data?.map((project: TContent, index: number) => (
            <ProjectCard
              setCurrentTitle={setCurrentTitle}
              setSlideOpen={setSlideOpen}
              title={project.title}
              image={project.coverImage.url}
              paragraph={project.description.text}
              key={index}
            />
          ))}
        </div>
        <div className="w-full h-12 bg-accent rounded-corner flex items-center justify-center text-xl text-primary font-semibold">
          Show more
        </div>
      </div>
      <ProjectSlider
        data={data}
        currentTitle={currentTitle}
        slideOpen={slideOpen}
        setSlideOpen={setSlideOpen}
      />
    </section>
  );
};

export default ProjectsContainer;

const ProjectSlider = ({
  slideOpen,
  setSlideOpen,
  data,
  currentTitle,
}: {
  slideOpen: boolean;
  setSlideOpen: Dispatch<SetStateAction<boolean>>;
  data: TContent[] | undefined;
  currentTitle: string;
}) => {
  const [project, setProject] = useState<TContent>();
  const containerRef = useRef<HTMLDivElement>(null);
  const variants = {
    initial: { y: "100%", opacity: 0 },
    open: { y: "10%", opacity: 1 },
  };

  useEffect(() => {
    const handleSlideData = () => {
      let newData = data?.filter(
        (project: TContent) => project.title === currentTitle
      );
      setProject(newData?.[0]);
    };
    handleSlideData();
  }, [currentTitle, data]);

  const handleVisitButton = () => {
    if (!project?.link) return;
    // ? 'noopener,noreferrer' These just mean to seperate the window object from the portfolio from the other site.
    window.open(project.link, "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      {slideOpen && (
        <motion.div
          variants={variants}
          initial="initial"
          animate="open"
          exit="initial"
          transition={{ duration: 0.4, ease: "backInOut" }}
          ref={containerRef}
          className="h-full min-h-screen w-full overflow-y-scroll fixed bottom-0 left-0 z-[200] bg-primary border-t-2 border-t-accent/50 rounded-corner px-container pt-10 pb-32 flex flex-col items-center gap-8"
        >
          <div
            onClick={() => setSlideOpen(false)}
            className="fixed top-0 left-0 w-full h-10 bg-primary flex items-center justify-center aspect-square cursor-pointer"
          >
            <Image src={ChevronDown} alt="ChevronDown" className="w-8" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
            <ExpandableImage image={project?.gallery?.[0]?.url} />
            <ExpandableImage image={project?.gallery?.[1]?.url} />
          </div>
          <div className="w-full flex flex-col items-center">
            <h1 className="title !text-secondary">{project?.title}</h1>
            <p className="text-center w-full md:w-3/4 lg:w-1/2 text-pretty">
              {project?.description.text}
            </p>
          </div>
          <button
            onClick={handleVisitButton}
            className="w-fit px-6 py-3 hover:opacity-90 bg-accent text-[22px] text-primary rounded-corner flex gap-3 items-center transition-all ease-in-out duration-200"
          >
            <Image
              src={ExternalLink}
              alt="source link"
              className="w-5 aspect-square"
            />
            {project?.link ? "visit site" : "Coming Soon!"}
          </button>
          <div>
            <TechnologiesSection techstack={project?.techstack} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const TechnologiesSection = ({
  techstack,
}: {
  techstack: string[] | undefined;
}) => {
  return (
    <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
      <h1 className="title !text-secondary text-center leading-[50px] md:leading-normal">
        Tools and Frameworks
      </h1>
      <div className="w-full h-full">
        <TechGroup tech={techstack ? techstack : []} />
      </div>
    </div>
  );
};
