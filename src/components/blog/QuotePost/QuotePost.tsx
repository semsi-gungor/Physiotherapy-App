import { FC } from "react";
import classes from "./QuotePost.module.css";
import { BlogPart } from "@/types/blog-posts";

interface QuotePostProps {
  post: BlogPart;
}

const QuotePost: FC<QuotePostProps> = ({ post }) => {
  return <div className={classes.container}></div>;
};

export default QuotePost;
