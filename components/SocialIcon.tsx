import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

const SocialIcon = ({
  image,
  link,
}: {
  image: StaticImageData;
  link: string;
}) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="w-14 aspect-square rounded-corner bg-secondaryBackground flex items-center justify-center p-2 hover:-translate-y-1 hover:shadow-custom-xl transition-all duration-100 ease-in-out"
    >
      <Image src={image} alt={`${image}`} width={25} height={25} />
    </Link>
  );
};

export default SocialIcon;
