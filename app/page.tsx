import ArrowUpButton from "@/components/ArrowUp";
import AboutContainer from "@/layouts/about-section/AboutContainer";
import ContactsContainer from "@/layouts/contacts-section/ContactsContainer";
import HeroContainer from "@/layouts/hero-section/HeroContainer";
import ProjectsContainer from "@/layouts/projects-section/ProjectsContainer";
import TechStackSection from "@/layouts/tech-stack-section/TechStackSection";

const LastSection = () => {
  return (
    <div className="w-full h-fit py-12 bg-primary flex items-center justify-center text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ">
      thanks for stopping by
    </div>
  );
};

const Home = () => {
  return (
    <div className="overflow-hidden relative">
      <HeroContainer />
      <AboutContainer />
      <ProjectsContainer />
      <TechStackSection />
      <ContactsContainer />
      <LastSection />
      <ArrowUpButton />
    </div>
  );
};

export default Home;
