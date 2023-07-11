import { FC } from "react";
import classes from "./ServicesPage.module.css";
import ServicesHeader from "./ServicesHeader";
import ServicesMain from "./ServicesMain";
import FormSection from "./FormSection";

const ServicesPage: FC = () => {
  return (
    <div className={classes.container}>
      <ServicesHeader />
      <ServicesMain />
      <FormSection />
    </div>
  );
};

export default ServicesPage;
