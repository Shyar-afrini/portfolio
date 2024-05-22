import React from "react";

const TechStackCard = ({ title }: { title: string }) => {
  return (
    <div className="w-fit min-w-52 py-2 px-16 flex-grow border-l-8 border-accent rounded-[4px] bg-secondary text-center text-lg border border-t-accent/60 border-b-accent/60 border-r-accent/60">
      {title}
    </div>
  );
};

const TechGroup = ({ tech, title }: { tech: string[]; title: string }) => {
  return (
    <div>
      <h1 className="text-text/80 text-2xl pb-4">{title}</h1>
      <div className="flex flex-wrap flex-shrink gap-2 w-full">
        {tech.map((tech: string, index: number) => (
          <TechStackCard title={tech} key={index} />
        ))}
      </div>
    </div>
  );
};

const TechStackSection = () => {
  const frontendTech = [
    "expo",
    "tailwind",
    "framer motion",
    "react native",
    "javascript",
    "html",
    "css",
    "typescript",
    "react",
    "nextjs",
    "shadcn/ui",
  ];

  const backendTech = [
    "knex.js",
    "mssql",
    "firebase",
    "railway",
    "node.js",
    "cors",
    "mysql",
    "postgresql",
    "express.js",
  ];

  const languagesAndPrograms = [
    "vscode",
    "git",
    "figma",
    "postman",
    "flstudio",
    "ngrok",
    "python",
    "c++",
    "photoshop",
  ];

  return (
    <div className="w-screen h-full px-container flex flex-col gap-4 pb-20">
      <h1 className="text-title">tech stack</h1>
      <div className="flex flex-col gap-8 w-full">
        <TechGroup tech={frontendTech} title="front end developemnt" />
        <TechGroup tech={backendTech} title="back end developemnt" />
        <TechGroup
          tech={languagesAndPrograms}
          title="other languages & programs"
        />
      </div>
    </div>
  );
};

export default TechStackSection;
