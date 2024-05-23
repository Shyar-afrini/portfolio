import { Dispatch, SetStateAction, useEffect } from "react";

export const GetScrollHeight = (setState: Dispatch<SetStateAction<number>>) => {
  useEffect(() => {
    const handleScroll = () => {
      setState(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setState]);
};
