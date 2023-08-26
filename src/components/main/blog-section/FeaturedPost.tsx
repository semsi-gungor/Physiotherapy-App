"use client";

import classes from "./Featured.module.css";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { FC } from "react";

const FeaturedPost: FC = ({}) => {
  return (
    <div className={classes.container}>
      <h3>Robotik Omurga Cerrahisi ile Yeni Dönem Başlıyor</h3>
      <p>
        Omurga Ameliyatından Yıllarca Kaçtım Diyenlere Güzel Haber! Robotik
        omurga cerrahisinde; güncel sağlık teknolojisi, hasta güvenliği ve
        öngörülebilir cerrahi…
      </p>
      <Link href={"/"}>
        Devamını Oku <BsArrowRight />
      </Link>
    </div>
  );
};

export default FeaturedPost;
