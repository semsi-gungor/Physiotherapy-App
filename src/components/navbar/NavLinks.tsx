"use client";

import classes from "./NavLinks.module.css";
import Link from "next/link";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { usePathname } from "next/navigation";
import { services } from "@/dummy-api/services";

const navItems = [
  { title: "Ana Sayfa", href: "/" },
  { title: "Hizmetlerimiz", href: "/hizmetlerimiz" },
  { title: "Blog", href: "/blog" },
  { title: "Hakkımızda", href: "/hakkimizda" },
  { title: "İletişim", href: "/iletisim" },
];

export default function NavLinks() {
  const path = usePathname();

  const [isDrop, setIsDrop] = useState(false);

  function showDrop() {
    setIsDrop(true);
  }

  function hideDrop() {
    setIsDrop(false);
  }

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
              onMouseEnter={showDrop}
              onMouseLeave={hideDrop}
            >
              <Link href={item.href}>{item.title}</Link>
              <CSSTransition in={isDrop} timeout={300} unmountOnExit>
                <ul
                  className={`${classes.dropDown} ${
                    isDrop ? classes.slideIn : classes.slideOut
                  }`}
                >
                  {services.map((service) => {
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
}
