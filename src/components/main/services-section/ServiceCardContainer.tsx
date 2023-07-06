"use client";

import classes from "./ServiceCardContainer.module.css";
import ServiceCard from "./ServiceCard";

export default function ServiceCardContainer() {
  return (
    <div className={classes.container}>
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
    </div>
  );
}
