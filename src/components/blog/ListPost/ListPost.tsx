import { FC } from "react";
import classes from "./ListPost.module.css";
import { BlogPart } from "@/types/blog-posts";

interface ListPostProps {
  post: BlogPart;
}

const ListPost: FC<ListPostProps> = ({ post }) => {
  const content = post.postContent;
  let mappedData;

  if (Array.isArray(content)) {
    mappedData = content.map((item) => {
      return <li className={classes.item}>{item}</li>;
    });
  } else {
    mappedData = [content];
  }
  const listType = post.options?.listType;

  if (listType === "ol") {
    return <ol className={classes.list}>{mappedData}</ol>;
  }

  return <ul className={classes.list}>{mappedData}</ul>;
};

export default ListPost;
