import { FC } from "react";
import classes from "./ServicePage.module.css";
import { findService } from "@/dummy-api/services";
import ServiceHeader from "./ServiceHeader/ServiceHeader";
import ServiceBody from "./ServiceBody/ServiceBody";
import FormSection from "../FormSection";

interface ServicePageProps {
  service: {
    body: string;
    bodyImage: string;
    definition: string;
    headerImage: string;
    title: string;
    treatments: string[];
  };
}

const ServicePage: FC<ServicePageProps> = ({ service }) => {
  return (
    <div className={classes.container}>
      <ServiceHeader img={service.headerImage} title={service.title} />
      <ServiceBody
        img={service.bodyImage}
        body={service.body}
        definition={service.definition}
        treatments={service.treatments}
        title={service.title}
      />
      <FormSection />
    </div>
  );
};

export default ServicePage;
