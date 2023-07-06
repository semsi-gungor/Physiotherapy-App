"use client";

import classes from "./ServiceCard.module.css";
import Image from "next/image";
import s4 from "../../../../public/s-4.jpg";
import { useInView } from "react-intersection-observer";

export default function ServiceCard() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div
      className={`${classes.card} ${inView ? classes.slideIn : ""}`}
      ref={ref}
    >
      <div className={classes.imageContainer}>
        <Image
          src={s4}
          alt="background"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          quality={50}
        />
      </div>
      <div className={classes.info}>
        <p>Lorem Ipsum</p>
      </div>
    </div>
  );
}
