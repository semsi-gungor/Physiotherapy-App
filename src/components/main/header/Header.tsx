"use client";

import { FC, useRef } from "react";
import classes from "./Header.module.css";
import Image from "next/image";
import bg from "../../../../public/bg-2.jpg";
import Captions from "./Captions";
import { Poppins } from "next/font/google";
import { useScroll, useTransform, motion } from "framer-motion";

const poppins = Poppins({ subsets: ["latin"], weight: "600" });

const Header: FC = ({}) => {
  const ref = useRef(null);

  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  let opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <header className={classes.header} ref={ref}>
      <motion.div
        style={{
          y,
          opacity,
        }}
        className="absolute inset-x-0 h-screen z-10 pointer-events-none"
      >
        <Image
          src={bg}
          alt="background"
          style={{
            objectFit: "cover",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 80%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
            maskPosition: "50% 0%",
          }}
          fill
          quality={70}
        />
      </motion.div>

      <Captions />
    </header>
  );
};

export default Header;
