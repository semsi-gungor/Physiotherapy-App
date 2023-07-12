import { FC } from "react";
import classes from "./TextPost.module.css";
import { BlogPart } from "@/types/blog-posts";

interface TextPostProps {
  post: BlogPart;
}

const TextPost: FC<TextPostProps> = ({ post }) => {
  return <div className={classes.container}></div>;
};

export default TextPost;
