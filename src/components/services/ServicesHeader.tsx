"use client";

import { FC, useEffect, useState, useRef } from "react";
import classes from "./ServicesHeader.module.css";
import bg from "../../../public/new-4-1.jpg";
import { services } from "@/dummy-api/services";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const ServicesHeader: FC = ({}) => {
  const [isShow, setIsShow] = useState(true);
  const [serviceIndex, setServiceIndex] = useState(0);

  const ref = useRef(null);

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
  }, [isShow, animate]);

  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  let opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        opacity,
      }}
      className="w-full h-[50vh] relative md:h-screen"
    >
      <Image
        fill
        src={bg}
        alt="bg"
        style={{
          objectFit: "cover",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 80%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
          maskPosition: "50% 0%",
        }}
        quality={100}
      />
      <div className={`${classes.container} ${poppins.className}`}>
        <motion.h1
          variants={{
            hiddenUp: { y: -100 },
            pop: { y: 0 },
            hiddenDown: { y: 100 },
          }}
          initial="hiddenUp"
          animate={animate}
          transition={{ duration: 0.8, ease: "linear" }}
          className=" md:block md:text-xl md:font-semibold lg:text-3xl lg:font-semibold"
        >
          {services[serviceIndex].title}
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default ServicesHeader;
