"use client";

import { FC, useEffect, useState } from "react";
import classes from "./ServicesHeader.module.css";
import bg from "../../../public/new-4-1.jpg";
import Wrapper from "../ui/single-page-wrapper/Wrapper";
import { services } from "@/dummy-api/services";
import { motion, useAnimation } from "framer-motion";

const ServicesHeader: FC = ({}) => {
  const [serviceIndex, setServiceIndex] = useState(0);

  const animate = useAnimation();

  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     setServiceIndex((prev) => {
  //       if (prev < 7) {
  //         return prev + 1;
  //       } else {
  //         return 0;
  //       }
  //     });

  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }, 3800);
  // }, []);

  return (
    <Wrapper background={bg}>
      <div className={classes.container}>
        <motion.h1
          variants={{
            hiddenUp: { y: -100 },
            pop: { y: 0 },
            hiddenDown: { y: 100 },
          }}
          initial="hiddenUp"
          animate={animate}
          transition={{ duration: 0.8, ease: "linear" }}
        >
          {services[serviceIndex].title}
        </motion.h1>
        <button
          onClick={() => {
            animate.start("hiddenUp");
          }}
        >
          a
        </button>
        <button
          onClick={() => {
            animate.start("hiddenDown");
          }}
        >
          b
        </button>
        <button
          onClick={() => {
            animate.start("pop");
          }}
        >
          c
        </button>
      </div>
    </Wrapper>
  );
};

export default ServicesHeader;
