import { FC } from "react";
import classes from "./AboutHeader.module.css";
import Image from "next/image";
import bg from "../../../public/bg-8.jpg";

import head from "../../../public/grad-3.png";

const AboutHeader: FC = ({}) => {
  return (
    <div className={classes.container}>
      <Image
        src={bg}
        alt="background"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        quality={100}
      />
      <header className={classes.header}>
        <Image
          src={head}
          alt="background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            zIndex: "-1",
          }}
          quality={100}
        />
        <h1>PYHSICAL THERAPY EGZERSİZ VE DANIŞMANLIK MERKEZİ</h1>
      </header>
    </div>
  );
};

export default AboutHeader;
