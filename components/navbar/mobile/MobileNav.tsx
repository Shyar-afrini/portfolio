"use client";

import Close from "@/public/assets/close.svg";
import Logo from "@/public/assets/logo.svg";
import Menu from "@/public/assets/menu.svg";
import MenuDark from "@/public/assets/menu-mobile.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import NavLink from "../NavLink";
import { GetScrollHeight } from "@/utils/getScrollHeight";

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollHeight, setScrollHeight] = useState<number>(0);

  GetScrollHeight(setScrollHeight);

  return (
    <motion.div
      className={`md:hidden ${
        scrollHeight! > 600
          ? "h-16 bg-accent fixed w-full flex items-center justify-between shadow-lg shadow-primary/10"
          : "h-fit flex relative items-center justify-between pt-12"
      } px-container z-50 transition-all duration-200 ease-in-out`}
    >
      <Link href={"/"}>
        <Image
          className="text-accent fill-accent mix-blend-difference"
          src={Logo}
          alt="logo"
          width={75}
          height={75}
        />
      </Link>
      <Image
        onClick={() => setMenuOpen(true)}
        src={scrollHeight > 600 ? MenuDark : Menu}
        alt="menu"
        width={24}
        height={24}
      />
      <SlideMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollHeight={scrollHeight}
      />
    </motion.div>
  );
};

const SlideMenu = ({
  menuOpen,
  setMenuOpen,
  scrollHeight,
}: {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  scrollHeight: number;
}) => {
  const variants = {
    open: { x: 0, opacity: 1 },
    closed: { x: 100, opacity: 0 },
  };

  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuOpen]);

  return (
    menuOpen && (
      <motion.div
        ref={menuRef}
        className={`gap-8 text-5xl text-primary font-semibold bg-accent w-[90%] h-full fixed top-0 right-0 px-container ${
          scrollHeight > 800 ? "pt-6" : "pt-14"
        }`}
        initial="closed"
        animate="open"
        exit="closed"
        variants={variants}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <div className="w-full flex justify-end">
          <Image
            onClick={() => setMenuOpen((prev) => !prev)}
            src={Close}
            alt="close"
            width={24}
            height={24}
          />
        </div>
        <ul className=" flex flex-col items-center justify-center gap-8 h-full w-full">
          <NavLink setMenuOpen={setMenuOpen} href="/#about" title="about" />
          <NavLink
            setMenuOpen={setMenuOpen}
            href="/#projects"
            title="projects"
          />
          <NavLink
            setMenuOpen={setMenuOpen}
            href="/#tech-stack"
            title="tech-stack"
          />
          <NavLink
            setMenuOpen={setMenuOpen}
            href="/#contacts"
            title="contacts"
          />
          <a
            href={"/assets/portfolio.pdf"}
            download={"shyar-afrini.pdf"}
            className="text-[1.4rem] bg-secondary text-text rounded-corner px-8 py-4 cursor-pointer font-[500] transition-all duration-300 ease-in-out mt-8"
          >
            download cv
          </a>
        </ul>
      </motion.div>
    )
  );
};

export default MobileNav;
