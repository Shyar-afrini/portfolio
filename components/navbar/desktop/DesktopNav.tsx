"use client";

import React from "react";
import Logo from "@/public/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import NavLink from "../NavLink";
import { motion, Variants } from "framer-motion";

export const DownloadCV = () => {
  return (
    <a
      href={"/assets/shyar-abdalhanan.pdf"}
      download={"shyar-abdalhanan.pdf"}
      className="text-lg bg-secondaryBackground rounded-corner px-8 py-2 cursor-pointer hover:bg-accent hover:text-primary font-[500] transition-all duration-300 ease-in-out "
    >
      download cv
    </a>
  );
};

const DesktopNav = () => {
  const variants: Variants = {
    initial: {
      width: "100%",
      position: "absolute",
      top: "-6rem",
    },
    fixed: {
      width: "100%",
      top: "0rem",
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="fixed"
      transition={{
        duration: 0.3,
        delay: 0.2,
        ease: "easeInOut",
      }}
      className="hidden md:flex items-center justify-between px-[6%] py-6 z-50 bg-primary"
    >
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
    </motion.div>
  );
};

export default DesktopNav;
