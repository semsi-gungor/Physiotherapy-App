"use client";

import { FC } from "react";
import classes from "./ServicesPage.module.css";
import ServicesHeader from "./ServicesHeader";

const ServicesPage: FC = () => {
  return (
    <div className={classes.container}>
      <ServicesHeader />
    </div>
  );
};

export default ServicesPage;
