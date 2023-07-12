"use client";

import { FC, useContext } from "react";
import { uiContext } from "@/context/uiControl";
import classes from "./WriterPage.module.css";
import InputMenu from "./InputMenu";
import Modal from "../Modal/Modal";

interface WriterPageProps {}

const WriterPage: FC<WriterPageProps> = ({}) => {
  const uiCtx = useContext(uiContext);

  return (
    <div className={classes.container}>
      <InputMenu />
      <Modal>Modal</Modal>
    </div>
  );
};

export default WriterPage;
