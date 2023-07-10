import { FC } from "react";
import classes from "./AboutPage.module.css";

import AboutHeader from "./AboutHeader";
import AboutUs from "./AboutUs";
import Staff from "./Staff";
import Title from "../main/title/Title";
import { TbMedicalCross } from "react-icons/tb";

const AboutPage: FC = ({}) => {
  return (
    <div className={classes.container}>
      <AboutHeader />
      <AboutUs />
      <Title title="EKİBİMİZ" icon={TbMedicalCross} />
      <Staff />
    </div>
  );
};

export default AboutPage;
