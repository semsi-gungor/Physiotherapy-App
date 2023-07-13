import { FC } from "react";
import classes from "./ServicePage.module.css";
import { findService } from "@/dummy-api/services";
import ServiceHeader from "./ServiceHeader/ServiceHeader";
import ServiceBody from "./ServiceBody/ServiceBody";
import FormSection from "../FormSection";

interface ServicePageProps {
  serviceId: string;
}

const ServicePage: FC<ServicePageProps> = ({ serviceId }) => {
  const { body, definition, title, image, treatments } = findService(serviceId);

  return (
    <div className={classes.container}>
      <ServiceHeader img={image} title={title} />
      <ServiceBody
        img={image}
        body={body}
        definition={definition}
        treatments={treatments}
        title={title}
      />
      <FormSection />
    </div>
  );
};

export default ServicePage;
