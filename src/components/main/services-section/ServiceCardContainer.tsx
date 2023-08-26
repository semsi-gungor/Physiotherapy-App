"use client";

import classes from "./ServiceCardContainer.module.css";
import ServiceCard from "./ServiceCard";
import { services } from "@/dummy-api/services";
import { FC } from "react";

const ServiceCardContainer: FC = ({}) => {
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
};

export default ServiceCardContainer;
