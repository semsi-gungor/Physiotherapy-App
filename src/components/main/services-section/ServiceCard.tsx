"use client";

import classes from "./ServiceCard.module.css";
import Image from "next/image";
import s4 from "../../../../public/s-4.jpg";

export default function ServiceCard() {
  return (
    <div className={classes.card}>
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
