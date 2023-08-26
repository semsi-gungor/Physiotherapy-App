"use client";

import { FC } from "react";
import classes from "./MainWrapper.module.css";

type Props = {
  children?: React.ReactNode;
};

const MainWrapper: FC<Props> = ({ children }) => {
  return <div className={classes.wrapper}>{children}</div>;
};

export default MainWrapper;
