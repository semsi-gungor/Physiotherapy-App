"use client";

import classes from "@/components/navbar/Navbar.module.css";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Bars from "./Bars";
import useScroll from "@/hooks/useScroll";
import Buttons from "./Buttons";
import SideMenu from "./SideMenu";
import { CSSTransition } from "react-transition-group";
import { useContext } from "react";
import { uiContext } from "@/context/uiControl";

export default function Navbar() {
  const { isScrollOnTop: isOnTop } = useScroll();
  const uiCtx = useContext(uiContext);

  return (
    <>
      <nav className={`${classes.navbar} ${!isOnTop ? classes.shrink : ""}`}>
        <Logo />
        <NavLinks />
        <Buttons />
        <Bars />
      </nav>
      <CSSTransition in={uiCtx.isSideMenuShow} timeout={500} unmountOnExit>
        <SideMenu />
      </CSSTransition>
    </>
  );
}
