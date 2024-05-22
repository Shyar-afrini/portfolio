import AboutContainer from "@/layouts/about-section/AboutContainer";
import HeroContainer from "@/layouts/hero-section/HeroContainer";
import ProjectsContainer from "@/layouts/projects-section/ProjectsContainer";
import TechStackSection from "@/layouts/tech-stack-section/TechStackSection";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroContainer />
      <AboutContainer />
      <ProjectsContainer />
      <TechStackSection />
    </div>
  );
};

export default Home;
