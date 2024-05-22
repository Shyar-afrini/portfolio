import Image from "next/image";
import React from "react";
import SineWave from "@/public/assets/sine.svg";
import Globe from "@/public/assets/globe.svg";

const AboutContainer = () => {
  return (
    <div id="about" className="w-screen h-full min-h-[90vh] pb-20 bg-accent relative flex flex-col gap-12">
      <Image
        src={SineWave}
        alt="sine"
        className="z-30 w-screen drop-shadow-xl shadow-primary"
      />
      <div className="w-full h-full px-container flex gap-10 justify-between pt-[5%]">
        <div className="flex flex-col gap-4">
          <h1 className="text-title font-semibold text-secondary">about me</h1>
          <p className="text-secondary/90 font-normal text-paragraph leading-paragraph w-full lg:max-w-3xl text-justify">
            I am a committed web developer with a passion for transforming
            innovative concepts into robust software solutions. With years of
            experience in front-end development, I have refined my skills in
            HTML, CSS, JavaScript, and React. My dedication to excellence drives
            me to produce high-quality code and deliver impactful projects.
            Currently, I am pursuing studies in communication engineering and
            physics, continuously expanding my technical expertise to stay ahead
            in the industry. My notable projects include [Kurd scholars org],
            demonstrating my ability to merge creativity with technical
            proficiency. Explore my portfolio to witness the results of my
            dedication and professionalism. I am eager to contribute to dynamic
            teams and engage in exciting projects in the future.
          </p>
        </div>
        <Image
          src={Globe}
          alt="globe"
          className="w-1/2 max-w-md hidden lg:block"
        />
      </div>
    </div>
  );
};

export default AboutContainer;
