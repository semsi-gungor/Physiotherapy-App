"use client";

import { FC } from "react";
import classes from "./SideNavbar.module.css";
import { usePathname } from "next/navigation";
import {
  BsPersonLinesFill,
  BsCalendar2WeekFill,
  BsFillChatLeftQuoteFill,
  BsFillGearFill,
} from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import NavLink from "./NavLink";

interface SideNavbarProps {}

const SideNavbar: FC<SideNavbarProps> = ({}) => {
  const path = usePathname();
  return (
    <div className={classes.container}>
      <ul className={classes.navlist}>
        <NavLink
          icon={AiFillHome}
          link="/admin-dashboard"
          title={"Ana Sayfa"}
          active={path === "/admin-dashboard"}
        />
        <NavLink
          icon={BsPersonLinesFill}
          link="/admin-dashboard/uyeler"
          title={"Üyeler"}
          active={path === "/admin-dashboard/uyeler"}
        />
        <NavLink
          icon={BsCalendar2WeekFill}
          link="/admin-dashboard/randevular"
          title={"Randevular"}
          active={path === "/admin-dashboard/randevular"}
        />
        <NavLink
          icon={BsFillChatLeftQuoteFill}
          link="/admin-dashboard/blog"
          title={"Blog"}
          active={path === "/admin-dashboard/blog"}
        />
        <NavLink
          icon={BsFillGearFill}
          link="/admin-dashboard/hizmetler"
          title={"Hizmetler"}
          active={path === "/admin-dashboard/hizmetler"}
        />
      </ul>
    </div>
  );
};

export default SideNavbar;
