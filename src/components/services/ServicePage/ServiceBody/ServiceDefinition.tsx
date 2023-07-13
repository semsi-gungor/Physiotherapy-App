import { FC } from "react";
import classes from "./ServiceDefinition.module.css";

interface ServiceDefinitionProps {
  definition: string;
  title: string;
}

const ServiceDefinition: FC<ServiceDefinitionProps> = ({
  title,
  definition,
}) => {
  return (
    <div className={classes.container}>
      <h2>{`${title} Nedir ?`}</h2>
      <p>{definition}</p>
    </div>
  );
};

export default ServiceDefinition;
