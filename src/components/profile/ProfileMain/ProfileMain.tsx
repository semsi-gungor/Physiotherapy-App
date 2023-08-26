"use client";

import { FC, useState } from "react";
import classes from "./ProfileMain.module.css";

interface ProfileMainProps {}

const ProfileMain: FC<ProfileMainProps> = ({}) => {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  return <div className={`${classes.container}`}></div>;
};

export default ProfileMain;
