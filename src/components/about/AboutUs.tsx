"use client";

import { FC } from "react";
import classes from "./AboutUs.module.css";
import Image from "next/image";
import img from "../../../public/bg-7.jpg";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { motion } from "framer-motion";

const AboutUs: FC = ({}) => {
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <Image
          src={img}
          alt="background"
          quality={100}
          fill
          objectFit="cover"
        />
      </div>
      <div className={classes.article}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          euismod purus a tristique cursus. Proin semper dui quam, eu vehicula
          metus malesuada a. Etiam sit amet porta felis. Vestibulum ullamcorper
          porttitor nibh sed faucibus. Duis a convallis dui. Suspendisse
          pulvinar lacinia quam quis sagittis. Ut at ultrices diam. Proin neque
          odio, gravida id vehicula id, molestie quis magna. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae.
        </p>
      </div>
      <div className={classes.who}>
        <BiSolidQuoteAltLeft />
        <motion.h1
          variants={{
            hidden: { scale: 0.8 },
            pop: { scale: 1 },
          }}
          initial="hidden"
          whileInView="pop"
          viewport={{ amount: 1, once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          BİZ KİMİZ?
        </motion.h1>
        <BiSolidQuoteAltRight />
      </div>
    </div>
  );
};

export default AboutUs;
