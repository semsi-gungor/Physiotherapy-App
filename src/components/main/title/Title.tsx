"use client";

import classes from "./Title.module.css";
import { IconType } from "react-icons/lib";

export default function Title({
  title,
  icon: Icon,
}: {
  title: string;
  icon: IconType;
}) {
  return (
    <div className={classes.title}>
      <h2>{title}</h2>
      <Icon />
    </div>
  );
}
