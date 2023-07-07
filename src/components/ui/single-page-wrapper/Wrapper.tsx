"use client";

import classes from "./Wrapper.module.css";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return <div className={classes.wrapper}>{children}</div>;
}
