import ProjectCard from "@/components/ProjectCard";
import Devskillz from "@/public/assets/devskillz.png";
import RectFade from "@/public/assets/rect-fade-breakpoint.svg";
import Rojava from "@/public/assets/rojava.png";
import Image from "next/image";

const ProjectsContainer = () => {
  return (
    <div id="projects" className="w-screen h-full overflow-hidden pb-20">
      <Image src={RectFade} alt="rect-fade" />
      <div className="w-full h-full px-container flex flex-col gap-6">
        <h1 className="text-title pt-12">projects</h1>
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6 lg:gap-x-12 lg:gap-y-8">
          <ProjectCard
            title="Kurd scholars"
            paragraph="platform that offers you an unparalleled opportunity to acquire the
          necessary experiences and skills needed for success in your academic
          journey."
            image={Rojava}
          />
          <ProjectCard
            title="devskillz"
            paragraph="platform that offers you an unparalleled opportunity to acquire the
          necessary experiences and skills needed for success in your academic
          journey."
            image={Devskillz}
          />
        </div>
        <div className="w-full h-12 bg-accent rounded-corner flex items-center justify-center text-xl text-primary font-semibold">
          Show more
        </div>
      </div>
    </div>
  );
};

export default ProjectsContainer;
