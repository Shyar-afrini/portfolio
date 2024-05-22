import React from "react";
import Logo from "@/public/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import NavLink from "../NavLink";

const DownloadCV = () => {
  return (
    <div className="text-xl bg-secondary rounded-corner px-8 py-2 cursor-pointer hover:bg-accent hover:text-primary font-[500] transition-all duration-300 ease-in-out ">
      download cv
    </div>
  );
};

const DesktopNav = () => {
  return (
    <div className="hidden md:flex items-center justify-between px-[6%] pt-12">
      <Link href={"/"}>
        <Image src={Logo} alt="logo" width={75} height={75} />
      </Link>
      <ul className="flex gap-8 text-xl font-[300]">
        <NavLink href="/#about" title="about" />
        <NavLink href="/#projects" title="projects" />
        <NavLink href="/#tech-stack" title="tech-stack" />
        <NavLink href="/#contacts" title="contacts" />
      </ul>
      <DownloadCV />
    </div>
  );
};

export default DesktopNav;
