"use client";

import { FC } from "react";
import classes from "./SideNavbar.module.css";
import { usePathname } from "next/navigation";
import {
  BsPersonLinesFill,
  BsCalendar2WeekFill,
  BsFillChatLeftQuoteFill,
  BsFillGearFill,
  BsPersonFillGear,
} from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import NavLink from "./NavLink";
import { signOut } from "next-auth/react";

interface SideNavbarProps {}

const SideNavbar: FC<SideNavbarProps> = ({}) => {
  const path = usePathname();
  return (
    <div className={classes.container}>
      <ul className={classes.navlist}>
        <NavLink
          icon={AiFillHome}
          link="/dashboard"
          title={"Ana Sayfa"}
          active={path === "/dashboard"}
        />
        <NavLink
          icon={BsPersonLinesFill}
          link="/dashboard/uyeler"
          title={"Üyeler"}
          active={path === "/dashboard/uyeler"}
        />

        <NavLink
          icon={BsPersonFillGear}
          link="/dashboard/personel"
          title={"Personel"}
          active={path === "/dashboard/personel"}
        />
        <NavLink
          icon={BsCalendar2WeekFill}
          link="/dashboard/randevular"
          title={"Randevular"}
          active={path === "/dashboard/randevular"}
        />
        <NavLink
          icon={BsFillChatLeftQuoteFill}
          link="/dashboard/blog"
          title={"Blog"}
          active={path === "/dashboard/blog"}
        />
        <NavLink
          icon={BsFillGearFill}
          link="/dashboard/hizmetler"
          title={"Hizmetler"}
          active={path === "/dashboard/hizmetler"}
        />
      </ul>
      <div
        className={classes.logout}
        onClick={() => {
          signOut();
        }}
      >
        <BiLogOut />
      </div>
    </div>
  );
};

export default SideNavbar;
