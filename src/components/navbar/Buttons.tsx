"use client";
import classes from "./Buttons.module.css";
import Link from "next/link";
import Button from "../ui/button/Button";

export default function Buttons() {
  return (
    <div className={classes.btnContainer}>
      <Link href="/login">GİRİŞ YAP</Link>
      <Link href="/">RANDEVU AL</Link>
    </div>
  );
}
