import { FC } from "react";
import classes from "./AboutPage.module.css";

import AboutHeader from "./AboutHeader";
import AboutUs from "./AboutUs";
import Crew from "./Crew";

const AboutPage: FC = ({}) => {
  return (
    <div className={classes.container}>
      <AboutHeader />
      <AboutUs />
      <Crew />
    </div>
  );
};

export default AboutPage;
