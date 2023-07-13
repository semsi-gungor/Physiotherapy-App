"use client";

import { FC } from "react";
import classes from "./BlogHeader.module.css";
import Image from "next/image";
import bg from "../../../../public/new-1.jpg";
import head from "../../../../public/grag-5.png";
import { motion } from "framer-motion";

const BlogHeader: FC = () => {
  return (
    <div className={classes.container}>
      <Image
        src={bg}
        alt="background"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          zIndex: "-1",
        }}
        quality={100}
      />

      <motion.header
        initial={{ y: 10 }}
        animate={{ y: 0 }}
        className={classes.header}
      >
        <Image
          src={head}
          alt="background"
          style={{
            width: "105%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            zIndex: "-1",
          }}
          quality={100}
        />
        <motion.h1 initial={{ scale: 0.9 }} animate={{ scale: 1 }}>
          BLOG YAZILARIMIZ
        </motion.h1>
      </motion.header>
    </div>
  );
};

export default BlogHeader;
