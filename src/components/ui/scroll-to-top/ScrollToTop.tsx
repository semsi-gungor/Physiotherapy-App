"use client";

import classes from "./ScrollToTop.module.css";
import { BsChevronUp } from "react-icons/bs";
import useScroll from "@/hooks/useScroll";
import { FC } from "react";

const ScrollToTop: FC = ({}) => {
  const { isScrollOnTop, scrollToTop } = useScroll();

  return (
    <div
      className={`${classes.container} ${
        isScrollOnTop ? classes.slideOut : classes.slideIn
      }`}
      onClick={scrollToTop}
    >
      <BsChevronUp />
    </div>
  );
};

export default ScrollToTop;
