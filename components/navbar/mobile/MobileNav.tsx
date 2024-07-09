"use client";

import Close from "@/public/assets/close.svg";
import Logo from "@/public/assets/logo.svg";
import Menu from "@/public/assets/menu.svg";
import MenuDark from "@/public/assets/menu-mobile.svg";
import { GetScrollHeight } from "@/utils/getScrollHeight";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import NavLink from "../NavLink";

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);

  GetScrollHeight(setScrollHeight);

  const variants: Variants = {
    initial: {
      width: "100%",
      top: "-6rem",
    },
    fixed: {
      width: "100%",
      top: "0rem",
      position: scrollHeight > 600 ? "fixed" : "absolute",
      zIndex: 100,
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="fixed"
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={`md:hidden px-container flex justify-between ${
        scrollHeight > 600
          ? "bg-accent shadow-lg shadow-primary/20 py-4"
          : "bg-primary py-6"
      }`}
    >
      <Link href={"/"}>
        <Image
          src={Logo}
          alt="logo"
          width={75}
          height={75}
          className="mix-blend-difference"
        />
      </Link>
      <Image
        onClick={() => setMenuOpen(true)}
        src={scrollHeight > 600 ? MenuDark : Menu}
        alt="menu"
        width={24}
        height={24}
      />
      <SlideMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </motion.div>
  );
};

const SlideMenu = ({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const variants = {
    open: { x: "0%", opacity: 1 },
    closed: { x: "100%", opacity: 0 },
  };

  const linkVariants = (delay: number): Variants => {
    return {
      initial: {
        y: delay ? (delay / 10) * 100 : 0,
        opacity: 0,
      },
      animate: {
        y: 0,
        opacity: 1,
      },
    };
  };

  const links = ["about", "projects", "tech-stack", "contacts"];

  return (
    <AnimatePresence>
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="w-screen bg-black/30 h-dvh fixed top-0 left-0 z-40"
        >
          <motion.div
            className={`gap-8 text-5xl text-primary font-semibold bg-accent w-[90%] h-dvh fixed top-0 right-0 z-50 px-container py-8`}
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            transition={{ duration: 0.5, delay: 0.2, ease: "anticipate" }}
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
              {links.map((link, index) => (
                <motion.li
                  key={index}
                  variants={linkVariants(index)}
                  initial="initial"
                  animate={menuOpen && "animate"}
                  transition={{
                    duration: 0.6,
                    delay: index / 10,
                    ease: "easeInOut",
                  }}
                >
                  <NavLink
                    setMenuOpen={setMenuOpen}
                    href={`/#${link}`}
                    title={link}
                    className="text-5xl"
                  />
                </motion.li>
              ))}

              <motion.a
                variants={linkVariants(4)}
                initial="initial"
                animate={menuOpen && "animate"}
                transition={{
                  duration: 0.3,
                  delay: 0.2,
                  ease: "easeInOut",
                }}
                href={"/assets/shyar-abdalhanan.pdf"}
                download={"shyar-abdalhanan.pdf"}
                className="text-[1.4rem] bg-secondaryBackground text-secondary rounded-corner px-8 py-4 cursor-pointer font-[500] transition-all duration-300 ease-in-out mt-8"
              >
                download cv
              </motion.a>
            </ul>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
