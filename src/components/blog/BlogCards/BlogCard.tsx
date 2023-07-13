"use client";

import { FC, useRef, useEffect } from "react";
import classes from "./BlogCard.module.css";
import { motion, useInView, useAnimation } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

interface BlogCardProps {}

const BlogCard: FC<BlogCardProps> = ({}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animate = useAnimation();

  useEffect(() => {
    if (isInView) {
      animate.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      className={classes.container}
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={animate}
      transition={{ duration: 0.4, delay: 0.6 }}
    >
      <div className={classes.imageContainer}>
        <img
          src="https://images.unsplash.com/photo-1487956382158-bb926046304a"
          alt="title"
        />
      </div>
      <div className={classes.infoContainer}>
        <h4 className={classes.title}>
          Robotik Omurga Cerrahisi ile Yeni Dönem Başlıyor
        </h4>
        <p className={classes.summary}>
          Omurga Ameliyatından Yıllarca Kaçtım Diyenlere Güzel Haber! Robotik
          omurga cerrahisinde; güncel sağlık teknolojisi, hasta güvenliği ve
          öngörülebilir cerrahi…
        </p>
        <div className={classes.blogButton}>
          <span>Devamını oku</span>
          <BsArrowRight />
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
