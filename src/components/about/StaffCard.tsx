"use client";

import { FC, useRef, useEffect } from "react";
import classes from "./StaffCard.module.css";
import Image from "next/image";
import doc from "../../../public/doctor.jpg";
import { motion, useInView, useAnimation } from "framer-motion";

const StaffCard: FC = ({}) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  const animate = useAnimation();

  useEffect(() => {
    if (isInView) {
      animate.start("visible");
    }
  }, [isInView, animate]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={animate}
      transition={{ duration: 0.4, delay: 0.6 }}
      className={classes.container}
    >
      <div className={classes.imageContainer}>
        <Image
          src={doc}
          alt="doc"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <motion.p
        variants={{
          hidden: { opacity: 0, x: 30 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={animate}
        transition={{ duration: 0.4, delay: 1.6 }}
        className={classes.name}
      >
        Doctor NAME
      </motion.p>
      <motion.p
        variants={{
          hidden: { opacity: 0, x: 30 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={animate}
        transition={{ duration: 0.4, delay: 1.2 }}
        className={classes.title}
      >
        Fizyoterapist
      </motion.p>
    </motion.div>
  );
};

export default StaffCard;
