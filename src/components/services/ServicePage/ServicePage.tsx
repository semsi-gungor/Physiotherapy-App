import { FC } from "react";
import classes from "./ServicePage.module.css";
import { findService } from "@/dummy-api/services";

interface ServicePageProps {
  serviceId: string;
}

const ServicePage: FC<ServicePageProps> = ({ serviceId }) => {
  const { body, definition, title, image, treatments } = findService(serviceId);

  return <div className={classes.container}></div>;
};

export default ServicePage;
