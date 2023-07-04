"use client";

import classes from "./SideMenu.module.css";
import { CSSTransition } from "react-transition-group";
import Link from "next/link";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState, useContext } from "react";
import { uiContext } from "@/context/uiControl";

export default function SideMenu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const uiCtx = useContext(uiContext);

  return (
    <>
      <div
        className={`${classes.shadow} ${
          uiCtx.isSideMenuShow ? classes.shadowIn : classes.shadowOut
        }`}
        onClick={() => {
          uiCtx.hideSideMenu();
        }}
      ></div>
      <ul
        className={`${classes.menu} ${
          uiCtx.isSideMenuShow ? classes.menuIn : classes.menuOut
        }`}
      >
        <li className={classes.menuItem}>
          <Link href={"/"}>Anasayfa</Link>
        </li>
        <li
          className={`${classes.menuItem} ${classes.dropDown}`}
          onClick={() => {
            setIsDropdownOpen(!isDropdownOpen);
          }}
        >
          <span>Hizmetlerimiz</span>{" "}
          {isDropdownOpen ? <BsChevronUp /> : <BsChevronDown />}
        </li>
        <CSSTransition in={isDropdownOpen} timeout={400} unmountOnExit>
          <ul
            className={`${isDropdownOpen ? classes.slideIn : classes.slideOut}`}
          >
            <li className={classes.menuItem}>as</li>
            <li className={classes.menuItem}>as</li>
            <li className={classes.menuItem}>as</li>
            <li className={classes.menuItem}>as</li>
            <li className={classes.menuItem}>as</li>
            <li className={classes.menuItem}>as</li>
            <li className={classes.menuItem}>as</li>
            <li className={classes.menuItem}>as</li>
            <li className={classes.menuItem}>as</li>
            <li className={classes.menuItem}>as</li>
          </ul>
        </CSSTransition>

        <li className={classes.menuItem}>
          <Link href={"/"}>Blog</Link>
        </li>
        <li className={classes.menuItem}>
          <Link href={"/"}>Hakkımızda</Link>
        </li>
        <li className={classes.menuItem}>
          <Link href={"/"}>İletişim</Link>
        </li>
        <div className={classes.buttons}>
          <Link href={"/"}>RARNDEVU AL</Link>
          <Link href={"/"}>GİRİŞ YAP</Link>
        </div>
      </ul>
    </>
  );
}
