"use client";

import { useState } from "react";
import classes from "./SocialIcon.module.css";
import { IconBase, IconType } from "react-icons/lib";

type Props = {
  icon: IconType;
  link: string;
  color: string;
};

export default function SocialIcon({
  icon: Icon,
  link,
  color: hoverColor,
}: Props) {
  const [color, setColor] = useState("rgb(39, 39, 64)");

  return (
    <a
      href={link}
      className={classes.container}
      style={{ color: color }}
      onMouseOver={() => {
        setColor(hoverColor);
      }}
      onMouseLeave={() => {
        setColor("rgb(39, 39, 64)");
      }}
    >
      <Icon size={25} />
    </a>
  );
}
