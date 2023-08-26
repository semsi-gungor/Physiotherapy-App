import { FC } from "react";
import classes from "./ImagePost.module.css";
import { BlogPart } from "@/types/blog-posts";
import Image from "next/image";

interface ImagePostProps {
  post: BlogPart;
}

const ImagePost: FC<ImagePostProps> = ({ post }) => {
  const url = post.postContent.toString();

  const size = post.options?.size;

  let imageSize = classes.sm;

  if (size === "lg") {
    imageSize = classes.lg;
  } else if (size === "md") {
    imageSize = classes.md;
  }

  return (
    <div className={classes.container}>
      <div className={`${imageSize} relative`}>
        <Image src={url} alt="post" fill quality={50} />
      </div>
    </div>
  );
};

export default ImagePost;
