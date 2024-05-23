import Image, { StaticImageData } from "next/image";
import React from "react";

const SocialIcon = ({ image }: { image: StaticImageData }) => {
  return (
    <div className="w-14 aspect-square rounded-corner bg-secondary flex items-center justify-center p-2">
      <Image src={image} alt={`${image}`} width={25} height={25} />
    </div>
  );
};

export default SocialIcon;
