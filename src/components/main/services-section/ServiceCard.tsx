"use client";

import classes from "./ServiceCard.module.css";
import Image, { StaticImageData } from "next/image";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface ServiceCardProps {
  title: string;
  image: StaticImageData;
  link: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ title, image, link }) => {
  const router = useRouter();

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div
      className={`${classes.card} ${inView ? classes.slideIn : ""}`}
      ref={ref}
      onClick={() => {
        router.push(`/hizmetlerimiz/${link}`);
      }}
    >
      <div className={classes.imageContainer}>
        <Image
          src={image}
          alt="background"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          quality={20}
        />
      </div>
      <div className={classes.info}>
        <p>{title}</p>
      </div>
    </div>
  );
};
export default ServiceCard;
