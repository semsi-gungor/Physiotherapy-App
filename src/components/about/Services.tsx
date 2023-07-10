import { FC } from "react";
import classes from "./Services.module.css";
import ServiceCard from "./ServiceCard";

const Services: FC = ({}) => {
  return (
    <div className={classes.container}>
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
    </div>
  );
};

export default Services;
