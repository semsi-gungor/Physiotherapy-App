"use client";
import classes from "./Buttons.module.css";
import Link from "next/link";

export default function Buttons() {
  return (
    <div className={classes.btnContainer}>
      <Link href="/">GİRİŞ YAP</Link>
      <Link href="/">RANDEVU AL</Link>
    </div>
  );
}
