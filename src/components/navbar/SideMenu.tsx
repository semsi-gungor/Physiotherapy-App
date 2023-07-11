"use client";

import classes from "./SideMenu.module.css";
import { CSSTransition } from "react-transition-group";
import Link from "next/link";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState, useContext } from "react";
import { uiContext } from "@/context/uiControl";
import Button from "../ui/button/Button";

const dropdownItems = [
  { title: "Item 1" },
  { title: "Item 2" },
  { title: "Item 3" },
  { title: "Item 4" },
];

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
        <CSSTransition in={isDropdownOpen} timeout={2000} unmountOnExit>
          <ul className={`${isDropdownOpen ? classes.open : classes.close}`}>
            {dropdownItems.map((item, index) => {
              return (
                <li
                  key={index}
                  style={{ animationDelay: `${index * 300}ms` }}
                  className={`${classes.dropDownItem} ${
                    isDropdownOpen
                      ? classes.slideIn
                      : `${classes.op} ${classes.slideOut}`
                  }`}
                >
                  {item.title}
                </li>
              );
            })}
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
          <Link href={"/"}>
            <Button size="thquarters">RANDEVU AL</Button>
          </Link>
          <Link href={"/"}>
            <Button size="thquarters">GİRİŞ YAP</Button>
          </Link>
        </div>
      </ul>
    </>
  );
}
