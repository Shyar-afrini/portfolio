import { StaticImageData } from "next/image";
import React from "react";
import SocialIcon from "./SocialIcon";

const SocialIconsGroup = ({
  socialIcons,
}: {
  socialIcons: StaticImageData[];
}) => {
  return (
    <div className="flex flex-wrap gap-2 items-center justify-center">
      {socialIcons.map((icon: StaticImageData, index: number) => (
        <SocialIcon image={icon} key={index} />
      ))}
    </div>
  );
};

export default SocialIconsGroup;
