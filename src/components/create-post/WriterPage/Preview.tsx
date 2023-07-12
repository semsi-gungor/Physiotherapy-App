"use client";

import { FC, useContext } from "react";
import { blogContext } from "@/context/blogContext";
import BlogRender from "@/components/blog/BlogRender/BlogRender";
import classes from "./Preview.module.css";

const Preview: FC = ({}) => {
  const blogCtx = useContext(blogContext);

  return (
    <div className={classes.container}>
      {blogCtx.postArray.map((post, index) => {
        return <BlogRender key={index} post={post} />;
      })}
    </div>
  );
};

export default Preview;
