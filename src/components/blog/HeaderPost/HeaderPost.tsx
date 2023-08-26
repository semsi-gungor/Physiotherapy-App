import { FC } from "react";
import classes from "./HeaderPost.module.css";
import { BlogPart } from "@/types/blog-posts";
import { Poppins } from "next/font/google";

interface HeaderPostProps {
  post: BlogPart;
}

const newFont = Poppins({ subsets: ["latin"], weight: "600" });

const HeaderPost: FC<HeaderPostProps> = ({ post }) => {
  const color = post.options?.color;
  const size = post.options?.size;
  const alignment = post.options?.textAlignment;
  const content = post.postContent;

  let fontSize = classes.sm;

  if (size === "lg") {
    fontSize = classes.lg;
  } else if (size === "md") {
    fontSize = classes.md;
  }

  let textAlignment = classes.left;

  if (alignment === "center") {
    textAlignment = classes.center;
  } else if (alignment === "right") {
    textAlignment = classes.right;
  }

  return (
    <h1
      className={`${fontSize} ${textAlignment} ${newFont.className}`}
      style={{ color: `${color}`, fontSize: `${fontSize}` }}
    >
      {content}
    </h1>
  );
};

export default HeaderPost;
