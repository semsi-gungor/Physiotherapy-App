"use client";

import Image from "next/image";
import logo from "../../../public/logo.png";
import classes from "./Logo.module.css";
import Link from "next/link";

export default function Logo() {
  return (
    <div className={classes.imgContainer}>
      <Link href={"/"}>
        <Image src={logo} alt="logo" />
      </Link>
    </div>
  );
}
