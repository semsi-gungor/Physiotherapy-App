import { FC } from "react";
import classes from "./AboutPage.module.css";

import AboutHeader from "./AboutHeader";
import AboutUs from "./AboutUs";

const AboutPage: FC = ({}) => {
  return (
    <div className={classes.container}>
      <AboutHeader />
      <AboutUs />
    </div>
  );
};

export default AboutPage;
