"use client";

import classes from "./MainBlog.module.css";
import Image from "next/image";
import blog from "../../../../public/bg-1.jpg";
import FeaturedPost from "./FeaturedPost";
import { useInView } from "react-intersection-observer";

export default function MainBlog() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div
      className={`${classes.blog} ${inView ? classes.shadow : ""}`}
      ref={ref}
    >
      <div className={`${classes.posts} ${inView ? classes.slideInLeft : ""}`}>
        <FeaturedPost />
        <FeaturedPost />
        <FeaturedPost />
      </div>
      <div
        className={`${classes.imageContainer} ${
          inView ? classes.slideInRight : ""
        }`}
      >
        <Image src={blog} alt="blog" />
      </div>
    </div>
  );
}
