"use client";

import classes from "./Comments.module.css";
import Comment from "./Comment";
import { FC } from "react";

const comments = [
  {
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam turpis et mauris fermentum pulvinar.",
  },
  {
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam turpis et mauris fermentum pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam turpis et mauris fermentum pulvinar.",
  },
];

const CommentsContainer: FC = ({}) => {
  return (
    <div className={classes.container}>
      {comments.map((comment, index) => {
        return (
          <Comment
            key={index}
            name={comment.name}
            text={comment.text}
            queue={index}
          />
        );
      })}
    </div>
  );
};

export default CommentsContainer;
