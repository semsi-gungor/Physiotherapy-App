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
import SessionProvider from "../providers/SessionProvider/SessionProvider";
import { Poppins } from "next/font/google";
import QueryProvider from "../providers/QueryProvider/QueryProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Navbar: FC = () => {
  const { isScrollOnTop: isOnTop } = useScroll();
  const uiCtx = useContext(uiContext);

  return (
    <SessionProvider>
      <nav
        className={`${classes.navbar} ${!isOnTop ? classes.shrink : ""} ${
          poppins.className
        }`}
      >
        <Logo />
        <QueryProvider>
          <NavLinks />
        </QueryProvider>
        <Buttons />
        <Bars />
      </nav>
      <CSSTransition in={uiCtx.isSideMenuShow} timeout={500} unmountOnExit>
        <SideMenu />
      </CSSTransition>
    </SessionProvider>
  );
};

import { FC } from "react";

export default Navbar;
