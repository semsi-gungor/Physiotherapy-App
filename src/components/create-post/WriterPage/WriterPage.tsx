"use client";

import { FC } from "react";
import classes from "./WriterPage.module.css";
import InputMenu from "./InputMenu";

interface WriterPageProps {}

const WriterPage: FC<WriterPageProps> = ({}) => {
  return (
    <div className={classes.container}>
      <InputMenu />
    </div>
  );
};

export default WriterPage;
