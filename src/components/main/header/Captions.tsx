"use client";

import { useState } from "react";
import classes from "./Captions.module.css";

const captions = [
  { id: 0, title: "For human rights have resulted." },
  { id: 1, title: "I never dreamed about success. I worked for it." },
  { id: 2, title: "." },
];

export default function Captions() {
  return (
    <div className={classes.container}>
      <p className={classes.doubleUp} style={{ top: "2.5rem" }}>
        For human rights have resulted.
      </p>
      <p className={classes.up} style={{ top: "2.5rem" }}>
        Don’t let yesterday take up too much of today
      </p>
      <span className={`${classes.bracket} ${classes.grow}`}></span>
      <p className={classes.down} style={{ top: "4.7rem" }}>
        For human rights have resulted.
      </p>
    </div>
  );
}
