import { FC } from "react";
import classes from "./AboutUs.module.css";
import Image from "next/image";
import img from "../../../public/bg-7.jpg";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

const AboutUs: FC = ({}) => {
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <Image
          src={img}
          alt="background"
          style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }}
          quality={100}
        />
      </div>
      <div className={classes.article}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          euismod purus a tristique cursus. Proin semper dui quam, eu vehicula
          metus malesuada a. Etiam sit amet porta felis. Vestibulum ullamcorper
          porttitor nibh sed faucibus. Duis a convallis dui. Suspendisse
          pulvinar lacinia quam quis sagittis. Ut at ultrices diam. Proin neque
          odio, gravida id vehicula id, molestie quis magna. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae.
        </p>
      </div>
      <div className={classes.who}>
        <BiSolidQuoteAltLeft />
        <h1>BİZ KİMİZ?</h1>
        <BiSolidQuoteAltRight />
      </div>
    </div>
  );
};

export default AboutUs;
