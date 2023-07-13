import { FC } from "react";
import classes from "./ServiceBody.module.css";
import ServiceDefinition from "./ServiceDefinition";
import Image, { StaticImageData } from "next/image";
import TreatmentsList from "./TreatmentsList";

interface ServiceBodyProps {
  definition: string;
  treatments: string[];
  body: string;
  title: string;
  img: StaticImageData;
}

const ServiceBody: FC<ServiceBodyProps> = ({
  definition,
  treatments,
  body,
  title,
  img,
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.body}>
        <p>{body}</p>
      </div>
      <div className={classes.infoContainer}>
        <ServiceDefinition definition={definition} title={title} />
        {treatments.length > 0 && <TreatmentsList treatments={treatments} />}
      </div>
      <div className={classes.imageContainer}>
        <Image
          src={img}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default ServiceBody;
