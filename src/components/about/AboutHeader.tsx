import { FC } from "react";
import classes from "./AboutHeader.module.css";
import Image from "next/image";
import bg from "../../../public/bg-8.jpg";

const AboutHeader: FC = ({}) => {
  return (
    <div className={classes.container}>
      <Image
        src={bg}
        alt="background"
        style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }}
        quality={100}
      />
      <header className={classes.header}>
        <h1>PYHSICAL THERAPY EGZERSİZ VE DANIŞMANLIK MERKEZİ</h1>
      </header>
    </div>
  );
};

export default AboutHeader;
