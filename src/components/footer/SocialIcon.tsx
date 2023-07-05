"use client";

import classes from "./SocialIcon.module.css";
import { IconBase, IconType } from "react-icons/lib";

type Props = {
  icon: IconType;
};

export default function SocialIcon({ icon: Icon }: Props) {
  return (
    <div className={classes.container}>
      <Icon size={25} />
    </div>
  );
}
