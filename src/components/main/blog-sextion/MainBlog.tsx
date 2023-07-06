"use client";

import classes from "./MainBlog.module.css";
import Image from "next/image";
import blog from "../../../../public/bg-1.jpg";

export default function MainBlog() {
  return (
    <div className={classes.blog}>
      <div className={classes.posts}></div>
      <div className={classes.imageContainer}></div>
    </div>
  );
}
