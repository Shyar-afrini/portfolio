"use client";

import { cn } from "@/utils/cn";
import { getRandomCharacter } from "@/utils/getRandomCharacter";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { ClassNameValue } from "tailwind-merge";

const NavLink = ({
  href,
  title,
  setMenuOpen,
  className,
}: {
  href: string;
  title: string;
  setMenuOpen?: Dispatch<SetStateAction<boolean>>;
  className?: ClassNameValue;
}) => {
  const [displayText, setDisplayText] = useState(title);
  const isInProgress = useRef(false);
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (isInProgress.current) return;

    isInProgress.current = true;
    let index = 0;

    intervalId.current = setInterval(() => {
      if (index < title.length) {
        setDisplayText(
          (prev) =>
            `${title.substring(0, index + 1)}${title
              .substring(index + 1)
              .split("")
              .map((_, i) =>
                i === index ? title.charAt(index) : getRandomCharacter()
              )
              .join("")}`
        );
        index++;
      } else {
        clearInterval(intervalId.current!);
        isInProgress.current = false;
      }
    }, 80);
  };

  return (
    <motion.a
      className={cn("text-lg", className)}
      href={href}
      onMouseEnter={handleMouseEnter}
      onClick={() =>
        setTimeout(() => {
          setMenuOpen && setMenuOpen(false);
        }, 500)
      }
      whileHover={{ filter: "brightness(1.25)" }}
    >
      {displayText}
    </motion.a>
  );
};

export default NavLink;
