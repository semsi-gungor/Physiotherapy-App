"use client";

import classes from "./MainWrapper.module.css";

type Props = {
  children?: React.ReactNode;
};

export default function MainWrapper({ children }: Props) {
  return <div className={classes.wrapper}>{children}</div>;
}