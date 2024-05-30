import { Dispatch, RefObject, SetStateAction } from "react";

export const handleClickOutside = (
  event: MouseEvent,
  containerRef: RefObject<HTMLDivElement>,
  setState: Dispatch<SetStateAction<boolean>>
) => {
  if (
    containerRef.current &&
    !containerRef.current.contains(event.target as Node)
  ) {
    setState(false);
  }
};
