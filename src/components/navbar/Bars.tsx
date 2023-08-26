"use client";

import { FaBars } from "react-icons/fa";
import classes from "@/components/navbar/Bars.module.css";
import { FC, useState } from "react";
import { useContext } from "react";
import { uiContext } from "@/context/uiControl";

const Bars: FC = ({}) => {
  const uiCtx = useContext(uiContext);

  return (
    <div
      className={classes.bars}
      onClick={() => {
        uiCtx.displaySideMenu();
      }}
    >
      <FaBars />
    </div>
  );
};

export default Bars;
