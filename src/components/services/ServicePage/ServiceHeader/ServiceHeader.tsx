import { FC } from "react";
import classes from "./ServiceHeader.module.css";
import Image, { StaticImageData } from "next/image";
import head from "../../../../public/grag-5.png";
import Wrapper from "@/components/ui/single-page-wrapper/Wrapper";

interface ServiceHeaderProps {
  img: StaticImageData;
  title: string;
}

const ServiceHeader: FC<ServiceHeaderProps> = ({ img, title }) => {
  return (
    <Wrapper inpage>
      <div className={classes.container}>
        <Image
          src={img}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            zIndex: "-1",
          }}
          quality={100}
        />
        <Image
          src={head}
          alt="background"
          style={{
            width: "105%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            zIndex: "-1",
          }}
          quality={100}
        />
        <div className={classes.header}></div>
      </div>
    </Wrapper>
  );
};

export default ServiceHeader;
