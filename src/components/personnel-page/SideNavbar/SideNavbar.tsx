"use client";

import { FC, useState, useEffect } from "react";
import classes from "./SideNavbar.module.css";
import { usePathname } from "next/navigation";
import {
  BsPersonLinesFill,
  BsFillChatLeftQuoteFill,
  BsFillPersonPlusFill,
  BsFillChatTextFill,
} from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import NavLink from "./NavLink";
import { motion } from "framer-motion";
import { BiLogOut } from "react-icons/bi";
import { signOut, useSession } from "next-auth/react";

interface SideNavbarProps {}

const links = [
  { link: "/personnel", icon: AiFillHome, title: "Ana Sayfa", id: "main" },
  {
    link: "/personnel/randevu-istekleri",
    icon: BsFillPersonPlusFill,
    title: "Randevu İstekleri",
    id: "randevu-istekleri",
  },
  {
    link: "/personnel/blog",
    icon: BsFillChatLeftQuoteFill,
    title: "Blog",
    id: "blog",
  },
  {
    link: "/personnel/randevular",
    icon: BsPersonLinesFill,
    title: "Randevular",
    id: "randevular",
  },
  {
    link: "/personnel/mesajlar",
    icon: BsFillChatTextFill,
    title: "Mesajlar",
    id: "mesajlar",
  },
];

const SideNavbar: FC<SideNavbarProps> = ({}) => {
  const [activeTab, setActiveTab] = useState(links[0].id);
  const { data: session, status } = useSession();

  return (
    <div className={classes.container}>
      <div className="mt-12 w-12 square border border-gray-400 rounded-full flex items-center justify-center bg-blue-100">
        {status === "loading" ? (
          <div>loading</div>
        ) : (
          <div className="font-bold">
            {session?.user.fullName.split(" ")[0][0]}
            {session?.user.fullName.split(" ")[1][0]}
          </div>
        )}
      </div>
      <ul className={classes.navlist}>
        {links.map((link) => {
          return (
            <div style={{ position: "relative" }} key={link.id}>
              <NavLink
                active={activeTab === link.id}
                icon={link.icon}
                link={link.link}
                title={link.title}
                onClick={() => {
                  setActiveTab(link.id);
                }}
              ></NavLink>

              {activeTab === link.id && (
                <motion.span
                  layoutId="activePill"
                  className={classes.active}
                  style={{ borderRadius: "15px" }}
                ></motion.span>
              )}
            </div>
          );
        })}
      </ul>
      <div
        onClick={() => {
          signOut();
        }}
        className="mb-12 w-12 h-12 rounded-xl  grid place-items-center text-3xl text-[var(--error)] cursor-pointer transition hover:bg-[var(--color-transparent)]"
      >
        <BiLogOut />
      </div>
    </div>
  );
};

export default SideNavbar;
