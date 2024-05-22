import RotatingText from "@/components/RotatingText";
import AboutContainer from "@/layouts/about-section/AboutContainer";
import HeroContainer from "@/layouts/hero-section/HeroContainer";
import ProjectsContainer from "@/layouts/projects-section/ProjectsContainer";
import React from "react";
import ReactCurvedText from "react-curved-text";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroContainer />
      <AboutContainer />
      <ProjectsContainer />
    </div>
  );
};

export default Home;
