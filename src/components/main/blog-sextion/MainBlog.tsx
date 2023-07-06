"use client";

import classes from "./MainBlog.module.css";
import Image from "next/image";
import blog from "../../../../public/bg-1.jpg";
import FeaturedPost from "./FeaturedPost";

export default function MainBlog() {
  return (
    <div className={classes.blog}>
      <div className={classes.posts}>
        <FeaturedPost />
        <FeaturedPost />
        <FeaturedPost />
      </div>
      <div className={classes.imageContainer}>
        <Image src={blog} alt="blog" />
      </div>
    </div>
  );
}
