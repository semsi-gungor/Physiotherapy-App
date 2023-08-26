"use client";

import classes from "./NavLinks.module.css";
import Link from "next/link";
import { FC, useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { usePathname } from "next/navigation";

const navItems = [
  { title: "Ana Sayfa", href: "/" },
  { title: "Hizmetlerimiz", href: "/hizmetlerimiz" },
  { title: "Blog", href: "/blog" },
  { title: "Hakkımızda", href: "/hakkimizda" },
  { title: "İletişim", href: "/iletisim" },
];

const services = [
  { title: "Reformer Pilates", id: "64d0f29a30266b57fafe1bf6" },
  { title: "Hamile Pilaatesi", id: "64d0f32130266b57fafe1bf7" },
  { title: "Yogaterapi", id: "64d0f36d30266b57fafe1bf8" },
  { title: "Menuel Terapi", id: "64d0f39530266b57fafe1bf9" },
  { title: "Pelvik Taban Rehebilitasyonu", id: "64d0f3df30266b57fafe1bfa" },
  { title: "3 Boyutlu Skolyoz Egzersizleri", id: "64d0f3f830266b57fafe1bfb" },
  {
    title: "Kanser Sornası Egzersiz Danışmanlığı",
    id: "64d0f43a30266b57fafe1bfc",
  },
  { title: "Dans ve Zumba", id: "64d0f45d30266b57fafe1bfd" },
];

const NavLinks: FC = () => {
  const path = usePathname();

  const [isDrop, setIsDrop] = useState(false);

  return (
    <ul className={classes.list}>
      {navItems.map((item) => {
        let isActive = path.startsWith(item.href);

        if (item.href === "/" && item.href !== path) {
          isActive = false;
        }

        if (item.href.startsWith("/hizmetlerimiz")) {
          return (
            <li
              key={item.title}
              className={`${classes.listItem} ${
                isActive ? classes.active : ""
              }`}
              onMouseEnter={() => {
                setIsDrop(true);
              }}
              onMouseLeave={() => {
                setIsDrop(false);
              }}
            >
              <Link href={item.href}>{item.title}</Link>
              <CSSTransition in={isDrop} timeout={300} unmountOnExit>
                <ul
                  className={`${classes.dropDown} ${
                    isDrop ? classes.slideIn : classes.slideOut
                  }`}
                >
                  {services.map((service: any) => {
                    return (
                      <li
                        key={service.id}
                        className={classes.dropItem}
                        onClick={() => {
                          setIsDrop(!isDrop);
                        }}
                      >
                        <Link href={`/hizmetlerimiz/${service.id}`}>
                          {service.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </CSSTransition>
            </li>
          );
        }

        return (
          <li
            key={item.title}
            className={`${classes.listItem} ${isActive ? classes.active : ""}`}
          >
            <Link href={item.href}>{item.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
