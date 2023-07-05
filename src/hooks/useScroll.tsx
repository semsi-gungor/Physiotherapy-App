import { useState, useEffect } from "react";

let lastScroll = 0;

export default function useScroll() {
  const [scrollDirection, setScrolldirection] = useState(false);
  const [isScrollOnTop, setIsScrollOnTop] = useState(true);

  function scrollHandler() {
    let position = window.scrollY;

    if (position > 100) {
      setIsScrollOnTop(false);
    } else {
      setIsScrollOnTop(true);
    }

    if (lastScroll > position) {
      setScrolldirection(true);
    }

    if (lastScroll < position) {
      setScrolldirection(false);
    }
    lastScroll = position;
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, { passive: true });

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return { scrollDirection, isScrollOnTop, scrollToTop };
}
