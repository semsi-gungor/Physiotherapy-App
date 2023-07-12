import { FC } from "react";
import classes from "./HeaderPost.module.css";
import { BlogPart } from "@/types/blog-posts";

interface HeaderPostProps {
  post: BlogPart;
}

const HeaderPost: FC<HeaderPostProps> = ({ post }) => {
  const color = post.options?.color;
  const size = post.options?.size;
  const content = post.postContent;

  let fontSize = classes.sm;

  if (size === "lg") {
    fontSize = classes.lg;
  } else if (size === "md") {
    fontSize = classes.md;
  }

  return (
    <h1
      className={`${fontSize}`}
      style={{ color: `${color}`, fontSize: `${fontSize}` }}
    >
      {content}
    </h1>
  );
};

export default HeaderPost;
