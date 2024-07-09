"use client";

import { GetScrollHeight } from "@/utils/getScrollHeight";
import { ArrowUp } from "lucide-react";
import React, { useEffect, useState } from "react";

const ArrowUpButton = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  GetScrollHeight(setScrollHeight);

  const scrollTop = () => {
    if (typeof window !== undefined) {
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <div
      onClick={scrollTop}
      className={`w-16 aspect-square bg-accent fixed ${
        scrollHeight > 800
          ? "bottom-4 right-4 opacity-100"
          : "-bottom-10 right-4 opacity-0"
      } rounded-full flex items-center justify-center shadow-custom-xl active:bottom-3 active:right-3 active:shadow-custom-sm shadow-secondaryBackground border-2 border-secondaryBackground z-40 transition-all duration-300 ease-in-out cursor-pointer`}
    >
      <ArrowUp color="#121212" />
    </div>
  );
};

export default ArrowUpButton;
