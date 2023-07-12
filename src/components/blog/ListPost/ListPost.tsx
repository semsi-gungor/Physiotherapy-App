import { FC } from "react";
import classes from "./ListPost.module.css";
import { BlogPart } from "@/types/blog-posts";

interface ListPostProps {
  post: BlogPart;
}

const ListPost: FC<ListPostProps> = ({ post }) => {
  return <div className={classes.container}></div>;
};

export default ListPost;
