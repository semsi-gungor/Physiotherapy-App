"use client";

import { FC, useState } from "react";
import classes from "./SideNavbar.module.css";
import { usePathname } from "next/navigation";
import { BsPersonLinesFill, BsFillChatLeftQuoteFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import NavLink from "./NavLink";

interface SideNavbarProps {}

const links = [
  { link: "/personnel", icon: AiFillHome, title: "Ana Sayfa", id: "main" },
  {
    link: "/personnel/randevular",
    icon: BsPersonLinesFill,
    title: "Randevular",
    id: "randevular",
  },
  {
    link: "/personnel/blog",
    icon: BsFillChatLeftQuoteFill,
    title: "Blog",
    id: "blog",
  },
];

const SideNavbar: FC<SideNavbarProps> = ({}) => {
  const [activeTab, setActiveTab] = useState(links[0].id);

  const path = usePathname();
  return (
    <div className={classes.container}>
      <ul className={classes.navlist}>
        {links.map((link) => {
          return (
            <NavLink
              key={link.id}
              active={activeTab === link.id}
              icon={link.icon}
              link={link.link}
              title={link.title}
              onClick={() => {
                setActiveTab(link.id);
              }}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default SideNavbar;
