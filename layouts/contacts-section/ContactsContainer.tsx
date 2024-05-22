import Image, { StaticImageData } from "next/image";
import React from "react";
import RectFade from "@/public/assets/rect-fade-black.svg";
import github from "@/public/assets/github.svg";
import instagram from "@/public/assets/instagram.svg";
import youtube from "@/public/assets/youtube.svg";
import linkedin from "@/public/assets/linkedin.svg";
import whatsapp from "@/public/assets/whatsapp.svg";
import facebook from "@/public/assets/facebook.svg";

const SocialIcon = ({ image }: { image: StaticImageData }) => {
  return (
    <div className="w-14 aspect-square rounded-corner bg-secondary flex items-center justify-center p-2">
      <Image src={image} alt={`${image}`} width={25} height={25} />
    </div>
  );
};

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

const ContactsContainer = () => {
  const socialIcons = [
    github,
    whatsapp,
    youtube,
    instagram,
    linkedin,
    facebook,
  ];

  return (
    <div className="w-screen h-screen bg-accent">
      <Image src={RectFade} alt="rect-fade" />
      <div className="w-full h-full px-container pb-20">
        <h1 className="text-title text-secondary font-semibold py-12">
          contacts
        </h1>
        <div className="w-full h-1/2 flex flex-col gap-4 items-center justify-center">
          <button className="bg-secondary w-full lg:w-1/2 max-w-lg h-16 rounded-corner relative">
            <div className="absolute bottom-3 left-1/2 active:bottom-0 active:w-full -translate-x-1/2 rounded-corner w-[96%] h-full bg-accent border-[3px] border-secondary text-secondary text-3xl font-semibold flex justify-center items-center transition-all duration-300 ease-in-out">
              email me
            </div>
          </button>
          <SocialIconsGroup socialIcons={socialIcons} />
        </div>
      </div>
    </div>
  );
};

export default ContactsContainer;
