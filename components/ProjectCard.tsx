import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

const ProjectCard = ({
  setCurrentTitle,
  image,
  title,
  paragraph,
  setSlideOpen,
}: {
  image: string;
  title: string;
  paragraph: string;
  setSlideOpen: Dispatch<SetStateAction<boolean>>;
  setCurrentTitle: Dispatch<SetStateAction<string>>;
}) => {
  const handleOnclick = () => {
    setCurrentTitle(title);
    setSlideOpen(true);
  };
  return (
    <div
      onClick={handleOnclick}
      className="relative w-full aspect-video rounded-corner border-accent border-opacity-60 border-2 overflow-hidden"
    >
      <Image src={image} alt="project cover" fill />
      <div className="bg-gradient-to-b from-text/0 via-primary/60 to-primary backdrop-brightness-90 hover:backdrop-brightness-125 transition-all duration-300 ease-in-out cursor-pointer w-full h-full z-30 absolute top-0 left-0"></div>
      <div className="absolute bottom-0 left-0 p-[5%] z-30">
        <h1 className="text-3xl md:text-4xl xl:text-5xl">{title}</h1>
        <p className="text-xs lg:text-sm xl:text-md text-text/70 leading-3 lg:leading-[14px] xl:leading-4 text-pretty">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
