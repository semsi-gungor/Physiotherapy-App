import { FC } from "react";
import classes from "./ListPost.module.css";
import { BlogPart } from "@/types/blog-posts";

interface ListPostProps {
  post: BlogPart;
}

const ListPost: FC<ListPostProps> = ({ post }) => {
  let content = post.postContent.split("\n");

  content = content.map((item) => {
    return item.split(".")[1];
  });

  let mappedData;

  if (Array.isArray(content)) {
    mappedData = content.map((item, index) => {
      return (
        <li key={item + index.toString()} className={classes.item}>
          {item}
        </li>
      );
    });
  } else {
    mappedData = [content];
  }
  const listType = post.options?.listType;

  if (listType === "ol") {
    return (
      <ol className={`${classes.list} ${classes.numbers}`}>{mappedData}</ol>
    );
  }

  return <ul className={`${classes.list} ${classes.dots}`}>{mappedData}</ul>;
};

export default ListPost;
