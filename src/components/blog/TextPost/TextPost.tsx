import { FC } from "react";
import classes from "./TextPost.module.css";
import { BlogPart } from "@/types/blog-posts";

interface TextPostProps {
  post: BlogPart;
}

const TextPost: FC<TextPostProps> = ({ post }) => {
  const content = post.postContent;
  const color = post.options?.color;
  const align = post.options?.textAlignment;

  let textAlign = classes.left;

  if (align === "center") {
    textAlign = classes.center;
  } else if (align === "right") {
    textAlign = classes.right;
  }

  return (
    <p
      className={`${classes.text} ${textAlign}`}
      style={{ color: `${color} text-clip` }}
    >
      {content}
    </p>
  );
};

export default TextPost;
