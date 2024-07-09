import Image from "next/image";
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
      className="relative w-full aspect-video rounded-corner border-accent border-opacity-60 border-2 overflow-hidden group cursor-pointer"
    >
      <Image src={image} alt="project cover" fill />
      <div className="bg-gradient-to-b from-secondary/0 via-primary/60 to-primary backdrop-brightness-90 group-hover:backdrop-brightness-125 transition-all duration-300 ease-in-out w-full h-full z-30 absolute top-0 left-0"></div>
      <div className="absolute bottom-0 left-0 p-[5%] z-30 group-hover:backdrop-brightness-125">
        <h1 className="text-3xl md:text-4xl xl:text-5xl">{title}</h1>
        <p className="paragarph">{paragraph}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
