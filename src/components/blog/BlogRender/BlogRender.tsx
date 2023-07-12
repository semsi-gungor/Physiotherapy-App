import { FC } from "react";
import classes from "./BlogRender.module.css";
import { BlogPart } from "@/types/blog-posts";
import TextPost from "../TextPost/TextPost";
import ImagePost from "../ImagePost/ImagePost";
import HeaderPost from "../HeaderPost/HeaderPost";
import ListPost from "../ListPost/ListPost";
import QuotePost from "../QuotePost/QuotePost";

interface BlogRenderProps {
  post: BlogPart;
}

const BlogRender: FC<BlogRenderProps> = ({ post }) => {
  const postType = post.postType;

  return (
    <div className={classes.container}>
      {postType === "header" && <HeaderPost post={post} />}
      {postType === "text" && <TextPost post={post} />}
      {postType === "image" && <ImagePost post={post} />}
      {postType === "list" && <ListPost post={post} />}
      {postType === "quote" && <QuotePost post={post} />}
    </div>
  );
};

export default BlogRender;
