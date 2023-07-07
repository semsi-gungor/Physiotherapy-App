"use client";

import classes from "./NavLinks.module.css";
import Link from "next/link";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

export default function NavLinks() {
  const [isDrop, setIsDrop] = useState(false);

  function showDrop() {
    setIsDrop(true);
  }

  function hideDrop() {
    setIsDrop(false);
  }

  return (
    <ul className={classes.list}>
      <li className={classes.listItem}>
        <Link href={"/"}>Ana Sayfa</Link>
      </li>
      <li
        className={classes.listItem}
        style={{ position: "relative", padding: "1rem 0" }}
        onMouseEnter={showDrop}
        onMouseLeave={hideDrop}
      >
        <span>Hizmetlerimiz</span>
        <CSSTransition in={isDrop} timeout={300} unmountOnExit>
          <ul
            className={`${classes.dropDown} ${
              isDrop ? classes.slideIn : classes.slideOut
            }`}
          >
            <li className={classes.dropItem}>
              <Link href={"/"}>Lorem Ipsum</Link>
            </li>
            <li className={classes.dropItem}>
              <Link href={"/"}>Lorem Ipsum</Link>
            </li>
            <li className={classes.dropItem}>
              <Link href={"/"}>Lorem Ipsum</Link>
            </li>
            <li className={classes.dropItem}>
              <Link href={"/"}>Lorem Ipsum</Link>
            </li>
            <li className={classes.dropItem}>
              <Link href={"/"}>Lorem Ipsum</Link>
            </li>
          </ul>
        </CSSTransition>
      </li>
      <li className={classes.listItem}>
        <Link href={"/"}>Blog</Link>
      </li>
      <li className={classes.listItem}>
        <Link href={"/"}>Hakkımızda</Link>
      </li>
      <li className={classes.listItem}>
        <Link href={"/iletisim"}>İletişim</Link>
      </li>
    </ul>
  );
}
