"use client";

import classes from "./ServiceCardContainer.module.css";
import ServiceCard from "./ServiceCard";
import { services } from "@/dummy-api/services";

export default function ServiceCardContainer() {
  return (
    <div className={classes.container}>
      {services.map((service) => {
        return (
          <ServiceCard
            key={service.id}
            link={service.id}
            title={service.title}
            image={service.image}
          />
        );
      })}
    </div>
  );
}
