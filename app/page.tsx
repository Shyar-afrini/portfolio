import ArrowUpButton from "@/components/ArrowUp";
import AboutContainer from "@/layouts/about-section/AboutContainer";
import ContactsContainer from "@/layouts/contacts-section/ContactsContainer";
import HeroContainer from "@/layouts/hero-section/HeroContainer";
import ProjectsContainer from "@/layouts/projects-section/ProjectsContainer";
import TechStackSection from "@/layouts/tech-stack-section/TechStackSection";

const LastSection = () => {
  return (
    <section className="w-full h-fit pb-12 pt-6 bg-primary flex items-center justify-center text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ">
      thanks for stopping by
    </section>
  );
};

const Home = () => {
  return (
    <main className="overflow-hidden relative">
      <HeroContainer />
      <AboutContainer />
      <ProjectsContainer />
      <TechStackSection />
      <ContactsContainer />
      <LastSection />
      <ArrowUpButton />
    </main>
  );
};

export default Home;
