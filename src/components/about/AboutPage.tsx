import { FC } from "react";
import classes from "./AboutPage.module.css";

import AboutHeader from "./AboutHeader";
import AboutUs from "./AboutUs";
import Personnels from "./Personnels";
import Cards from "./Cards/Cards";
import Gallery from "./Gallery/Gallery";

const AboutPage: FC = ({}) => {
  return (
    <div className={classes.container}>
      <AboutHeader />
      <AboutUs />
      <Cards />
      <Personnels />
      <Gallery />
    </div>
  );
};

export default AboutPage;
