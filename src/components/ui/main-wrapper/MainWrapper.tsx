"use client";

import classes from "./MainWrapper.module.css";

type Props = {
  children?: React.ReactNode;
  title: string;
};

export default function MainWrapper({ children, title }: Props) {
  return (
    <>
      <header className={classes.header}>
        <h1>{title}</h1>
      </header>
      <div className={classes.wrapper}>{children}</div>
    </>
  );
}
