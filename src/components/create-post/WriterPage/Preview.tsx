"use client";

import { FC, useContext } from "react";
import { blogContext } from "@/context/blogContext";
import BlogRender from "@/components/blog/BlogRender/BlogRender";
import classes from "./Preview.module.css";
import { Poppins } from "next/font/google";

type InputType = "text" | "list" | "quote" | "header" | "image";

const poppins = Poppins({ subsets: ["latin"], weight: "600" });

type PreviewProps = {
  setType: (type: InputType) => void;
};

const Preview: FC<PreviewProps> = ({ setType }) => {
  const blogCtx = useContext(blogContext);

  return (
    <div
      className={`${blogCtx.postArray.length === 0 ? "" : classes.container}`}
    >
      {blogCtx.postArray.length === 0 ? (
        <h1 className={`${classes.empty} ${poppins.className}`}>
          Bir şeyler eklemeye başla...
        </h1>
      ) : (
        blogCtx.postArray.map((post) => {
          return <BlogRender key={post.postId} post={post} setType={setType} />;
        })
      )}
    </div>
  );
};

export default Preview;
