"use client";

import classes from "./Header.module.css";
import Image from "next/image";
import bg from "../../../../public/bg-2.jpg";

export default function Header() {
  return (
    <header className={classes.header}>
      <Image
        src={bg}
        alt="background"
        style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }}
        quality={100}
      />
    </header>
  );
}
