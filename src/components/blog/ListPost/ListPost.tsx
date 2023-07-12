import { FC } from "react";
import classes from "./ListPost.module.css";
import { BlogPart } from "@/types/blog-posts";

interface ListPostProps {
  post: BlogPart;
}

const ListPost: FC<ListPostProps> = ({ post }) => {
  const content = [post.postContent];
  const listType = post.options?.listType;

  if (listType === "ol") {
    return (
      <ol className={classes.list}>
        {content.map((item) => {
          return <li className={classes.item}>{item}</li>;
        })}
      </ol>
    );
  }

  return (
    <ul className={classes.list}>
      {content.map((item) => {
        return <li className={classes.item}>{item}</li>;
      })}
    </ul>
  );
};

export default ListPost;
