"use  client";

import { useInView } from "react-intersection-observer";
import classes from "./Comment.module.css";
import { BsPersonCircle } from "react-icons/bs";
import { FC } from "react";

interface CommentProps {
  name: string;
  text: string;
  queue: number;
}

const Comment: FC<CommentProps> = ({ text, queue, name }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div
      className={`${classes.commentBody} ${inView ? classes.slideIn : ""}`}
      style={{ animationDelay: `${queue * 300}ms` }}
      ref={ref}
    >
      <div className={classes.profile}>
        <BsPersonCircle />
      </div>
      <div className={classes.comment}>
        <div className={classes.name}>{name}</div>
        <p className={classes.commentText}>
          {text}
          <span className={classes.notch}></span>
        </p>
      </div>
    </div>
  );
};

export default Comment;
