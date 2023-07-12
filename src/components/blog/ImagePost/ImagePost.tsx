import { FC } from "react";
import classes from "./ImagePost.module.css";
import { BlogPart } from "@/types/blog-posts";

interface ImagePostProps {
  post: BlogPart;
}

const ImagePost: FC<ImagePostProps> = ({ post }) => {
  return <div className={classes.container}></div>;
};

export default ImagePost;
