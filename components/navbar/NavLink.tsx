"use client";

import { getRandomCharacter } from "@/utils/getRandomCharacter";
import Link from "next/link";
import { Dispatch, SetStateAction, useRef, useState } from "react";

const NavLink = ({
  href,
  title,
  setMenuOpen,
}: {
  href: string;
  title: string;
  setMenuOpen?: Dispatch<SetStateAction<boolean>>;
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
    <li>
      <Link
        href={href}
        onMouseEnter={handleMouseEnter}
        onClick={() =>
          setTimeout(() => {
            setMenuOpen && setMenuOpen(false);
          }, 500)
        }
        className="hover:brightness-125 transition-all duration-200 ease-in-out"
      >
        {displayText}
      </Link>
    </li>
  );
};

export default NavLink;
