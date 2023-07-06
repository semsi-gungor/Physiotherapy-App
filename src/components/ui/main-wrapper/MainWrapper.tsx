"use client";

import classes from "./MainWrapper.module.css";

type Props = {
  children?: React.ReactNode;
};

export default function MainWrapper({ children }: Props) {
  return (
    <>
      <header className={classes.header}>
        <h1>Hizmetlerimiz</h1>
      </header>
      <div className={classes.wrapper}>{children}</div>
    </>
  );
}
