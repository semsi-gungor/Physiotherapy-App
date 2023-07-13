import { FC } from "react";
import classes from "./ImagePost.module.css";
import { BlogPart } from "@/types/blog-posts";

interface ImagePostProps {
  post: BlogPart;
}

const ImagePost: FC<ImagePostProps> = ({ post }) => {
  const url = post.postContent[0];
  const content = post.postContent[1];

  console.log(url);

  const size = post.options?.size;

  let imageSize = classes.sm;

  if (size === "lg") {
    imageSize = classes.lg;
  } else if (size === "md") {
    imageSize = classes.md;
  }

  return (
    <div className={classes.container}>
      <div className={`${imageSize}`}>
        <img src={url} alt={content} />
      </div>
      <p className={classes.content}>{content}</p>
    </div>
  );
};

export default ImagePost;
