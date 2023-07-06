"use  client";

import classes from "./Comment.module.css";
import { BsPersonCircle } from "react-icons/bs";

type Props = {
  name: string;
  text: string;
};

export default function Comment({ name, text }: Props) {
  return (
    <div className={classes.commentBody}>
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
}
