import { FC } from "react";
import classes from "./ServicePage.module.css";
import { findService } from "@/dummy-api/services";
import ServiceHeader from "./ServiceHeader/ServiceHeader";

interface ServicePageProps {
  serviceId: string;
}

const ServicePage: FC<ServicePageProps> = ({ serviceId }) => {
  const { body, definition, title, image, treatments } = findService(serviceId);

  return (
    <div className={classes.container}>
      <ServiceHeader img={image} title={title} />
    </div>
  );
};

export default ServicePage;
