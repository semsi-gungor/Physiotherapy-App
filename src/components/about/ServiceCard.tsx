"use client";

import { FC, useRef } from "react";
import classes from "./ServiceCard.module.css";
import Image from "next/image";
import img from "../../../public/bg-5.jpg";
import { motion, useInView } from "framer-motion";

interface ServiceCardProps {}

const ServiceCard: FC<ServiceCardProps> = ({}) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      className={classes.container}
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-50px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <h4 className={classes.title}>Egzsersiz Servislerimiz</h4>
      <div className={classes.imageContainer}>
        <Image
          src={img}
          alt="image"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className={classes.cardBody}>
        <p>
          Kişiye Özel Fizik Tedavi Programı Kişiye özel antrenman programı,
          kişiye özel klinik pilates ve arkadaşınızla ya da eşinizle birlikte
          düet pilates. Tedavi seanslarımız tamamen kişiye özel olarak
          planlanmaktadır.
        </p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
