"use client";

import { FaBars } from "react-icons/fa";
import classes from "@/components/navbar/Bars.module.css";
import { useState } from "react";
import { useContext } from "react";
import { uiContext } from "@/context/uiControl";

export default function Bars() {
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
}
