"use client";

import classes from "./SideMenu.module.css";
import { CSSTransition } from "react-transition-group";
import Link from "next/link";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState, useContext } from "react";
import { uiContext } from "@/context/uiControl";
import Button from "../ui/button/Button";
import { services } from "@/dummy-api/services";
import { useSession } from "next-auth/react";
import { FC } from "react";

const SideMenu: FC = ({}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const uiCtx = useContext(uiContext);
  const { data: session, status } = useSession();

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
          <Link href={"/"} className="w-full h-full grid place-items-center">
            Anasayfa
          </Link>
        </li>
        <li
          className={`${classes.menuItem} ${classes.dropDown}`}
          onClick={() => {
            setIsDropdownOpen(!isDropdownOpen);
          }}
        >
          <span>Hizmetlerimiz</span>
          {isDropdownOpen ? <BsChevronUp /> : <BsChevronDown />}
        </li>
        <CSSTransition
          in={isDropdownOpen}
          timeout={services.length * 100 + 100}
          unmountOnExit
        >
          <ul
            className={`${classes.drawer} ${
              isDropdownOpen ? classes.open : classes.close
            }`}
          >
            {services.map((item, index) => {
              return (
                <li
                  onClick={() => {
                    setIsDropdownOpen(false);
                    uiCtx.hideSideMenu();
                  }}
                  key={index}
                  style={{ animationDelay: `${index * 100}ms` }}
                  className={`${classes.dropDownItem} ${
                    isDropdownOpen
                      ? classes.slideIn
                      : `${classes.op} ${classes.slideOut}`
                  }`}
                >
                  <Link
                    href={`/hizmetlerimiz/${item.id}`}
                    className="w-full h-full grid place-items-center"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </CSSTransition>

        <li className={classes.menuItem}>
          <Link
            className="w-full h-full grid place-items-center"
            href={"/blog"}
          >
            Blog
          </Link>
        </li>
        <li className={classes.menuItem}>
          <Link
            className="w-full h-full grid place-items-center"
            href={"/hakkimizda"}
          >
            Hakkımızda
          </Link>
        </li>
        <li className={classes.menuItem}>
          <Link
            className="w-full h-full grid place-items-center"
            href={"/iletisim"}
          >
            İletişim
          </Link>
        </li>
        <div className={classes.buttons}>
          <Link href={"/randevu-alma"}>
            <Button size="thquarters">RANDEVU AL</Button>
          </Link>
          {!session ? (
            <Link href={"/giris"}>
              <Button size="thquarters">GİRİŞ YAP</Button>
            </Link>
          ) : (
            <Link href={"/profil"}>
              <Button size="thquarters">PROFİL</Button>
            </Link>
          )}
        </div>
      </ul>
    </>
  );
};

export default SideMenu;
