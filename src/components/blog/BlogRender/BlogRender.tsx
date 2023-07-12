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
  return <div className={classes.container}></div>;
};

export default BlogRender;
