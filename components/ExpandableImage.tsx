import Image from "next/image";
import React from "react";
import Expand from "@/public/assets/expand.svg";

const ExpandableImage = ({ image }: { image: string | undefined }) => {
  return (
    <div className="w-full relative aspect-video border-accent border-2 border-opacity-50 rounded-corner overflow-hidden group cursor-pointer">
      <Image
        src={image || ""}
        alt="gallery image"
        width={500}
        height={500}
        className=" object-contain w-full h-full"
      />
      <div className="w-10 aspect-square absolute bottom-0 left-0 rounded-tr-corner bg-accent/50 p-3 group-hover:p-[11px] transition-all duration-200 ease-in-out">
        <Image src={Expand} alt="expand" />
      </div>
    </div>
  );
};

export default ExpandableImage;
