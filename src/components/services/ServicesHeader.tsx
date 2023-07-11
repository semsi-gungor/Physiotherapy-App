"use client";

import { FC, useEffect, useState } from "react";
import classes from "./ServicesHeader.module.css";
import bg from "../../../public/new-4-1.jpg";
import Wrapper from "../ui/single-page-wrapper/Wrapper";
import { services } from "@/dummy-api/services";
import { motion, useAnimation } from "framer-motion";

const ServicesHeader: FC = ({}) => {
  const [isShow, setIsShow] = useState(true);
  const [serviceIndex, setServiceIndex] = useState(0);

  const animate = useAnimation();

  useEffect(() => {
    if (isShow) {
      animate.start("pop");
      setServiceIndex((prev) => {
        if (prev < 7) {
          return prev + 1;
        } else {
          return 0;
        }
      });
    } else {
      animate.start("hiddenUp");
    }

    const interval = setInterval(() => {
      setIsShow(!isShow);
    }, 2000);

    return () => clearInterval(interval);
  }, [isShow]);

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
          {/* {services[serviceIndex].title} */}
          {services[serviceIndex].title}
        </motion.h1>
      </div>
    </Wrapper>
  );
};

export default ServicesHeader;
