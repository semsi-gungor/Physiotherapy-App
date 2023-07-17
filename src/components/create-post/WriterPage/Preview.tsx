"use client";

import { FC, useContext } from "react";
import { blogContext } from "@/context/blogContext";
import BlogRender from "@/components/blog/BlogRender/BlogRender";
import classes from "./Preview.module.css";

type InputType = "text" | "list" | "quote" | "header" | "image";

type PreviewProps = {
  setType: (type: InputType) => void;
};

const Preview: FC<PreviewProps> = ({ setType }) => {
  const blogCtx = useContext(blogContext);

  return (
    <div className={classes.container}>
      {blogCtx.postArray.map((post) => {
        return <BlogRender key={post.postId} post={post} setType={setType} />;
      })}
    </div>
  );
};

export default Preview;
