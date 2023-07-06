"use client";

import classes from "./Title.module.css";

export default function Title({ title }: { title: string }) {
  return (
    <div className={classes.title}>
      <h2>{title}</h2>
    </div>
  );
}
